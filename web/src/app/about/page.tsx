'use client';

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <span className="text-4xl">⛪</span>
        <h1 className="font-serif-cn text-2xl md:text-3xl font-bold text-[var(--color-text)] mt-3">关于真理磐石</h1>
        <p className="text-sm text-[var(--color-text-secondary)] mt-1">About Rock of Truth</p>
      </div>

      <div className="space-y-8 text-[var(--color-text)] text-[15px] leading-relaxed">

        {/* 建站初衷 */}
        <section>
          <h2 className="font-serif-cn text-xl font-bold mb-3">📖 建站初衷</h2>
          <blockquote className="border-l-4 border-[var(--color-accent)] pl-4 italic text-[var(--color-text-secondary)] mb-4">
            &ldquo;你们必晓得真理，真理必叫你们得以自由。&rdquo;（约翰福音 8:32）
          </blockquote>
          <p>
            <strong>真理磐石致力于传扬福音与建造门徒。</strong>我们持守纯正的<strong>改革宗</strong>信仰——<strong>唯独圣经</strong>、<strong>唯独恩典</strong>、<strong>唯独信心</strong>、<strong>唯独基督</strong>、<strong>唯独神的荣耀</strong>。盼望借着这个平台，帮助弟兄姐妹和慕道朋友认识真理、扎根信仰、在恩典中成长。网站内容<strong>中英双语</strong>，也方便向英文朋友传福音。
          </p>
        </section>

        {/* 十大板块 */}
        <section>
          <h2 className="font-serif-cn text-xl font-bold mb-4">🗂️ 十二大板块一览</h2>
          <div className="space-y-5">

            <div>
              <h3 className="font-bold text-base">1. ✝️ 认识福音</h3>
              <p className="mt-1">专为<strong>慕道朋友</strong>设计的福音入门页面。从&ldquo;我从哪里来？活着有什么意义？死后会去哪里？&rdquo;三个<strong>生命终极追问</strong>出发，带领读者认识人的困境、基督的救恩、信心的回应和永恒的盼望。分享给还不认识主的朋友，是很好的起点。</p>
            </div>

            <div>
              <h3 className="font-bold text-base">2. 🏠 家庭祭坛</h3>
              <p className="mt-1">每日更新的<strong>家庭敬拜指引</strong>，包含经文诵读、默想反思、家庭讨论和祷告四个环节，全家人围绕同一段经文一起亲近神。内容涵盖<strong>27个主题</strong>（如神的主权、基督的救赎、创世记、登山宝训等），<strong>404天</strong>的灵修内容循环使用，包括受难周和复活节的特别主题。设有<strong>少儿版</strong>（3-10岁）、<strong>青少年版</strong>（11岁以上）和<strong>全家版</strong>三种模式，可以根据孩子年龄切换。支持前后日期切换，方便补读。</p>
            </div>

            <div>
              <h3 className="font-bold text-base">3. 📖 圣徒伴读</h3>
              <p className="mt-1">圣经作者以<strong>第一人称</strong>带你逐章读经——摩西讲创世记、大卫讲诗篇、保罗讲罗马书……通过作者的视角，了解<strong>历史背景</strong>、<strong>经文结构</strong>、<strong>神学意涵</strong>和<strong>救恩脉络</strong>，让圣经活起来。每周更新，<strong>持续连载</strong>，覆盖全部66卷1189章。</p>
            </div>

            <div>
              <h3 className="font-bold text-base">4. 📜 圣徒来信</h3>
              <p className="mt-1">圣经人物写给你的<strong>亲笔信</strong>——他们最真实的挣扎、信心与得胜。涵盖<strong>心路历程</strong>、<strong>经文解读</strong>、<strong>神学专题</strong>、<strong>圣徒团契</strong>和<strong>致读者书</strong>五个栏目，每周更新。支持<strong>点赞</strong>、<strong>留言</strong>和<strong>分享</strong>。</p>
            </div>

            <div>
              <h3 className="font-bold text-base">5. 💬 福音问答</h3>
              <p className="mt-1"><strong>126个</strong>关于基督教信仰的核心问题，中英双语详细解答。涵盖神的存在、圣经的权威、救恩之道、基督徒生活等方方面面，既适合慕道朋友了解信仰，也适合弟兄姐妹温故知新。</p>
            </div>

            <div>
              <h3 className="font-bold text-base">6. 📖 要理问答</h3>
              <p className="mt-1">收录<strong>韦敏斯德小要理问答</strong>（107题）和<strong>大要理问答</strong>（196题），使用标准译本，配有相关经文。首页每日展示一题，<strong>303天</strong>完整循环，帮助大家系统学习改革宗信仰精华。</p>
            </div>

            <div>
              <h3 className="font-bold text-base">7. 📜 旧约导读</h3>
              <p className="mt-1"><strong>39卷</strong>旧约书卷的导读，按摩西五经、历史书、诗歌智慧书、大先知书、小先知书分类。每卷书包含写作背景、核心主题、关键经文和实际应用，帮助大家更好地读懂旧约。</p>
            </div>

            <div>
              <h3 className="font-bold text-base">8. ✉️ 新约导读</h3>
              <p className="mt-1"><strong>27卷</strong>新约书卷的导读，按福音书与使徒行传、保罗书信、普通书信、启示录分类。同样包含背景介绍、主题概述和应用指引。</p>
            </div>

            <div>
              <h3 className="font-bold text-base">9. 🛡️ 护教学</h3>
              <p className="mt-1"><strong>75篇</strong>护教文章，回应来自无神论、科学主义、多元主义、相对主义等各类世界观的挑战。帮助弟兄姐妹&ldquo;常作准备，以温柔、敬畏的心回答各人&rdquo;（彼前 3:15）。</p>
            </div>

            <div>
              <h3 className="font-bold text-base">10. 🌱 青少年</h3>
              <p className="mt-1"><strong>108篇</strong>文章，分为<strong>8大板块</strong>，专为青少年设计。用贴近年轻人生活的语言谈信仰、身份、情感、学业、社交等话题，帮助下一代在真道上站立得稳。</p>
            </div>

            <div>
              <h3 className="font-bold text-base">11. 🎵 敬拜诗歌</h3>
              <p className="mt-1">精选<strong>416首</strong>中英文敬拜诗歌，涵盖赞美诗歌、敬拜诗歌、福音诗歌、经典圣诗等类别。内嵌<strong>YouTube播放器</strong>，支持顺序播放、随机播放、单曲循环等多种模式，也支持搜索和分类浏览。可以在灵修、家庭敬拜或个人安静时间中使用。</p>
            </div>

            <div>
              <h3 className="font-bold text-base">12. 📚 书库</h3>
              <p className="mt-1"><strong>326本</strong>改革宗经典著作，支持按<strong>作者</strong>（222位）、<strong>适合人群</strong>、<strong>分类</strong>浏览和搜索。其中<strong>21本</strong>可在线阅读全文，是深入学习的宝贵资源。</p>
            </div>

          </div>
        </section>

        {/* 特色功能 */}
        <section>
          <h2 className="font-serif-cn text-xl font-bold mb-4">✨ 特色功能</h2>
          <div className="space-y-3">
            <p>🔍 <strong>全站搜索</strong>：顶部搜索栏可跨所有板块快速搜索，输入关键词即可找到相关的问答、文章、诗歌和书籍</p>
            <p>🔊 <strong>语音朗读</strong>：全站内容支持中英文语音朗读（TTS），点击朗读按钮即可聆听，方便开车、做家务或视力不便时使用</p>
            <p>🌐 <strong>中英双语</strong>：所有内容均提供中英文对照，方便不同语言背景的弟兄姐妹使用，也便于向英文朋友传福音</p>
            <p>📅 <strong>每日更新</strong>：家庭祭坛每日自动更新内容，要理问答每日展示一题，每天打开都有新内容</p>
            <p>🌙 <strong>深色模式</strong>：支持明暗主题切换，夜间阅读更舒适</p>
          </div>
        </section>

        {/* 如何使用 */}
        <section>
          <h2 className="font-serif-cn text-xl font-bold mb-4">💻 如何使用</h2>
          <p className="mb-4">本网站在<strong>电脑上阅读体验最佳</strong>，宽屏布局、左侧导航栏让浏览更直观舒适。手机上阅读也很方便，底部导航栏可快速切换各板块，随时随地都能使用。</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>浏览器打开 <strong>rockoftruth.sudoem.org</strong></li>
            <li>手机用户可以<strong>添加到主屏幕</strong>，像App一样使用</li>
            <li>每天打开首页，即可看到当日的<strong>家庭祭坛</strong>入口和<strong>要理问答</strong></li>
            <li>用搜索栏快速查找任何感兴趣的内容</li>
            <li>敬拜诗歌支持<strong>后台播放</strong>，可以边听边浏览其他内容</li>
          </ol>
        </section>

        {/* 联系 */}
        <section className="text-center pt-6 border-t border-[var(--color-border)]">
          <p>欢迎大家使用并转发给身边的朋友！</p>
          <p className="mt-2">如有任何建议或反馈，请发邮件至 <a href="mailto:rockoftruth@sudoem.org" className="text-[var(--color-accent)] hover:underline font-bold">rockoftruth@sudoem.org</a></p>
          <p className="mt-4 text-[var(--color-text-secondary)] italic">愿神使用这个小小的平台，让更多人认识祂的真理，被祂的恩典所建立！</p>
          <p className="mt-3 text-sm text-[var(--color-text-secondary)]">&ldquo;因为那已经立好的根基就是耶稣基督，此外没有人能立别的根基。&rdquo;（哥林多前书 3:11）</p>
        </section>

      </div>
    </div>
  );
}
