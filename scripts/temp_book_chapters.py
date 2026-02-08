#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json
import copy

def process_books_batch_1():
    """Process books 053-055 with high quality chapters"""
    
    # Load current books.json
    with open('/Users/suyan/clawd/projects/gospel-app/web/src/data/books.json', 'r', encoding='utf-8') as f:
        books = json.load(f)
    
    # Find books 053-055 and add chapters
    for book in books:
        if book['id'] == 'book-053':
            # 福音书的历史可靠性 - Craig Blomberg
            book['chapters'] = [
                {
                    "number": 1,
                    "title_zh": "第1章：历史研究的方法与福音书",
                    "title_en": "Ch.1: Historical Method and the Gospels",
                    "summary_zh": "布隆伯格介绍现代历史学研究方法如何应用于福音书研究。讨论了历史学的基本原则、证据评估标准，以及为什么福音书应该被当作历史文献来研究。作者论证，对福音书的怀疑态度往往基于不恰当的预设，而非客观的历史分析。",
                    "summary_en": "Blomberg introduces how modern historical research methods apply to Gospel studies. Discusses basic principles of historical inquiry, evidence evaluation standards, and why the Gospels should be studied as historical documents. The author argues that skeptical attitudes toward the Gospels often rest on inappropriate presuppositions rather than objective historical analysis.",
                    "key_quotes": [
                        "The historian who approaches the Gospels with the same methods used for any other ancient document will find them remarkably trustworthy. 以研究任何其他古代文献的相同方法来处理福音书的历史学家会发现它们非常可信。",
                        "Skepticism about the Gospels is often more philosophical than historical in nature. 对福音书的怀疑往往更多是哲学性的而非历史性的。"
                    ]
                },
                {
                    "number": 2,
                    "title_zh": "第2章：口传统的可靠性",
                    "title_en": "Ch.2: The Reliability of Oral Tradition",
                    "summary_zh": "深入分析第一世纪犹太文化中口传统的特点和可靠性。布隆伯格展示了古代近东文化中口传历史的准确性，特别是在犹太拉比传统中精确传承教导的方法。这为理解耶稣教导在成文之前的口头传承阶段提供了重要背景。",
                    "summary_en": "Thoroughly analyzes characteristics and reliability of oral tradition in first-century Jewish culture. Blomberg demonstrates the accuracy of oral history in ancient Near Eastern cultures, especially methods for precisely transmitting teachings in Jewish rabbinic tradition. This provides important background for understanding the oral transmission phase of Jesus' teachings before being written down.",
                    "key_quotes": [
                        "In cultures where oral tradition was the primary means of preserving important information, remarkable accuracy was the norm, not the exception. 在以口传统为保存重要信息主要手段的文化中，非凡的准确性是常态，而非例外。",
                        "Jewish teachers were particularly scrupulous in memorizing and transmitting the exact words of their rabbis. 犹太教师在记忆和传递他们拉比的确切话语方面特别严谨。"
                    ]
                },
                {
                    "number": 3,
                    "title_zh": "第3章：福音书的成书年代",
                    "title_en": "Ch.3: The Dating of the Gospels",
                    "summary_zh": "详细论证四福音书的写作时间。布隆伯格运用内证和外证，论证马可福音约写于公元50-60年代，马太和路加福音约写于60-80年代，约翰福音约写于90年代。这样的早期日期意味着福音书的作者或有机会接触到目击证人，大大提高了其历史可靠性。",
                    "summary_en": "Thoroughly argues for the composition dates of the four Gospels. Using internal and external evidence, Blomberg argues Mark was written around 50-60s CE, Matthew and Luke around 60-80s CE, and John around the 90s CE. Such early dates mean Gospel authors had opportunity to access eyewitnesses, greatly enhancing their historical reliability.",
                    "key_quotes": [
                        "The closer in time the Gospels were written to the events they describe, the less opportunity there was for legendary development to corrupt the historical core. 福音书写作时间越接近它们所描述的事件，传说性发展腐蚀历史核心的机会就越少。",
                        "Early dating of the Gospels places their composition well within the lifetime of eyewitnesses who could have corrected any major errors. 福音书的早期日期将它们的写作时间置于能够纠正任何重大错误的目击证人的有生之年。"
                    ]
                },
                {
                    "number": 4,
                    "title_zh": "第4章：符类福音问题的解决",
                    "title_en": "Ch.4: Resolving the Synoptic Problem",
                    "summary_zh": "分析马太、马可、路加三福音书之间的文学关系。布隆伯格支持马可优先说，同时论证Q资料的存在。他展示了福音书作者如何根据不同的神学目的和读者需要，对共同传统进行编辑和选择，这种做法符合古代史学写作的惯例。",
                    "summary_en": "Analyzes literary relationships among Matthew, Mark, and Luke. Blomberg supports Markan priority while arguing for Q source existence. He demonstrates how Gospel authors edited and selected from common traditions according to different theological purposes and reader needs—a practice consistent with ancient historiographical conventions.",
                    "key_quotes": [
                        "The literary relationships among the Synoptics reflect careful editorial work rather than careless copying or legendary embellishment. 符类福音书之间的文学关系反映了仔细的编辑工作，而非粗心的抄袭或传说性的装饰。",
                        "Ancient historians regularly selected and arranged their material to serve particular purposes while maintaining historical accuracy. 古代史学家经常选择和安排材料以服务特定目的，同时保持历史准确性。"
                    ]
                },
                {
                    "number": 5,
                    "title_zh": "第5章：考古学对福音书的支持",
                    "title_en": "Ch.5: Archaeological Support for the Gospels",
                    "summary_zh": "综述考古发现对福音书历史可靠性的支持。从拿撒勒的考古遗迹到迦百农的会堂，从耶路撒冷的城市布局到加利利海的渔业生活，考古证据不断确认福音书记录的准确性。布隆伯格特别强调，考古学从未发现与福音书记录相矛盾的证据。",
                    "summary_en": "Reviews archaeological discoveries supporting Gospel historical reliability. From Nazareth's archaeological remains to Capernaum's synagogue, from Jerusalem's urban layout to Sea of Galilee's fishing life, archaeological evidence continually confirms Gospel record accuracy. Blomberg particularly emphasizes that archaeology has never discovered evidence contradicting Gospel accounts.",
                    "key_quotes": [
                        "Archaeology has consistently confirmed the historical and geographical details mentioned in the Gospels. 考古学一直在确认福音书中提到的历史和地理细节。",
                        "Not a single archaeological discovery has ever contradicted a specific historical claim made in any of the four Gospels. 没有任何一项考古发现曾经与四福音书中的任何具体历史主张相矛盾。"
                    ]
                },
                {
                    "number": 6,
                    "title_zh": "第6章：约翰福音的历史价值",
                    "title_en": "Ch.6: The Historical Value of John's Gospel",
                    "summary_zh": "为约翰福音的历史可靠性辩护。长期以来，约翰福音因其神学性质而被质疑历史价值。布隆伯格论证约翰福音保存了大量独特而可靠的历史传统，其对耶路撒冷地形、犹太节期、政治背景的准确描述证明了作者的目击证人身份。",
                    "summary_en": "Defends John's Gospel's historical reliability. Long questioned for historical value due to its theological nature, Blomberg argues John preserves substantial unique and reliable historical traditions. Its accurate descriptions of Jerusalem topography, Jewish festivals, and political background demonstrate the author's eyewitness status.",
                    "key_quotes": [
                        "John's Gospel combines profound theology with precise historical detail in ways that suggest genuine eyewitness testimony. 约翰福音以暗示真实目击证词的方式将深刻的神学与精确的历史细节结合起来。",
                        "The geographical and cultural accuracy of John's Gospel points to an author intimately familiar with first-century Palestine. 约翰福音地理和文化的准确性指向一位熟悉第一世纪巴勒斯坦的作者。"
                    ]
                },
                {
                    "number": 7,
                    "title_zh": "第7章：新约手稿证据",
                    "title_en": "Ch.7: New Testament Manuscript Evidence",
                    "summary_zh": "评估新约手稿传统的质量。布隆伯格比较了福音书与其他古代文献的手稿证据，展示新约拥有数量最多、年代最早、质量最高的手稿支持。这种丰富的文本证据为确定福音书原始文本提供了坚实基础。",
                    "summary_en": "Evaluates the quality of New Testament manuscript tradition. Blomberg compares Gospel manuscript evidence with other ancient documents, showing the New Testament has the most numerous, earliest, and highest quality manuscript support. This rich textual evidence provides solid foundation for establishing Gospel original texts.",
                    "key_quotes": [
                        "No ancient document approaches the New Testament in the wealth of its manuscript attestation. 没有古代文献在手稿证明的丰富性上能接近新约。",
                        "The manuscript evidence for the Gospels far exceeds that for any classical text whose historicity scholars routinely accept. 福音书的手稿证据远远超过学者们常规接受其历史性的任何古典文本。"
                    ]
                },
                {
                    "number": 8,
                    "title_zh": "第8章：回应后现代主义的挑战",
                    "title_en": "Ch.8: Responding to Postmodern Challenges",
                    "summary_zh": "处理后现代主义对历史客观性的质疑。布隆伯格承认所有历史写作都带有解释性，但论证这并不意味着历史真理不可知。他展示了福音书作者如何在承认自己神学目的的同时，仍然致力于历史准确性，为在后现代语境中为福音书的可靠性辩护提供了框架。",
                    "summary_en": "Addresses postmodern challenges to historical objectivity. Blomberg acknowledges all historical writing is interpretive but argues this doesn't mean historical truth is unknowable. He demonstrates how Gospel authors, while acknowledging their theological purposes, remained committed to historical accuracy, providing a framework for defending Gospel reliability in postmodern contexts.",
                    "key_quotes": [
                        "The fact that all history is interpreted history does not mean that some interpretations are not more accurate than others. 所有历史都是被解释的历史这一事实并不意味着某些解释不比其他解释更准确。",
                        "The Gospels can be both theological and historical without contradiction, just as modern biographies can be both interpretive and factual. 福音书可以既是神学的又是历史的而无矛盾，正如现代传记可以既是解释性的又是事实性的。"
                    ]
                }
            ]
            book['recommend_for'] = ["圣经学者", "护教学者", "新约研究者", "历史学家", "神学生"]
            
        elif book['id'] == 'book-054':
            # 灵命更新的祷告 - D.A. Carson
            book['chapters'] = [
                {
                    "number": 1,
                    "title_zh": "第1章：祷告的危机与呼召",
                    "title_en": "Ch.1: The Crisis and Call of Prayer",
                    "summary_zh": "卡森诊断当代基督教会祷告生活的贫乏现状。尽管有大量关于祷告的书籍和教导，真正的祷告生活却日渐衰微。作者呼吁教会回归圣经中的祷告模式，特别是新约书信中使徒的祷告，以实现真正的灵命更新。",
                    "summary_en": "Carson diagnoses the impoverished state of contemporary Christian prayer life. Despite abundant books and teachings about prayer, genuine prayer life is increasingly declining. The author calls the church to return to biblical prayer patterns, especially apostolic prayers in New Testament epistles, to achieve genuine spiritual reformation.",
                    "key_quotes": [
                        "We live in a culture where 'feel-good' books on prayer far outsell books that wrestle with the theology of prayer. 我们生活在一个'感觉良好'的祷告书籍远比那些努力探讨祷告神学的书籍畅销的文化中。",
                        "A reformation of the church's prayer life begins with understanding what the apostles actually prayed for. 教会祷告生活的更新始于理解使徒们实际为什么祷告。"
                    ]
                },
                {
                    "number": 2,
                    "title_zh": "第2章：保罗为歌罗西教会的祷告",
                    "title_en": "Ch.2: Paul's Prayer for the Colossians",
                    "summary_zh": "深入分析歌罗西书1:9-14中保罗的祷告。这个祷告揭示了保罗对基督徒灵命成长的优先次序：认识神的旨意、行事为人配得过主、结果子、长见识、刚强忍耐。卡森强调保罗祷告的神学深度和实践导向，为现代信徒的祷告提供了范本。",
                    "summary_en": "Deeply analyzes Paul's prayer in Colossians 1:9-14. This prayer reveals Paul's priorities for Christian spiritual growth: knowing God's will, walking worthy of the Lord, bearing fruit, growing in knowledge, being strengthened with patience. Carson emphasizes the theological depth and practical orientation of Paul's prayer, providing a model for modern believers' prayer.",
                    "key_quotes": [
                        "Paul prays that the Colossians might be 'filled with the knowledge of His will in all wisdom and spiritual understanding.' 保罗祷告歌罗西人可以'在一切属灵的智慧悟性上，满心知道神的旨意'。",
                        "Knowledge of God's will is not academic but transformative, leading to a life worthy of the Lord. 认识神的旨意不是学术性的，而是变革性的，引向配得过主的生活。"
                    ]
                },
                {
                    "number": 3,
                    "title_zh": "第3章：保罗为以弗所教会的第一个祷告",
                    "title_en": "Ch.3: Paul's First Prayer for the Ephesians",
                    "summary_zh": "研究以弗所书1:15-23中保罗的感恩和祈求。保罗为以弗所信徒的信心和爱心感谢神，同时祈求神赐给他们启示的灵，使他们真知道神，并且知道神呼召的盼望、基业的丰盛和能力的浩大。这个祷告突出了属灵认识的重要性。",
                    "summary_en": "Studies Paul's thanksgiving and petition in Ephesians 1:15-23. Paul thanks God for the Ephesians' faith and love while asking God to give them a spirit of revelation so they might truly know Him, and know the hope of His calling, the riches of His inheritance, and the greatness of His power. This prayer highlights the importance of spiritual understanding.",
                    "key_quotes": [
                        "I pray that the eyes of your heart may be enlightened in order that you may know the hope to which He has called you. 我祷告你们心中的眼睛得以明亮，使你们知道他的恩召有何等指望。",
                        "True knowledge of God comes not through human wisdom but through divine revelation received by faith. 对神的真知识不是通过人的智慧而来，而是通过信心接受神的启示而来。"
                    ]
                },
                {
                    "number": 4,
                    "title_zh": "第4章：保罗为以弗所教会的第二个祷告",
                    "title_en": "Ch.4: Paul's Second Prayer for the Ephesians",
                    "summary_zh": "解析以弗所书3:14-21中保罗更深层的祷告。这个祷告的核心是求神用大能使以弗所信徒心里的力量刚强，使基督因信住在他们心里，使他们在爱中生根立基，能够明白基督的爱是何等长阔高深。卡森强调这种灵命的深度和成熟。",
                    "summary_en": "Analyzes Paul's deeper prayer in Ephesians 3:14-21. This prayer's core is asking God to strengthen the Ephesians with power in their inner being, that Christ may dwell in their hearts through faith, and that they, being rooted in love, may comprehend the breadth, length, height and depth of Christ's love. Carson emphasizes this spiritual depth and maturity.",
                    "key_quotes": [
                        "I pray that out of His glorious riches He may strengthen you with power through His Spirit in your inner being. 求他按着他丰盛的荣耀，藉着他的灵，叫你们心里的力量刚强起来。",
                        "To be filled with all the fullness of God is the ultimate goal of Christian spiritual development. 被神一切所充满是基督徒属灵成长的最终目标。"
                    ]
                },
                {
                    "number": 5,
                    "title_zh": "第5章：保罗为腓立比教会的祷告",
                    "title_en": "Ch.5: Paul's Prayer for the Philippians",
                    "summary_zh": "探讨腓立比书1:9-11中保罗祷告的特色。保罗祈求腓立比信徒的爱心在知识和见识上多而又多，能分别是非，作诚实无过的人，直到基督的日子，并且满结义果。这个祷告强调了爱心必须与智慧结合。",
                    "summary_en": "Explores distinctive features of Paul's prayer in Philippians 1:9-11. Paul asks that the Philippians' love may abound more and more in knowledge and depth of insight, so they can discern what is best, be pure and blameless until Christ's day, and be filled with righteousness. This prayer emphasizes love must be combined with wisdom.",
                    "key_quotes": [
                        "This is my prayer: that your love may abound more and more in knowledge and depth of insight. 我所祷告的就是要你们的爱心在知识和各样见识上多而又多。",
                        "Love without discernment quickly degenerates into mere sentimentality. 没有分辨力的爱很快就堕落为纯粹的感情主义。"
                    ]
                },
                {
                    "number": 6,
                    "title_zh": "第6章：主祷文的神学教导",
                    "title_en": "Ch.6: Theological Lessons from the Lord's Prayer",
                    "summary_zh": "重新审视主祷文在祷告神学中的核心地位。卡森分析主祷文如何平衡了对神的敬拜（愿人都尊神的名为圣、愿神的国降临、愿神的旨意行在地上）和对人需要的关注（日用的饮食、赦免、试探）。这为所有基督徒祷告提供了基本框架。",
                    "summary_en": "Re-examines the Lord's Prayer's central position in prayer theology. Carson analyzes how the Lord's Prayer balances worship of God (hallowing His name, coming of His kingdom, doing His will on earth) with concern for human needs (daily bread, forgiveness, temptation). This provides basic framework for all Christian prayer.",
                    "key_quotes": [
                        "The Lord's Prayer teaches us that all true prayer begins with the glory of God and ends with the good of people. 主祷文教导我们，所有真正的祷告都始于神的荣耀，终于人的益处。",
                        "When we pray 'Thy kingdom come,' we are not merely making a request but expressing submission to God's sovereign rule. 当我们祷告'愿你的国降临'时，我们不仅仅是在提出请求，而是在表达对神主权统治的顺服。"
                    ]
                },
                {
                    "number": 7,
                    "title_zh": "第7章：祷告与教会的复兴",
                    "title_en": "Ch.7: Prayer and the Revival of the Church",
                    "summary_zh": "探讨祷告在教会复兴中的核心作用。卡森回顾历史上的复兴运动，发现都以深入的祷告为特征。他呼吁当代教会不要只是祈求外在的成功，而要为内在的圣洁和神的荣耀祷告，这样的祷告才能带来真正的属灵复兴。",
                    "summary_en": "Explores prayer's central role in church revival. Carson reviews historical revival movements, finding all characterized by deep prayer. He calls contemporary churches not merely to pray for outward success but for inward holiness and God's glory—such prayer can bring genuine spiritual revival.",
                    "key_quotes": [
                        "Revival is not something we can manufacture through technique, but something we can only receive through prayer. 复兴不是我们能通过技巧制造的东西，而是只能通过祷告接受的东西。",
                        "True revival begins when we pray for God's glory more earnestly than we pray for our own success. 真正的复兴始于我们为神的荣耀祷告比为自己的成功祷告更加恳切的时候。"
                    ]
                },
                {
                    "number": 8,
                    "title_zh": "第8章：祷告生活的实际建议",
                    "title_en": "Ch.8: Practical Advice for Prayer Life",
                    "summary_zh": "提供建立健康祷告生活的实用指导。卡森讨论了祷告的时间、地点、内容和方式。他特别强调要平衡个人祷告和团体祷告、即兴祷告和预备祷告、感谢祷告和祈求祷告，帮助信徒建立持久而丰富的祷告生活。",
                    "summary_en": "Provides practical guidance for establishing healthy prayer life. Carson discusses prayer's timing, location, content, and methods. He particularly emphasizes balancing personal and corporate prayer, spontaneous and prepared prayer, thanksgiving and petition, helping believers establish lasting and rich prayer lives.",
                    "key_quotes": [
                        "Good intentions about prayer are not enough; we need practical strategies and spiritual disciplines. 关于祷告的良好意图是不够的；我们需要实际的策略和属灵的操练。",
                        "The goal is not to pray more, but to pray better—more biblically, more fervently, more intelligently. 目标不是祷告得更多，而是祷告得更好——更合乎圣经、更热切、更智慧。"
                    ]
                }
            ]
            book['recommend_for'] = ["所有基督徒", "教会领袖", "祷告事工", "灵修追求者"]
            
        elif book['id'] == 'book-055':
            # 主啊，要到几时？ - D.A. Carson  
            book['chapters'] = [
                {
                    "number": 1,
                    "title_zh": "第1章：苦难问题的持续挑战",
                    "title_en": "Ch.1: The Persistent Challenge of Suffering",
                    "summary_zh": "卡森开篇即面对人类最古老的神学难题：如果神是全能全善的，为什么容许恶和苦难存在？作者承认这个问题的复杂性，同时指出圣经并不回避这一现实。从约伯的呐喊到诗篇的哀歌，圣经诚实地记录了信徒面对苦难时的困惑和挣扎。",
                    "summary_en": "Carson opens by facing humanity's oldest theological dilemma: if God is omnipotent and perfectly good, why does He permit evil and suffering? The author acknowledges this problem's complexity while noting Scripture doesn't avoid this reality. From Job's cry to psalmic laments, Scripture honestly records believers' confusion and struggle when facing suffering.",
                    "key_quotes": [
                        "The problem of suffering is not merely intellectual but intensely personal for anyone who has walked through the valley of pain. 苦难的问题对于任何走过痛苦幽谷的人来说，不仅仅是智力上的，更是极其个人化的。",
                        "Scripture does not offer us neat philosophical answers but invites us into honest dialogue with God about life's hardest questions. 圣经不向我们提供整洁的哲学答案，而是邀请我们就生活中最难的问题与神进行诚实的对话。"
                    ]
                },
                {
                    "number": 2,
                    "title_zh": "第2章：约伯记的苦难神学",
                    "title_en": "Ch.2: Job's Theology of Suffering",
                    "summary_zh": "深入解析约伯记对苦难问题的处理。约伯记揭示了苦难的复杂成因，既涉及撒但的攻击，也关乎神的许可。更重要的是，约伯记展示了在苦难中保持对神信心的可能性，即使不明白苦难的原因。约伯最终的回应不是得到了答案，而是遇见了神。",
                    "summary_en": "Thoroughly analyzes Job's handling of the suffering problem. Job reveals suffering's complex causes, involving both Satan's attacks and God's permission. More importantly, Job demonstrates the possibility of maintaining faith in God during suffering, even without understanding suffering's reasons. Job's final response was not getting answers but encountering God.",
                    "key_quotes": [
                        "I had heard of you by the hearing of the ear, but now my eye sees you. 我从前风闻有你，现在亲眼看见你。",
                        "Job's friends tried to solve the mystery of suffering with theology; God solved Job's need not with explanations but with His presence. 约伯的朋友试图用神学来解决苦难的奥秘；神不是用解释而是用他的同在来解决约伯的需要。"
                    ]
                },
                {
                    "number": 3,
                    "title_zh": "第3章：诗篇中的哀歌传统",
                    "title_en": "Ch.3: The Lament Tradition in Psalms",
                    "summary_zh": "探讨诗篇中丰富的哀歌传统如何为受苦的信徒提供表达和安慰。诗篇的哀歌显示了向神倾诉苦情的正当性，同时保持对神最终救赎的盼望。卡森强调，哀歌不是缺乏信心，而是信心在困境中的真实表达。",
                    "summary_en": "Explores how the rich lament tradition in Psalms provides expression and comfort for suffering believers. Psalmic laments show the legitimacy of pouring out grief to God while maintaining hope in God's ultimate redemption. Carson emphasizes that lament is not lack of faith but faith's authentic expression in distress.",
                    "key_quotes": [
                        "How long, O Lord? Will you forget me forever? How long will you hide your face from me? 耶和华啊，你忘记我要到几时呢？要到永远吗？你掩面不顾我要到几时呢？",
                        "The laments teach us that honest expression of pain and confusion before God is not rebellion but faith seeking understanding. 哀歌教导我们，在神面前诚实地表达痛苦和困惑不是悖逆，而是信心寻求理解。"
                    ]
                },
                {
                    "number": 4,
                    "title_zh": "第4章：传道书的现实主义智慧",
                    "title_en": "Ch.4: Ecclesiastes' Realistic Wisdom",
                    "summary_zh": "分析传道书如何以现实主义的态度面对人生的虚空和不公。传道书不否认生活中的困难和不合理，但指出在神的主权下，即使在虚空中也能找到意义。作者展示了传道书如何平衡悲观的观察与敬畏神的智慧。",
                    "summary_en": "Analyzes how Ecclesiastes faces life's vanity and injustice with realistic attitude. Ecclesiastes doesn't deny life's difficulties and unreasonableness but points out that under God's sovereignty, meaning can be found even in vanity. The author shows how Ecclesiastes balances pessimistic observations with wisdom that fears God.",
                    "key_quotes": [
                        "Vanity of vanities, says the Preacher, vanity of vanities! All is vanity. 传道者说：虚空的虚空，虚空的虚空，凡事都是虚空。",
                        "Fear God and keep His commandments, for this is the whole duty of man. 敬畏神，谨守他的诫命，这是人所当尽的本分。"
                    ]
                },
                {
                    "number": 5,
                    "title_zh": "第5章：耶稣与苦难的奥秘",
                    "title_en": "Ch.5: Jesus and the Mystery of Suffering",
                    "summary_zh": "探讨耶稣如何处理苦难问题。从他对盲人、病人的医治，到他对拉撒路之死的回应，再到他自己在十字架上的受苦，耶稣既显明了神对苦难的关切，也为苦难的最终解决提供了道路。卡森特别关注耶稣在客西马尼园的挣扎。",
                    "summary_en": "Explores how Jesus handled the suffering problem. From His healing of the blind and sick, to His response to Lazarus' death, to His own suffering on the cross, Jesus both revealed God's concern for suffering and provided the way for suffering's ultimate resolution. Carson particularly focuses on Jesus' struggle in Gethsemane.",
                    "key_quotes": [
                        "Jesus wept. 耶稣哭了。",
                        "My Father, if it is possible, may this cup be taken from me. Yet not as I will, but as you will. 我父啊，倘若可行，求你叫这杯离开我。然而，不要照我的意思，只要照你的意思。"
                    ]
                },
                {
                    "number": 6,
                    "title_zh": "第6章：十字架——神对苦难的回答",
                    "title_en": "Ch.6: The Cross—God's Answer to Suffering",
                    "summary_zh": "论证十字架如何成为神对苦难问题的终极回答。在十字架上，神没有置身事外地解释苦难，而是亲身进入苦难，承担了人类罪恶的后果。十字架显明神既是公义的（不忽视罪恶），也是慈爱的（亲自承担刑罚）。",
                    "summary_en": "Argues how the cross becomes God's ultimate answer to the suffering problem. On the cross, God didn't explain suffering from outside but personally entered suffering, bearing consequences of human sin. The cross reveals God is both just (not overlooking sin) and loving (personally bearing punishment).",
                    "key_quotes": [
                        "He himself bore our sins in his body on the tree, so that we might die to sins and live for righteousness. 他被挂在木头上，亲身担当了我们的罪，使我们既然在罪上死，就得以在义上活。",
                        "God's answer to suffering is not a philosophical argument but a historical event—the cross of Christ. 神对苦难的回答不是哲学论证，而是一个历史事件——基督的十字架。"
                    ]
                },
                {
                    "number": 7,
                    "title_zh": "第7章：复活与苦难的终极盼望",
                    "title_en": "Ch.7: Resurrection and Ultimate Hope for Suffering",
                    "summary_zh": "探讨复活如何为苦难提供终极答案。基督的复活预示着最终的救赎，当神擦去一切眼泪，死亡、悲哀、疼痛都要过去。卡森强调复活不是对苦难的解释，而是对苦难的逆转和胜利。这给受苦的信徒提供了真实的盼望。",
                    "summary_en": "Explores how resurrection provides ultimate answer for suffering. Christ's resurrection foreshadows final redemption, when God will wipe away all tears and death, sorrow, and pain will pass away. Carson emphasizes resurrection is not explanation for suffering but reversal and victory over suffering. This provides genuine hope for suffering believers.",
                    "key_quotes": [
                        "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain. 神要擦去他们一切的眼泪，不再有死亡，也不再有悲哀、哭号、疼痛。",
                        "The resurrection is God's promise that suffering will not have the last word in human history. 复活是神的应许，苦难不会在人类历史中有最后的发言权。"
                    ]
                },
                {
                    "number": 8,
                    "title_zh": "第8章：在苦难中的牧养关怀",
                    "title_en": "Ch.8: Pastoral Care in Suffering",
                    "summary_zh": "为牧者和信徒提供在苦难中关怀他人的实用智慧。卡森强调陪伴比解释更重要，聆听比说教更有效。他警告不要给出简单的答案或虚假的安慰，而要学习与哀哭的人同哭，在苦难中体现基督的爱。",
                    "summary_en": "Provides practical wisdom for pastors and believers caring for others in suffering. Carson emphasizes presence is more important than explanations, listening more effective than preaching. He warns against giving simple answers or false comfort, but learning to weep with those who weep and embody Christ's love in suffering.",
                    "key_quotes": [
                        "Weep with those who weep. 与哭泣的人同哭。",
                        "Sometimes the most profound pastoral care is simply being present with someone in their pain, without trying to explain it away. 有时最深刻的牧养关怀就是简单地与某人在他们的痛苦中同在，而不试图解释它。"
                    ]
                }
            ]
            book['recommend_for'] = ["牧者", "受苦中的信徒", "护教学者", "神学生", "哀伤辅导者"]
    
    # Write back to file
    with open('/Users/suyan/clawd/projects/gospel-app/web/src/data/books.json', 'w', encoding='utf-8') as f:
        json.dump(books, f, ensure_ascii=False, indent=2)
    
    print("✅ 第一批书籍（053-055）处理完成")
    return True

if __name__ == "__main__":
    process_books_batch_1()