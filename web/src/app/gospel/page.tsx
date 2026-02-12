import Link from 'next/link';

export const metadata = {
  title: '认识福音 - 真理磐石',
  description: '什么是福音？了解人的困境、神的救恩、信心的回应和新生命的盼望。',
};

const sections = [
  {
    step: 1,
    icon: '💔',
    title: '人的困境',
    subtitle: 'The Problem',
    content_zh:
      '圣经告诉我们，所有人都犯了罪，亏缺了神的荣耀。罪不只是做了坏事，更是我们与造我们的神之间关系的断裂。我们靠自己无法修复这个关系，也无法达到神圣洁的标准。',
    content_en:
      'The Bible tells us that all have sinned and fall short of the glory of God. Sin is not merely doing bad things — it is the broken relationship between us and the God who made us. We cannot repair this relationship on our own, nor can we meet God\'s standard of holiness.',
    verses: [
      {
        ref_zh: '罗马书 3:23',
        ref_en: 'Romans 3:23',
        text_zh: '因为世人都犯了罪，亏缺了神的荣耀。',
        text_en: 'For all have sinned and fall short of the glory of God.',
      },
      {
        ref_zh: '以赛亚书 59:2',
        ref_en: 'Isaiah 59:2',
        text_zh: '但你们的罪孽使你们与神隔绝，你们的罪恶使祂掩面不听你们。',
        text_en:
          'But your iniquities have made a separation between you and your God, and your sins have hidden his face from you so that he does not hear.',
      },
    ],
  },
  {
    step: 2,
    icon: '✝️',
    title: '神的救恩',
    subtitle: 'The Solution',
    content_zh:
      '神爱世人，差遣祂的独生子耶稣基督降世为人。耶稣过了完全无罪的一生，却在十字架上代替我们承受了罪的刑罚。祂死后第三天从死里复活，胜过了罪和死亡的权势。',
    content_en:
      'God so loved the world that He sent His only Son, Jesus Christ, to become man. Jesus lived a perfectly sinless life, yet bore the punishment for our sins on the cross. On the third day He rose from the dead, triumphing over sin and death.',
    verses: [
      {
        ref_zh: '约翰福音 3:16',
        ref_en: 'John 3:16',
        text_zh:
          '神爱世人，甚至将祂的独生子赐给他们，叫一切信祂的，不至灭亡，反得永生。',
        text_en:
          'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
      },
      {
        ref_zh: '罗马书 5:8',
        ref_en: 'Romans 5:8',
        text_zh:
          '惟有基督在我们还作罪人的时候为我们死，神的爱就在此向我们显明了。',
        text_en:
          'But God shows his love for us in that while we were still sinners, Christ died for us.',
      },
    ],
  },
  {
    step: 3,
    icon: '🙏',
    title: '信心的回应',
    subtitle: 'The Response',
    content_zh:
      '福音呼召我们悔改并信靠耶稣基督。悔改意味着承认自己的罪，转离旧的生活方向；信靠意味着单单依靠基督的救赎，而不是靠自己的努力或善行。这救恩完全是神的恩典，是白白赐给我们的礼物。',
    content_en:
      'The gospel calls us to repent and trust in Jesus Christ. Repentance means acknowledging our sin and turning from our old way of life; faith means relying on Christ\'s redemption alone, not on our own efforts or good works. This salvation is entirely by God\'s grace — a free gift.',
    verses: [
      {
        ref_zh: '以弗所书 2:8-9',
        ref_en: 'Ephesians 2:8–9',
        text_zh:
          '你们得救是本乎恩，也因着信；这并不是出于自己，乃是神所赐的；也不是出于行为，免得有人自夸。',
        text_en:
          'For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
      },
      {
        ref_zh: '使徒行传 3:19',
        ref_en: 'Acts 3:19',
        text_zh: '所以你们当悔改归正，使你们的罪得以涂抹。',
        text_en:
          'Repent therefore, and turn back, that your sins may be blotted out.',
      },
    ],
  },
  {
    step: 4,
    icon: '🌅',
    title: '新生命的盼望',
    subtitle: 'The Hope',
    content_zh:
      '信靠基督的人被神称为义人，与神和好，成为神家里的儿女。圣灵住在信徒里面，引导我们过新的生活。我们有永生的确据——不是因为我们有多好，而是因为基督已经为我们成就了一切。',
    content_en:
      'Those who trust in Christ are declared righteous by God, reconciled to Him, and adopted as children of His family. The Holy Spirit dwells in believers, guiding us into new life. We have the assurance of eternal life — not because of how good we are, but because Christ has accomplished everything for us.',
    verses: [
      {
        ref_zh: '哥林多后书 5:17',
        ref_en: '2 Corinthians 5:17',
        text_zh:
          '若有人在基督里，他就是新造的人，旧事已过，都变成新的了。',
        text_en:
          'Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.',
      },
      {
        ref_zh: '罗马书 8:1',
        ref_en: 'Romans 8:1',
        text_zh: '如今那些在基督耶稣里的，就不定罪了。',
        text_en:
          'There is therefore now no condemnation for those who are in Christ Jesus.',
      },
    ],
  },
];

