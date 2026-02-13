const { MsEdgeTTS, OUTPUT_FORMAT } = require('msedge-tts');

module.exports = async function handler(req, res) {
  // CORS
  const origin = req.headers.origin || '';
  const allowed = origin.includes('rockoftruth.sudoem.org') || origin.includes('localhost');
  res.setHeader('Access-Control-Allow-Origin', allowed ? origin : 'https://rockoftruth.sudoem.org');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.status(204).end(); return; }
  if (req.method !== 'POST') { res.status(405).json({ error: 'Method not allowed' }); return; }

  try {
    const { text, lang } = req.body;
    if (!text || typeof text !== 'string' || text.length > 2000) {
      res.status(400).json({ error: 'Invalid text' }); return;
    }

    const voice = lang === 'en' ? 'en-US-AriaNeural' : 'zh-CN-XiaoxiaoNeural';
    const tts = new MsEdgeTTS();
    await tts.setMetadata(voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);

    const { audioStream } = tts.toStream(text);
    const chunks = [];
    for await (const chunk of audioStream) {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    }

    const buf = Buffer.concat(chunks);
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.status(200).send(buf);
  } catch (e) {
    console.error('TTS error:', e);
    res.status(500).json({ error: 'TTS failed' });
  }
};
