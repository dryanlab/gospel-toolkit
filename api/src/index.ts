export interface Env {
  DB: D1Database;
  CORS_ORIGIN: string;
  ADMIN_TOKEN: string;
  TELEGRAM_BOT_TOKEN: string;
  TELEGRAM_CHAT_ID: string;
}

// Simple IP hash (not storing raw IP)
async function hashIP(ip: string): Promise<string> {
  const data = new TextEncoder().encode(ip + 'rockoftruth-salt');
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 16);
}

function cors(env: Env, response: Response): Response {
  const headers = new Headers(response.headers);
  headers.set('Access-Control-Allow-Origin', env.CORS_ORIGIN || '*');
  headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  return new Response(response.body, { status: response.status, headers });
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function auth(request: Request, env: Env): boolean {
  const token = request.headers.get('Authorization')?.replace('Bearer ', '');
  return token === env.ADMIN_TOKEN;
}

// Send Telegram notification
async function notifyTelegram(env: Env, text: string, buttons?: { text: string; callback_data: string }[][]) {
  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) return;
  const body: Record<string, unknown> = {
    chat_id: env.TELEGRAM_CHAT_ID,
    text,
    parse_mode: 'HTML',
  };
  if (buttons) {
    body.reply_markup = { inline_keyboard: buttons };
  }
  await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // CORS preflight
    if (request.method === 'OPTIONS') {
      return cors(env, new Response(null, { status: 204 }));
    }

    const url = new URL(request.url);
    const path = url.pathname;

    try {
      // ===== FIELD MAPPING (D1 snake_case → frontend camelCase) =====
      function mapLetterFields(row: Record<string, unknown>): Record<string, unknown> {
        return {
          ...row,
          authorEn: row.author_en,
          authorAvatar: row.author_avatar,
          authorBio: row.author_bio,
          authorBioEn: row.author_bio_en,
          scriptureText_zh: row.scripture_text_zh,
          scriptureText_en: row.scripture_text_en,
        };
      }

      // ===== LETTERS =====

      // GET /letters - list published letters: released first (newest on top), then upcoming (earliest first)
      if (path === '/letters' && request.method === 'GET') {
        const rows = await env.DB.prepare(
          `SELECT * FROM letters WHERE status = ? ORDER BY
            CASE WHEN date <= date('now') THEN 0 ELSE 1 END,
            CASE WHEN date <= date('now') THEN date END DESC,
            CASE WHEN date > date('now') THEN date END ASC`
        ).bind('published').all();
        return cors(env, json({ letters: (rows.results || []).map(r => mapLetterFields(r as Record<string, unknown>)) }));
      }

      // GET /letters/:id - get single letter
      if (path.startsWith('/letters/') && request.method === 'GET' && !path.includes('/admin')) {
        const id = path.split('/letters/')[1];
        const row = await env.DB.prepare(
          'SELECT * FROM letters WHERE id = ? AND status = ?'
        ).bind(id, 'published').first();
        if (!row) return cors(env, json({ error: 'Not found' }, 404));
        return cors(env, json({ letter: mapLetterFields(row as Record<string, unknown>) }));
      }

      // POST /letters - create/update letter (admin)
      if (path === '/letters' && request.method === 'POST') {
        if (!auth(request, env)) return cors(env, json({ error: 'Unauthorized' }, 401));
        const data = await request.json() as Record<string, unknown>;
        const id = data.id as string;
        if (!id) return cors(env, json({ error: 'id required' }, 400));

        // Upsert
        await env.DB.prepare(`
          INSERT INTO letters (id, author, author_en, author_avatar, author_bio, author_bio_en, title_zh, title_en, date, category, scripture, scripture_text_zh, scripture_text_en, summary_zh, summary_en, content_zh, content_en, tags, status, updated_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
          ON CONFLICT(id) DO UPDATE SET
            author=excluded.author, author_en=excluded.author_en, author_avatar=excluded.author_avatar,
            author_bio=excluded.author_bio, author_bio_en=excluded.author_bio_en,
            title_zh=excluded.title_zh, title_en=excluded.title_en, date=excluded.date,
            category=excluded.category, scripture=excluded.scripture,
            scripture_text_zh=excluded.scripture_text_zh, scripture_text_en=excluded.scripture_text_en,
            summary_zh=excluded.summary_zh, summary_en=excluded.summary_en,
            content_zh=excluded.content_zh, content_en=excluded.content_en,
            tags=excluded.tags, status=excluded.status, updated_at=datetime('now')
        `).bind(
          id, data.author, data.author_en, data.author_avatar || '📜',
          data.author_bio, data.author_bio_en,
          data.title_zh, data.title_en, data.date, data.category,
          data.scripture, data.scripture_text_zh, data.scripture_text_en,
          data.summary_zh, data.summary_en,
          data.content_zh, data.content_en,
          JSON.stringify(data.tags || []), data.status || 'draft'
        ).run();

        return cors(env, json({ ok: true, id }));
      }

      // ===== READINGS =====

      // GET /readings - list published readings
      if (path === '/readings' && request.method === 'GET') {
        const book = url.searchParams.get('book');
        let query = 'SELECT id, book, book_en, chapter, title, title_en, author, author_en, scripture, publish_date FROM readings WHERE status = ? AND publish_date <= date(\'now\')';
        const params: string[] = ['published'];
        if (book) { query += ' AND book_en = ?'; params.push(book); }
        query += ' ORDER BY book_en, chapter';
        const stmt = env.DB.prepare(query);
        const rows = await (params.length === 1 ? stmt.bind(params[0]) : stmt.bind(params[0], params[1])).all();
        return cors(env, json({ readings: rows.results }));
      }

      // GET /readings/:book/:chapter - get single chapter
      if (path.match(/^\/readings\/[^/]+\/\d+$/) && request.method === 'GET') {
        const parts = path.split('/');
        const bookEn = parts[2];
        const chapter = parseInt(parts[3]);
        const row = await env.DB.prepare(
          'SELECT * FROM readings WHERE book_en = ? AND chapter = ? AND status = ? AND publish_date <= date(\'now\')'
        ).bind(bookEn, chapter, 'published').first();
        if (!row) return cors(env, json({ error: 'Not found' }, 404));
        return cors(env, json({ reading: row }));
      }

      // POST /readings - create/update reading (admin)
      if (path === '/readings' && request.method === 'POST') {
        if (!auth(request, env)) return cors(env, json({ error: 'Unauthorized' }, 401));
        const data = await request.json() as Record<string, unknown>;
        await env.DB.prepare(`
          INSERT INTO readings (book, book_en, chapter, title, title_en, author, author_en, scripture, content_zh, content_en, history_context_zh, history_context_en, structure_zh, structure_en, theology_zh, theology_en, christ_shadow_zh, christ_shadow_en, publish_date, status, updated_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
          ON CONFLICT(book_en, chapter) DO UPDATE SET
            title=excluded.title, title_en=excluded.title_en, content_zh=excluded.content_zh, content_en=excluded.content_en,
            history_context_zh=excluded.history_context_zh, history_context_en=excluded.history_context_en,
            structure_zh=excluded.structure_zh, structure_en=excluded.structure_en,
            theology_zh=excluded.theology_zh, theology_en=excluded.theology_en,
            christ_shadow_zh=excluded.christ_shadow_zh, christ_shadow_en=excluded.christ_shadow_en,
            publish_date=excluded.publish_date, status=excluded.status, updated_at=datetime('now')
        `).bind(
          data.book, data.book_en, data.chapter, data.title, data.title_en,
          data.author, data.author_en, data.scripture,
          data.content_zh, data.content_en,
          data.history_context_zh, data.history_context_en,
          data.structure_zh, data.structure_en,
          data.theology_zh, data.theology_en,
          data.christ_shadow_zh, data.christ_shadow_en,
          data.publish_date, data.status || 'draft'
        ).run();
        return cors(env, json({ ok: true }));
      }

      // ===== COMMENTS =====

      // GET /comments?article=xxx - get featured/approved comments
      if (path === '/comments' && request.method === 'GET') {
        const articleId = url.searchParams.get('article') || '';
        const rows = await env.DB.prepare(
          'SELECT name, city, content, created_at as date, status FROM comments WHERE article_id = ? AND status IN (?, ?) ORDER BY created_at DESC LIMIT 20'
        ).bind(articleId, 'approved', 'featured').all();
        return cors(env, json({ comments: rows.results }));
      }

      // POST /comments - submit comment
      if (path === '/comments' && request.method === 'POST') {
        const data = await request.json() as Record<string, unknown>;
        const { article_id, name, email, city, content, allow_show, anonymous } = data as Record<string, string | number>;
        if (!article_id || !name || !content) return cors(env, json({ error: 'Missing fields' }, 400));
        if (typeof content === 'string' && (content.length < 10 || content.length > 500)) {
          return cors(env, json({ error: 'Content must be 10-500 chars' }, 400));
        }

        const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
        const ipHash = await hashIP(ip);

        // Rate limit: 3 per hour per IP
        const recent = await env.DB.prepare(
          "SELECT COUNT(*) as cnt FROM comments WHERE ip_hash = ? AND created_at > datetime('now', '-1 hour')"
        ).bind(ipHash).first<{ cnt: number }>();
        if (recent && recent.cnt >= 3) {
          return cors(env, json({ error: 'Rate limit exceeded' }, 429));
        }

        const result = await env.DB.prepare(
          'INSERT INTO comments (article_id, name, email, city, content, allow_show, anonymous, ip_hash) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
        ).bind(article_id, name, email || null, city || null, content, allow_show ? 1 : 0, anonymous ? 1 : 0, ipHash).run();

        // Notify via Telegram
        const displayName = anonymous ? '匿名' : name;
        await notifyTelegram(env,
          `📬 <b>新留言</b> · rockoftruth\n━━━━━━━━━━━━━━━\n文章: ${article_id}\n署名: ${displayName}${city ? ', ' + city : ''}\n━━━━━━━━━━━━━━━\n"${(content as string).slice(0, 200)}"\n━━━━━━━━━━━━━━━`,
          [[
            { text: '✅ 通过', callback_data: `approve_${result.meta.last_row_id}` },
            { text: '⭐ 精选', callback_data: `feature_${result.meta.last_row_id}` },
            { text: '❌ 拒绝', callback_data: `reject_${result.meta.last_row_id}` },
          ]]
        );

        return cors(env, json({ ok: true }));
      }

      // POST /comments/review - approve/reject (admin or telegram callback)
      if (path === '/comments/review' && request.method === 'POST') {
        if (!auth(request, env)) return cors(env, json({ error: 'Unauthorized' }, 401));
        const data = await request.json() as Record<string, unknown>;
        const { comment_id, action } = data as { comment_id: number; action: string };
        if (!comment_id || !['approved', 'featured', 'rejected'].includes(action)) {
          return cors(env, json({ error: 'Invalid params' }, 400));
        }
        await env.DB.prepare(
          "UPDATE comments SET status = ?, reviewed_at = datetime('now') WHERE id = ?"
        ).bind(action, comment_id).run();
        return cors(env, json({ ok: true }));
      }

      // ===== LIKES =====

      // GET /likes/:articleId
      if (path.startsWith('/likes/') && request.method === 'GET') {
        const articleId = path.split('/likes/')[1];
        const row = await env.DB.prepare(
          'SELECT count FROM like_counts WHERE article_id = ?'
        ).bind(articleId).first<{ count: number }>();
        return cors(env, json({ count: row?.count || 0 }));
      }

      // POST /likes/:articleId
      if (path.startsWith('/likes/') && request.method === 'POST') {
        const articleId = path.split('/likes/')[1];
        const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
        const ipHash = await hashIP(ip);

        try {
          await env.DB.prepare(
            'INSERT INTO likes (article_id, ip_hash) VALUES (?, ?)'
          ).bind(articleId, ipHash).run();

          // Update count
          await env.DB.prepare(
            'INSERT INTO like_counts (article_id, count) VALUES (?, 1) ON CONFLICT(article_id) DO UPDATE SET count = count + 1'
          ).bind(articleId).run();

          const row = await env.DB.prepare(
            'SELECT count FROM like_counts WHERE article_id = ?'
          ).bind(articleId).first<{ count: number }>();
          return cors(env, json({ ok: true, count: row?.count || 1 }));
        } catch {
          // Duplicate like
          const row = await env.DB.prepare(
            'SELECT count FROM like_counts WHERE article_id = ?'
          ).bind(articleId).first<{ count: number }>();
          return cors(env, json({ ok: false, already_liked: true, count: row?.count || 0 }));
        }
      }

      // ===== TELEGRAM WEBHOOK =====
      if (path === '/telegram/webhook' && request.method === 'POST') {
        const update = await request.json() as Record<string, unknown>;
        const callback = (update as { callback_query?: { data: string; id: string; message?: { chat: { id: number }; message_id: number; text?: string } } }).callback_query;
        if (callback) {
          const [action, idStr] = callback.data.split('_');
          const commentId = parseInt(idStr);
          const statusMap: Record<string, string> = { approve: 'approved', feature: 'featured', reject: 'rejected' };
          const labelMap: Record<string, string> = { approve: '✅ 已通过', feature: '⭐ 已精选', reject: '❌ 已拒绝' };
          const status = statusMap[action];
          if (status && commentId) {
            await env.DB.prepare(
              "UPDATE comments SET status = ?, reviewed_at = datetime('now') WHERE id = ?"
            ).bind(status, commentId).run();

            const label = labelMap[action] || status;

            // Answer callback with toast
            await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/answerCallbackQuery`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ callback_query_id: callback.id, text: label }),
            });

            // Edit original message to show result + remove buttons
            if (callback.message) {
              const origText = callback.message.text || '';
              await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/editMessageText`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  chat_id: callback.message.chat.id,
                  message_id: callback.message.message_id,
                  text: origText + `\n\n${label}`,
                  parse_mode: 'HTML',
                  reply_markup: JSON.stringify({ inline_keyboard: [] }),
                }),
              });
            }

            // Send confirmation reply
            if (callback.message) {
              await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  chat_id: callback.message.chat.id,
                  text: `${label} · 留言 #${commentId}`,
                  reply_to_message_id: callback.message.message_id,
                }),
              });
            }
          }
        }
        return new Response('ok');
      }

      // ===== ADMIN: list all letters (including drafts) =====
      if (path === '/admin/letters' && request.method === 'GET') {
        if (!auth(request, env)) return cors(env, json({ error: 'Unauthorized' }, 401));
        const rows = await env.DB.prepare('SELECT * FROM letters ORDER BY date DESC').all();
        return cors(env, json({ letters: rows.results }));
      }

      // ===== ADMIN: delete letter =====
      if (path.startsWith('/admin/letters/') && request.method === 'DELETE') {
        if (!auth(request, env)) return cors(env, json({ error: 'Unauthorized' }, 401));
        const id = path.split('/admin/letters/')[1];
        await env.DB.prepare('DELETE FROM letters WHERE id = ?').bind(id).run();
        return cors(env, json({ ok: true }));
      }

      // ===== SUBSCRIBE =====

      // POST /subscribe
      if (path === '/subscribe' && request.method === 'POST') {
        const data = await request.json() as Record<string, unknown>;
        const email = (data.email as string || '').trim().toLowerCase();
        const name = (data.name as string || '').trim();
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          return cors(env, json({ error: 'Invalid email' }, 400));
        }
        const token = crypto.randomUUID();
        try {
          await env.DB.prepare(
            "INSERT INTO subscribers (email, name, unsubscribe_token, confirmed) VALUES (?, ?, ?, 1) ON CONFLICT(email) DO UPDATE SET name=excluded.name, status='active', unsubscribe_token=excluded.unsubscribe_token"
          ).bind(email, name || null, token).run();
        } catch (e) {
          return cors(env, json({ error: 'Subscribe failed' }, 500));
        }
        // Notify via Telegram
        await notifyTelegram(env, `📧 <b>新订阅</b>\n${name ? name + ' · ' : ''}${email}`);
        return cors(env, json({ ok: true }));
      }

      // GET /unsubscribe?token=xxx
      if (path === '/unsubscribe' && request.method === 'GET') {
        const token = url.searchParams.get('token');
        if (!token) return cors(env, json({ error: 'Token required' }, 400));
        const result = await env.DB.prepare(
          "UPDATE subscribers SET status = 'unsubscribed' WHERE unsubscribe_token = ? AND status = 'active'"
        ).bind(token).run();
        if (result.meta.changes === 0) {
          return new Response('<html><body style="font-family:sans-serif;text-align:center;padding:60px"><h2>Link invalid or already unsubscribed.</h2></body></html>', { headers: { 'Content-Type': 'text/html' } });
        }
        return new Response('<html><body style="font-family:sans-serif;text-align:center;padding:60px"><h2>✅ You have been unsubscribed.</h2><p>We\'re sorry to see you go.</p></body></html>', { headers: { 'Content-Type': 'text/html' } });
      }

      // GET /subscribers (admin)
      if (path === '/subscribers' && request.method === 'GET') {
        if (!auth(request, env)) return cors(env, json({ error: 'Unauthorized' }, 401));
        const status = url.searchParams.get('status') || 'active';
        const rows = await env.DB.prepare(
          'SELECT id, email, name, subscribed_at, status FROM subscribers WHERE status = ? ORDER BY subscribed_at DESC'
        ).bind(status).all();
        return cors(env, json({ subscribers: rows.results }));
      }

      return cors(env, json({ error: 'Not found' }, 404));

    } catch (err) {
      return cors(env, json({ error: String(err) }, 500));
    }
  },
};