export default function GospelPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-5xl mb-4 block">✝️</span>
        <h1 className="font-serif-cn text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-2">
          认识福音
        </h1>
        <p className="text-base text-[var(--color-text-secondary)] mb-4">
          Discover the Gospel
        </p>
        <p className="text-[var(--color-text)] leading-relaxed max-w-xl mx-auto mb-2">
          我从哪里来？活着有什么意义？死后会去哪里？
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-xl mx-auto italic mb-4">
          Where do I come from? What is the meaning of life? Where will I go after death?
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-xl mx-auto text-sm">
          福音是人类历史上最重要的好消息——神亲自为我们开辟了一条回到祂面前的道路。
        </p>
        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed max-w-xl mx-auto italic">
          The gospel is the greatest news in human history — God Himself has opened a way for us to come back to Him.
        </p>
      </div>

      {/* Ultimate Questions */}
      <div className="rounded-2xl border border-[var(--color-accent)]/30 bg-gradient-to-b from-[var(--color-bg-secondary)] to-[var(--color-bg)] p-6 md:p-8 mb-10">
        <h2 className="font-serif-cn text-xl font-bold text-[var(--color-text)] text-center mb-1">
          生命的终极追问
        </h2>
        <p className="text-xs text-[var(--color-text-secondary)] text-center mb-6 italic">
          The Ultimate Questions of Life
        </p>

        <div className="space-y-6">
          {/* 我从哪里来 */}
          <div>
            <h3 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-2">
              🌱 我从哪里来？<span className="text-sm font-normal text-[var(--color-text-secondary)] italic ml-2">Where do I come from?</span>
            </h3>
            <p className="text-[var(--color-text)] leading-relaxed text-sm mb-1">
              你不是偶然的产物。造天地的神按着自己的形像造了你，赋予你独特的价值和永恒的尊严。你的存在不是无意义的巧合，而是出于创造主的美意。
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-xs italic mb-3">
              You are not an accident. The God who made heaven and earth created you in His own image, giving you unique worth and eternal dignity. Your existence is not a meaningless coincidence, but flows from the Creator&apos;s good purpose.
            </p>
            <div className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] p-4">
              <p className="text-[var(--color-text)] text-sm mb-1">
                &ldquo;神就照着自己的形像造人，乃是照着祂的形像造男造女。&rdquo;
              </p>
              <p className="text-[var(--color-text-secondary)] text-xs italic mb-2">
                &ldquo;So God created man in his own image, in the image of God he created him; male and female he created them.&rdquo;
              </p>
              <p className="text-xs text-[var(--color-accent)] font-medium">— 创世记 1:27 / Genesis 1:27</p>
            </div>
          </div>

          {/* 活着有什么意义 */}
          <div>
            <h3 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-2">
              🔥 活着有什么意义？<span className="text-sm font-normal text-[var(--color-text-secondary)] italic ml-2">What is the meaning of life?</span>
            </h3>
            <p className="text-[var(--color-text)] leading-relaxed text-sm mb-1">
              人生的意义不在于成就、财富或享乐。人的首要目的是荣耀神，并以祂为永远的满足和喜乐。只有回到造你的那一位面前，你的心才能找到真正的安息。
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-xs italic mb-3">
              The meaning of life is not found in achievement, wealth, or pleasure. Man&apos;s chief end is to glorify God, and to enjoy Him forever. Only when you return to the One who made you will your heart find true rest.
            </p>
            <div className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] p-4">
              <p className="text-[var(--color-text)] text-sm mb-1">
                &ldquo;人的首要目的就是荣耀神，以神为乐，直到永远。&rdquo;
              </p>
              <p className="text-[var(--color-text-secondary)] text-xs italic mb-2">
                &ldquo;Man&apos;s chief end is to glorify God, and to enjoy him forever.&rdquo;
              </p>
              <p className="text-xs text-[var(--color-accent)] font-medium">— 韦敏斯德小要理问答第一问 / WSC Q.1</p>
            </div>
          </div>

          {/* 死后会去哪里 */}
          <div>
            <h3 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-2">
              ⚖️ 死后会去哪里？<span className="text-sm font-normal text-[var(--color-text-secondary)] italic ml-2">Where will I go after death?</span>
            </h3>
            <p className="text-[var(--color-text)] leading-relaxed text-sm mb-1">
              死亡不是终点。圣经明确告诉我们，每个人都要面对造物主的审判。这不是一个可以回避的问题——但好消息是，神已经为我们预备了出路。
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-xs italic mb-3">
              Death is not the end. The Bible clearly tells us that everyone will face judgment before the Creator. This is not a question we can avoid — but the good news is that God has prepared a way for us.
            </p>
            <div className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] p-4">
              <p className="text-[var(--color-text)] text-sm mb-1">
                &ldquo;按着定命，人人都有一死，死后且有审判。&rdquo;
              </p>
              <p className="text-[var(--color-text-secondary)] text-xs italic mb-2">
                &ldquo;And just as it is appointed for man to die once, and after that comes judgment.&rdquo;
              </p>
              <p className="text-xs text-[var(--color-accent)] font-medium">— 希伯来书 9:27 / Hebrews 9:27</p>
            </div>
          </div>
        </div>

        {/* Transition */}
        <div className="mt-6 pt-5 border-t border-[var(--color-border)] text-center">
          <p className="text-[var(--color-text)] text-sm leading-relaxed">
            这些问题的答案，都指向同一个方向——<strong>福音</strong>。
          </p>
          <p className="text-[var(--color-text-secondary)] text-xs italic">
            The answers to all these questions point in one direction — the <strong>Gospel</strong>.
          </p>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-8">
        {sections.map((section) => (
          <div
            key={section.step}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 md:p-8"
          >
            {/* Step header */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl">{section.icon}</span>
              <div>
                <h2 className="font-serif-cn text-xl font-bold text-[var(--color-text)]">
                  {section.title}
                </h2>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  {section.subtitle}
                </p>
              </div>
            </div>

            {/* Content */}
            <p className="text-[var(--color-text)] leading-relaxed mb-2">
              {section.content_zh}
            </p>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6 italic">
              {section.content_en}
            </p>

            {/* Verses */}
            <div className="space-y-3">
              {section.verses.map((verse) => (
                <div
                  key={verse.ref_en}
                  className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] p-4"
                >
                  <p className="text-[var(--color-text)] leading-relaxed text-sm mb-1">
                    &ldquo;{verse.text_zh}&rdquo;
                  </p>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed text-xs italic mb-2">
                    &ldquo;{verse.text_en}&rdquo;
                  </p>
                  <p className="text-xs text-[var(--color-accent)] font-medium">
                    — {verse.ref_zh} / {verse.ref_en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center rounded-2xl border-2 border-[var(--color-accent)] bg-[var(--color-bg-secondary)] p-8">
        <h3 className="font-serif-cn text-xl font-bold text-[var(--color-text)] mb-1">
          想了解更多？
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] mb-4 italic">
          Want to learn more?
        </p>
        <p className="text-sm text-[var(--color-text)] mb-2 max-w-md mx-auto">
          我们整理了126个关于信仰的常见问题，涵盖罪与救恩、神的存在、基督的独一性等核心主题。
        </p>
        <p className="text-xs text-[var(--color-text-secondary)] mb-6 max-w-md mx-auto italic">
          We have compiled 126 frequently asked questions about the faith, covering sin and salvation, the existence of God, the uniqueness of Christ, and more.
        </p>
        <Link
          href="/qa"
          className="inline-block rounded-lg bg-[var(--color-accent)] text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          进入福音问答 Enter Gospel Q&A →
        </Link>
      </div>
    </div>
  );
}
