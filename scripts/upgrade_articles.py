#!/usr/bin/env python3
import json
import copy

# 读取原文件
with open('/Users/suyan/clawd/projects/gospel-app/web/src/data/apologetics.json', 'r', encoding='utf-8') as f:
    articles = json.load(f)

# 需要升级的ID列表
upgrade_ids = ['ath-001', 'ath-002', 'ath-003', 'ath-004', 'ath-005', 'ath-006', 
               'ath-007', 'ath-008', 'ath-009', 'islam-001', 'islam-002', 'islam-003', 
               'islam-004', 'islam-005', 'islam-006', 'islam-007', 'buddhism-001']

# 升级的内容
upgrades = {
    'ath-001': {
        'core_argument_zh': """宇宙论证是基督教护教学中最强有力的论证之一，其逻辑结构简洁而深刻。当代形式的卡拉姆宇宙论证（Kalam Cosmological Argument）由威廉·莱恩·克雷格（William Lane Craig）系统阐述，其核心推理如下：（1）凡有开始存在的事物都有原因；（2）宇宙有一个开始；（3）因此，宇宙有一个原因。

第一个前提基于理性的直觉和经验观察——我们从未见过任何事物从绝对的虚无中产生。哲学家大卫·休谟虽然对因果关系持怀疑态度，但他也承认"从无中生无"是合理的原则。第二个前提得到了现代宇宙学的强烈支持：大爆炸理论表明我们的宇宙大约138亿年前从一个奇点开始膨胀。2003年的Borde-Guth-Vilenkin定理进一步证明，任何平均膨胀的宇宙都必须有一个过去的时空边界，即使在多元宇宙假说中这个定理依然成立。

哲学上，无限的过去事件回溯（actual infinite regress）在逻辑上是不可能的。数学家大卫·希尔伯特的"希尔伯特酒店"悖论说明了实际无限的荒谬性。如果过去的时间是实际无限的，我们永远无法走完无限的序列到达现在这一刻——但我们确实到达了现在。因此，宇宙必须有一个绝对的开始。

从前提的结论中，我们可以推导出这个原因的属性：它必须是（1）非物质的（因为它创造了所有物质）；（2）超时间的（因为它创造了时间本身）；（3）非常强大（因为它从无中创造了宇宙）；（4）有位格的（因为抽象对象不能成为因果关系中的原因，而且一个非时间的原因要产生时间性的结果，需要一个位格性的自由意志来选择创造）。这些特征恰好对应于基督教所描述的上帝。""",
        
        'core_argument_en': """The cosmological argument stands as one of the most powerful arguments in Christian apologetics, with a logical structure both simple and profound. The contemporary Kalam Cosmological Argument, systematically developed by William Lane Craig, proceeds with this core reasoning: (1) Whatever begins to exist has a cause; (2) The universe began to exist; (3) Therefore, the universe has a cause.

The first premise is based on rational intuition and empirical observation—we have never witnessed anything coming into existence from absolute nothingness. Philosopher David Hume, despite his skepticism about causation, acknowledged 'from nothing, nothing comes' as a reasonable principle. The second premise receives strong support from modern cosmology: Big Bang theory indicates our universe began expanding from a singularity approximately 13.8 billion years ago. The 2003 Borde-Guth-Vilenkin theorem further demonstrates that any universe which has, on average, been expanding must have a past spacetime boundary, even within multiverse scenarios.

Philosophically, an actual infinite regress of past events is logically impossible. Mathematician David Hilbert's 'Hilbert Hotel' paradox illustrates the absurdity of actual infinities. If past time were actually infinite, we could never traverse an infinite series to arrive at the present moment—yet we have indeed reached the present. Therefore, the universe must have an absolute beginning.

From the conclusion of the premises, we can deduce the attributes of this cause: it must be (1) immaterial (since it created all matter); (2) timeless (since it created time itself); (3) enormously powerful (since it created the universe ex nihilo); (4) personal (since abstract objects cannot be causes in causal relations, and a timeless cause producing a temporal effect requires a personal free will to choose creation). These attributes precisely correspond to the God described in Christianity.""",
        
        'common_objections': [
            {
                'objection_zh': "那上帝是谁造的？如果一切都需要原因，上帝也需要原因。",
                'objection_en': "Who made God? If everything needs a cause, God needs a cause too.",
                'response_zh': """这个反驳犯了范畴错误，误解了宇宙论证的逻辑结构。论证的第一个前提不是"一切事物都有原因"，而是"凡有开始存在的事物都有原因"。这个区别至关重要。上帝，按照古典有神论的定义，是永恒的、没有开始的存在。祂是必然存在者（necessary being），而非偶然存在者（contingent being）。

哲学家理查德·泰勒（Richard Taylor）指出，必然存在和偶然存在有根本区别。偶然存在的事物可能存在也可能不存在，因此需要外在的解释；但必然存在者在其本质中就包含了存在，不需要也不可能有外在的原因。正如我们不会问"已婚的单身汉的妻子是谁"或"四角的圆形有几条边"，问"永恒存在者的起因是什么"同样是自相矛盾的。

此外，如果我们坚持"一切都需要原因"，那么就会陷入无限回溯——上帝需要原因，上帝的原因需要原因，依此类推，永无止境。这种回溯在解释上毫无价值。正如安瑟伦的本体论证所示，一位最伟大的存在必须是必然存在的，否则我们可以设想一个更伟大的、必然存在的存在。宇宙论证指向的正是这样一位必然的、自我存在的第一因——上帝。""",
                'response_en': """This objection commits a category error by misunderstanding the logical structure of the cosmological argument. The first premise is not 'everything has a cause' but 'whatever begins to exist has a cause.' This distinction is crucial. God, by definition in classical theism, is eternal and without beginning. He is a necessary being, not a contingent being.

Philosopher Richard Taylor notes the fundamental difference between necessary and contingent existence. Contingent beings may or may not exist and therefore require external explanation; but a necessary being contains existence in its very essence, needing and admitting no external cause. Just as we don't ask 'Who is the married bachelor's wife?' or 'How many sides does a four-sided circle have?', asking 'What caused the eternal being?' is equally self-contradictory.

Furthermore, if we insisted 'everything needs a cause,' we would fall into infinite regress—God needs a cause, God's cause needs a cause, and so on indefinitely. Such regress provides no explanatory value. As Anselm's ontological argument demonstrates, a greatest conceivable being must be necessarily existent, otherwise we could conceive of a greater, necessarily existing being. The cosmological argument points precisely to such a necessary, self-existent First Cause—God."""
            },
            {
                'objection_zh': "量子力学表明事物可以无因而生，虚粒子从量子真空中产生。",
                'objection_en': "Quantum mechanics shows things can come into existence without a cause; virtual particles arise from quantum vacuum.",
                'response_zh': """这个反驳基于对量子力学的误解。量子真空（quantum vacuum）并非"无"（nothing），而是一种具有丰富结构的物理实在。它包含量子场、能量涨落、复杂的数学结构和物理定律。物理学家维克多·斯滕格尔（Victor Stenger）虽然是无神论者，但也承认量子真空"不是虚无"。

哲学家威廉·莱恩·克雷格和物理学家保罗·戴维斯都指出，虚粒子（virtual particles）的产生仍然遵循量子力学的因果律——海森堡不确定性原理、薛定谔方程等。这些涨落发生在已经存在的量子场框架内，有特定的物理条件和约束。这不是"从无中生有"，而是"从某物中生某物"。

真正的"无"（philosophical nothing）是没有任何属性的——没有空间，没有时间，没有物质，没有能量，没有量子场，没有物理定律，甚至没有产生任何东西的潜力。从这样的绝对虚无中，什么都不可能产生，这仍然符合"从无中生无"的原则。宇宙的起源问题关乎为什么存在"某物"而不是"绝对的无"——这个问题量子力学无法回答，只有一位超越性的创造者才能解释为什么有一个能够产生量子涨落的宇宙。""",
                'response_en': """This objection rests on a misunderstanding of quantum mechanics. The quantum vacuum is not 'nothing' but a richly structured physical reality. It contains quantum fields, energy fluctuations, complex mathematical structures, and physical laws. Physicist Victor Stenger, though an atheist, acknowledges the quantum vacuum is 'not nothing.'

Philosopher William Lane Craig and physicist Paul Davies both note that virtual particle production still follows quantum mechanical causation—Heisenberg uncertainty principle, Schrödinger equations, etc. These fluctuations occur within an already existing framework of quantum fields, with specific physical conditions and constraints. This is not 'something from nothing' but 'something from something.'

True philosophical 'nothing' has no properties whatsoever—no space, no time, no matter, no energy, no quantum fields, no physical laws, not even the potential to produce anything. From such absolute nothingness, nothing can arise, consistent with the principle 'from nothing, nothing comes.' The universe's origin concerns why there is 'something' rather than 'absolute nothing'—a question quantum mechanics cannot answer. Only a transcendent Creator can explain why there exists a universe capable of quantum fluctuations at all."""
            },
            {
                'objection_zh': "也许宇宙是永恒的，在大爆炸之前还有其他阶段，或者存在循环宇宙模型。",
                'objection_en': "Perhaps the universe is eternal, with other phases before the Big Bang, or there are cyclical universe models.",
                'response_zh': """虽然一些物理学家提出了永恒宇宙或循环宇宙的模型，但这些模型都面临严重的物理学和哲学问题。首先，热力学第二定律（熵增定律）表明宇宙的可用能量在不断减少，系统趋向最大熵状态。如果宇宙是永恒的，它早就应该达到热寂状态（heat death）——所有能量均匀分布，不再能做功。但我们观察到宇宙仍在有序运行，星系在形成，这表明宇宙不是永恒的。

关于循环宇宙模型（如印度教和佛教的宇宙观，或现代的循环大爆炸-大坍缩模型），物理学家证明了它们的不可行性。罗杰·彭罗斯（Roger Penrose）的计算表明，每次循环都会增加熵，使得无限的循环在物理上不可能。此外，即使是弦理论中的循环模型（如斯坦哈特-图罗克模型），也受到Borde-Guth-Vilenkin定理的约束——它们仍然需要一个绝对的过去边界。

宇宙学家亚历山大·维连金（Alexander Vilenkin）明确表示："所有表明宇宙有无限过去的证据都已被推翻。"2012年，阿尔维德·博德（Arvind Borde）和维连金发表的研究进一步确认，即使在最一般的扩展宇宙模型中，过去的时空边界仍然是不可避免的。因此，无论我们采用哪种物理模型，宇宙都必须有一个绝对的开始，需要一个超越时空的第一因。""",
                'response_en': """Though some physicists propose eternal or cyclical universe models, these models face serious physical and philosophical problems. First, the Second Law of Thermodynamics shows the universe's usable energy is constantly decreasing, with systems trending toward maximum entropy. If the universe were eternal, it would have reached heat death long ago—all energy evenly distributed, no longer capable of doing work. Yet we observe the universe still functioning orderly with galaxies forming, indicating the universe is not eternal.

Regarding cyclical universe models (such as Hindu/Buddhist cosmologies or modern Big Bang-Big Crunch cycles), physicists have demonstrated their infeasibility. Roger Penrose's calculations show each cycle would increase entropy, making infinite cycles physically impossible. Furthermore, even string theory's cyclical models (like Steinhardt-Turok) remain subject to the Borde-Guth-Vilenkin theorem—they still require an absolute past boundary.

Cosmologist Alexander Vilenkin states clearly: 'All evidence we have says that the universe had a beginning.' In 2012, research by Arvind Borde and Vilenkin further confirmed that even in the most general expanding universe models, a past spacetime boundary remains unavoidable. Therefore, regardless of which physical model we adopt, the universe must have an absolute beginning, requiring a transcendent First Cause beyond spacetime."""
            }
        ],
        'bible_verses': [
            "创世记 1:1 / Genesis 1:1",
            "罗马书 1:20 / Romans 1:20", 
            "希伯来书 11:3 / Hebrews 11:3",
            "诗篇 19:1 / Psalm 19:1",
            "约翰福音 1:3 / John 1:3"
        ],
        'recommended_resources': [
            "William Lane Craig, 'Reasonable Faith'",
            "William Lane Craig, 'The Kalam Cosmological Argument'",
            "R.C. Sproul, 'Defending Your Faith'",
            "Stephen Meyer, 'Return of the God Hypothesis'",
            "Edward Feser, 'Five Proofs of the Existence of God'"
        ]
    }
    # 继续添加其他文章的升级内容...
}

# 执行升级
upgraded_articles = copy.deepcopy(articles)

for article in upgraded_articles:
    if article['id'] in upgrade_ids and article['id'] in upgrades:
        upgrade_data = upgrades[article['id']]
        for key, value in upgrade_data.items():
            article[key] = value

# 保存升级后的文件
with open('/Users/suyan/clawd/projects/gospel-app/web/src/data/apologetics_upgraded.json', 'w', encoding='utf-8') as f:
    json.dump(upgraded_articles, f, ensure_ascii=False, indent=2)

print(f"已升级 {len([id for id in upgrade_ids if id in upgrades])} 篇文章")