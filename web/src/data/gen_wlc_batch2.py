import json

questions = [
{
"id":"wlc_051","catechism":"westminster_larger","number":51,
"question_en":"What was the estate of Christ's exaltation?",
"question_zh":"基督升高的状态是什么？",
"answer_en":"The estate of Christ's exaltation comprehendeth his resurrection, ascension, sitting at the right hand of the Father, and his coming again to judge the world.",
"answer_zh":"基督升高的状态包括祂的复活、升天、坐在父的右边和祂再来审判世界。",
"proof_texts":["1 Corinthians 15:4","Mark 16:19","Acts 1:11","Acts 17:31"],
"notes_en":"Christ's exaltation includes four stages: resurrection, ascension, session at God's right hand, and return in judgment.",
"notes_zh":"基督的升高包括四个阶段：复活、升天、坐在神的右边和再来审判。"
},
{
"id":"wlc_052","catechism":"westminster_larger","number":52,
"question_en":"How was Christ exalted in his resurrection?",
"question_zh":"基督在复活中如何升高？",
"answer_en":"Christ was exalted in his resurrection, in that, not being possible for him to be holden of death, and having the very same body in which he suffered, with the essential properties thereof (but without mortality, and other common infirmities belonging to this life), really united to his soul, he rose again from the dead the third day by his own power; whereby he declared himself to be the Son of God, to have satisfied divine justice, to have vanquished death, and him that had the power of it, and to be Lord of quick and dead: all which he did as a public person, the head of his church, for their justification, quickening in grace, support against enemies, and to assure them of their resurrection from the dead at the last day.",
"answer_zh":"基督在复活中升高，因为死不可能拘禁祂，祂带着受苦时的同一身体及其基本属性（但没有必死和今生其他常见的软弱），真实地与祂的灵魂联合，在第三天凭祂自己的大能从死里复活；借此宣告自己是神的儿子，已经满足了神的公义，已经战胜了死亡和那掌死权的，是活人和死人的主；这一切祂都是作为公众代表人、教会的元首所行的，为了他们的称义、在恩典中的苏醒、抵挡仇敌的支持，并保证他们在末日从死里复活。",
"proof_texts":["Acts 2:24,27","Luke 24:39","Romans 6:9","Romans 1:4","Romans 8:34","Hebrews 2:14","1 Corinthians 15:20-22","Ephesians 1:20-23"],
"notes_en":"Christ's bodily resurrection declares His deity, victory over death, and secures justification and resurrection for His people.",
"notes_zh":"基督身体的复活宣告了祂的神性、对死亡的胜利，并确保了祂百姓的称义和复活。"
},
{
"id":"wlc_053","catechism":"westminster_larger","number":53,
"question_en":"How was Christ exalted in his ascension?",
"question_zh":"基督在升天中如何升高？",
"answer_en":"Christ was exalted in his ascension, in that having after his resurrection often appeared unto and conversed with his apostles, speaking to them of the things pertaining to the kingdom of God, and giving them commission to preach the gospel to all nations, forty days after his resurrection he was taken up from the earth to heaven, and there sitteth at the right hand of his Father.",
"answer_zh":"基督在升天中升高，因为在复活之后，祂多次向使徒显现并与他们交谈，对他们讲论有关神国的事，并差遣他们向万民传福音，在复活后四十天祂从地上被接升天，在那里坐在父的右边。",
"proof_texts":["Acts 1:2-3","Matthew 28:19-20","Mark 16:19","Ephesians 1:20","Acts 1:9-11"],
"notes_en":"After forty days of post-resurrection ministry, Christ ascended bodily to heaven to sit at the Father's right hand.",
"notes_zh":"复活后经过四十天的事工，基督身体升天，坐在父的右边。"
},
{
"id":"wlc_054","catechism":"westminster_larger","number":54,
"question_en":"How is Christ exalted in his sitting at the right hand of God?",
"question_zh":"基督坐在神的右边如何升高？",
"answer_en":"Christ is exalted in his sitting at the right hand of God, in that as God-man he is advanced to the highest favor with God the Father, with all fullness of joy, glory, and power over all things in heaven and earth; and doth gather and defend his church, and subdue their enemies; furnisheth his ministers and people with gifts and graces, and maketh intercession for them.",
"answer_zh":"基督坐在神的右边升高，因为祂作为神人被提升到父神最大的恩宠中，拥有一切的喜乐、荣耀和权柄管理天上地下万物；祂召聚并保卫祂的教会，制服他们的仇敌；赐给祂的传道人和百姓各种恩赐和恩典，并为他们代求。",
"proof_texts":["Philippians 2:9","Acts 2:28","Ephesians 1:22","Matthew 28:18-20","Ephesians 4:10-12","Romans 8:34"],
"notes_en":"At God's right hand, Christ exercises supreme authority, gathers His church, bestows gifts, and intercedes for believers.",
"notes_zh":"在神的右边，基督行使至高权柄，召聚教会，赐下恩赐，为信徒代求。"
},
{
"id":"wlc_055","catechism":"westminster_larger","number":55,
"question_en":"How doth Christ make intercession?",
"question_zh":"基督如何代求？",
"answer_en":"Christ maketh intercession, by his appearing in our nature continually before the Father in heaven, in the merit of his obedience and sacrifice on earth, declaring his will to have it applied to all believers; answering all accusations against them, and procuring for them quiet of conscience, notwithstanding daily failings, access with boldness to the throne of grace, and acceptance of their persons and services.",
"answer_zh":"基督代求，是以我们的本性持续在天上的父面前显现，凭祂在地上顺服和献祭的功德，宣明祂的旨意要将这功德应用在一切信徒身上；回答对他们一切的控告，为他们取得良心的安宁（即使他们天天有过犯）、坦然无惧来到施恩宝座前的机会，以及他们的人和事奉蒙悦纳。",
"proof_texts":["Hebrews 9:12,24","Hebrews 1:3","John 17:9,20,24","Romans 8:33-34","Hebrews 4:16","1 Peter 2:5","Ephesians 1:6"],
"notes_en":"Christ intercedes by appearing before the Father in our nature, applying His merits to believers and answering all charges against them.",
"notes_zh":"基督以我们的本性在父面前代求，将祂的功德应用于信徒，回答对他们的一切控告。"
},
{
"id":"wlc_056","catechism":"westminster_larger","number":56,
"question_en":"How is Christ to be exalted in his coming again to judge the world?",
"question_zh":"基督再来审判世界时如何升高？",
"answer_en":"Christ is to be exalted in his coming again to judge the world, in that he, who was unjustly judged and condemned by wicked men, shall come again at the last day in great power, and in the full manifestation of his own glory, and of his Father's, with all his holy angels, with a shout, with the voice of the archangel, and with the trumpet of God, to judge the world in righteousness.",
"answer_zh":"基督再来审判世界时升高，因为祂曾被恶人不义地审判和定罪，将在末日带着大能力，完全彰显祂自己和父的荣耀，与众圣天使一同降临，有呼叫的声音、天使长的声音和神的号吹响，按公义审判世界。",
"proof_texts":["Acts 3:20-21","Matthew 24:30","2 Thessalonians 1:7-8","1 Thessalonians 4:16","Acts 17:31"],
"notes_en":"Christ who was unjustly condemned will return in glory with angels to judge the world in righteousness.",
"notes_zh":"曾被不义定罪的基督将带着荣耀与天使再来，按公义审判世界。"
},
{
"id":"wlc_057","catechism":"westminster_larger","number":57,
"question_en":"What benefits hath Christ procured by his mediation?",
"question_zh":"基督借着祂的中保之工为我们取得了什么益处？",
"answer_en":"Christ, by his mediation, hath procured redemption, with all other benefits of the covenant of grace.",
"answer_zh":"基督借着祂的中保之工取得了救赎和恩典之约的其他一切益处。",
"proof_texts":["Hebrews 9:12","2 Corinthians 1:20","Ephesians 1:3"],
"notes_en":"Through His mediatorial work, Christ has secured redemption and all the blessings of the covenant of grace for His people.",
"notes_zh":"基督借着中保之工为祂的百姓获得了救赎和恩典之约的一切祝福。"
},
{
"id":"wlc_058","catechism":"westminster_larger","number":58,
"question_en":"How do we come to be made partakers of the benefits which Christ hath procured?",
"question_zh":"我们如何得以有份于基督所取得的益处？",
"answer_en":"We are made partakers of the benefits which Christ hath procured, by the application of them unto us, which is the work especially of God the Holy Ghost.",
"answer_zh":"我们得以有份于基督所取得的益处，是借着将这些益处应用于我们，这特别是圣灵的工作。",
"proof_texts":["John 3:5-6","Titus 3:5-6","John 16:7,14"],
"notes_en":"The Holy Spirit applies Christ's redemptive benefits to believers, making them actual partakers of salvation.",
"notes_zh":"圣灵将基督救赎的益处应用于信徒，使他们实际地有份于救恩。"
},
{
"id":"wlc_059","catechism":"westminster_larger","number":59,
"question_en":"Who are made partakers of redemption through Christ?",
"question_zh":"谁得以有份于借基督而来的救赎？",
"answer_en":"Redemption is certainly applied, and effectually communicated, to all those for whom Christ hath purchased it; who are in time by the Holy Ghost enabled to believe in Christ according to the gospel.",
"answer_zh":"救赎确实地被应用和有效地传达给所有基督为之买赎的人；他们在适当的时候被圣灵使能按照福音信靠基督。",
"proof_texts":["Ephesians 1:13-14","John 6:37,39","John 10:15-16","Acts 13:48"],
"notes_en":"All the elect, for whom Christ died, will certainly receive redemption through the Spirit-wrought gift of faith.",
"notes_zh":"基督为之而死的所有选民，必定借圣灵所赐的信心领受救赎。"
},
{
"id":"wlc_060","catechism":"westminster_larger","number":60,
"question_en":"Can they who have never heard the gospel, and so know not Jesus Christ, nor believe in him, be saved by their living according to the light of nature?",
"question_zh":"那些从未听过福音、因而不认识也不信耶稣基督的人，能否靠按自然之光生活而得救？",
"answer_en":"They who, having never heard the gospel, know not Jesus Christ, and believe not in him, cannot be saved, be they never so diligent to frame their lives according to the light of nature, or the laws of that religion which they profess; neither is there salvation in any other, but in Christ alone, who is the Savior only of his body the church.",
"answer_zh":"那些从未听过福音、不认识也不信耶稣基督的人，不能得救，无论他们多么努力地按照自然之光或他们所承认的宗教律法来规范生活；除基督之外别无拯救，祂只是祂的身体教会的救主。",
"proof_texts":["Romans 10:14","John 8:24","Acts 4:12","Ephesians 5:23","John 14:6"],
"notes_en":"Salvation is found only in Christ; no one can be saved by natural religion or moral effort apart from faith in Him.",
"notes_zh":"救恩唯独在基督里；除了信靠祂，没有人能靠自然宗教或道德努力得救。"
},
{
"id":"wlc_061","catechism":"westminster_larger","number":61,
"question_en":"Are all they saved who hear the gospel, and live in the church?",
"question_zh":"凡听到福音并生活在教会中的人都得救了吗？",
"answer_en":"All that hear the gospel, and live in the visible church, are not saved; but they only who are true members of the church invisible.",
"answer_zh":"凡听到福音并生活在有形教会中的人并非都得救了；唯有那些真正属于无形教会的人才得救。",
"proof_texts":["John 12:38-40","Romans 9:6","Matthew 22:14","Matthew 7:21","Romans 11:7"],
"notes_en":"Not all in the visible church are saved; only true members of the invisible church — the elect — are saved.",
"notes_zh":"并非有形教会中的所有人都得救；唯有无形教会的真成员——选民——才得救。"
},
{
"id":"wlc_062","catechism":"westminster_larger","number":62,
"question_en":"What is the visible church?",
"question_zh":"什么是有形教会？",
"answer_en":"The visible church is a society made up of all such as in all ages and places of the world do profess the true religion, and of their children.",
"answer_zh":"有形教会是由世界各处、各时代所有信奉真宗教的人和他们的儿女所组成的团体。",
"proof_texts":["1 Corinthians 1:2","1 Corinthians 12:13","Romans 15:9-12","Acts 2:39","Genesis 17:7"],
"notes_en":"The visible church includes all who profess the true faith and their children, across all ages and nations.",
"notes_zh":"有形教会包括所有承认真信仰的人和他们的儿女，遍及各时代和各国。"
},
{
"id":"wlc_063","catechism":"westminster_larger","number":63,
"question_en":"What are the special privileges of the visible church?",
"question_zh":"有形教会有什么特殊的权益？",
"answer_en":"The visible church hath the privilege of being under God's special care and government; of being protected and preserved in all ages, notwithstanding the opposition of all enemies; and of enjoying the communion of saints, the ordinary means of salvation, and offers of grace by Christ to all the members of it in the ministry of the gospel, testifying, that whosoever believes in him shall be saved, and excluding none that will come unto him.",
"answer_zh":"有形教会有受神特别眷顾和管理的权益；在各世代中不论仇敌如何反对，都蒙保护和保存；并享受圣徒相通、通常的救恩途径，以及基督借着福音的事工向所有成员提供的恩典，见证凡信靠祂的人必然得救，不拒绝任何愿意来到祂面前的人。",
"proof_texts":["Isaiah 4:5-6","Psalm 115:9-11","Matthew 16:18","Acts 2:39,42","Psalm 147:19-20"],
"notes_en":"The visible church enjoys God's care, protection, the means of grace, and gospel offers extended to all its members.",
"notes_zh":"有形教会享有神的眷顾、保护、恩典之途径，以及向所有成员发出的福音邀请。"
},
{
"id":"wlc_064","catechism":"westminster_larger","number":64,
"question_en":"What is the invisible church?",
"question_zh":"什么是无形教会？",
"answer_en":"The invisible church is the whole number of the elect, that have been, are, or shall be gathered into one under Christ the head.",
"answer_zh":"无形教会是全体选民，已经、正在或将要在基督元首之下被聚集为一的。",
"proof_texts":["Ephesians 1:10,22-23","John 10:16","John 11:52","Colossians 1:18"],
"notes_en":"The invisible church consists of all the elect from every age, united under Christ as their Head.",
"notes_zh":"无形教会由各世代所有的选民组成，在基督作元首之下合而为一。"
},
{
"id":"wlc_065","catechism":"westminster_larger","number":65,
"question_en":"What special benefits do the members of the invisible church enjoy by Christ?",
"question_zh":"无形教会的成员借基督享受什么特殊的益处？",
"answer_en":"The members of the invisible church by Christ enjoy union and communion with him in grace and glory.",
"answer_zh":"无形教会的成员借基督享受与祂在恩典和荣耀中的联合与交通。",
"proof_texts":["John 17:21","Ephesians 2:5-6","John 17:24","1 John 1:3"],
"notes_en":"Members of the invisible church enjoy the supreme benefits of union and communion with Christ in both grace and glory.",
"notes_zh":"无形教会的成员享受与基督在恩典和荣耀中联合与交通的至高益处。"
},
{
"id":"wlc_066","catechism":"westminster_larger","number":66,
"question_en":"What is that union which the elect have with Christ?",
"question_zh":"选民与基督的联合是什么？",
"answer_en":"The union which the elect have with Christ is the work of God's grace, whereby they are spiritually and mystically, yet really and inseparably, joined to Christ as their head and husband; which is done in their effectual calling.",
"answer_zh":"选民与基督的联合是神恩典的工作，借此他们在灵里奥秘地、却又真实而不可分离地与基督联合，祂是他们的元首和丈夫；这联合是在有效的呼召中成就的。",
"proof_texts":["Ephesians 1:22","Ephesians 5:23,30","1 Corinthians 6:17","John 10:28","1 Corinthians 1:9"],
"notes_en":"Union with Christ is a spiritual, mystical, real, and inseparable bond, accomplished in effectual calling.",
"notes_zh":"与基督的联合是属灵的、奥秘的、真实的、不可分离的联结，在有效的呼召中成就。"
},
{
"id":"wlc_067","catechism":"westminster_larger","number":67,
"question_en":"What is effectual calling?",
"question_zh":"什么是有效的呼召？",
"answer_en":"Effectual calling is the work of God's almighty power and grace, whereby (out of his free and special love to his elect, and from nothing in them moving him thereunto) he doth, in his accepted time, invite and draw them to Jesus Christ, by his Word and Spirit; savingly enlightening their minds, renewing and powerfully determining their wills, so as they (although in themselves dead in sin) are hereby made willing and able, freely to answer his call, and to accept and embrace the grace offered and conveyed therein.",
"answer_zh":"有效的呼召是神全能的大能和恩典的工作，借此（出于祂对选民白白的、特别的爱，而非出于他们里面任何促使祂如此做的东西）祂在祂所悦纳的时候，借着祂的话语和圣灵邀请他们、吸引他们归向耶稣基督；以拯救的方式光照他们的心智，更新并大能地决定他们的意志，使他们（虽然本身死在罪中）因此甘心乐意也有能力自由地回应祂的呼召，接受和拥抱其中所提供和传达的恩典。",
"proof_texts":["John 5:25","Ephesians 1:18-20","2 Timothy 1:9","Acts 26:18","Ezekiel 36:26-27","John 6:44-45","Ephesians 2:5"],
"notes_en":"In effectual calling, God powerfully draws the elect to Christ, enlightening their minds and renewing their wills to freely embrace grace.",
"notes_zh":"在有效的呼召中，神大能地吸引选民归向基督，光照他们的心智，更新他们的意志，使他们自由地接受恩典。"
},
{
"id":"wlc_068","catechism":"westminster_larger","number":68,
"question_en":"Are the elect only effectually called?",
"question_zh":"是否只有选民才蒙有效的呼召？",
"answer_en":"All the elect, and they only, are effectually called; although others may be, and often are, outwardly called by the ministry of the Word, and have some common operations of the Spirit; who, for their wilful neglect and contempt of the grace offered to them, being justly left in their unbelief, do never truly come to Jesus Christ.",
"answer_zh":"只有所有的选民才蒙有效的呼召；虽然其他人可能、而且常常借着圣道的事工在外部被呼召，也有圣灵一些普通的运行；但他们因自愿地忽略和藐视向他们所提供的恩典，被公正地任凭留在不信中，永远不会真正来到耶稣基督面前。",
"proof_texts":["Acts 13:48","Matthew 22:14","Matthew 13:20-21","Hebrews 6:4-6","John 12:38-40"],
"notes_en":"Only the elect are effectually called; others may receive outward calling but never truly come to Christ.",
"notes_zh":"唯有选民蒙有效的呼召；其他人可能受到外在呼召但永远不会真正归向基督。"
},
{
"id":"wlc_069","catechism":"westminster_larger","number":69,
"question_en":"What is the communion in grace which the members of the invisible church have with Christ?",
"question_zh":"无形教会的成员与基督在恩典中的交通是什么？",
"answer_en":"The communion in grace which the members of the invisible church have with Christ, is their partaking of the virtue of his mediation, in their justification, adoption, sanctification, and whatever else, in this life, manifests their union with him.",
"answer_zh":"无形教会的成员与基督在恩典中的交通，是指他们有份于祂中保之工的功效，在称义、得儿子名分、成圣以及今生一切彰显他们与祂联合的事上。",
"proof_texts":["Romans 8:30","Ephesians 1:5","1 Corinthians 1:30","Romans 8:28"],
"notes_en":"Communion with Christ in grace includes justification, adoption, sanctification, and all benefits flowing from union with Him.",
"notes_zh":"与基督在恩典中的交通包括称义、得儿子名分、成圣以及与祂联合所带来的一切益处。"
},
{
"id":"wlc_070","catechism":"westminster_larger","number":70,
"question_en":"What is justification?",
"question_zh":"什么是称义？",
"answer_en":"Justification is an act of God's free grace unto sinners, in which he pardoneth all their sins, accepteth and accounteth their persons righteous in his sight; not for anything wrought in them, or done by them, but only for the perfect obedience and full satisfaction of Christ, by God imputed to them, and received by faith alone.",
"answer_zh":"称义是神向罪人所施白白恩典的作为，其中祂赦免他们一切的罪，在祂面前接纳并算他们为义；不是因他们里面任何的工作或他们所行的，唯独因基督完全的顺服和完全的补赎，由神归算给他们，唯独凭信心领受。",
"proof_texts":["Romans 3:22-25","Romans 4:5","2 Corinthians 5:19,21","Romans 5:17-19","Galatians 2:16","Philippians 3:9"],
"notes_en":"Justification is God's gracious act of pardoning sinners and declaring them righteous solely on the basis of Christ's imputed righteousness, received by faith alone.",
"notes_zh":"称义是神恩慈的作为，赦免罪人并宣告他们为义，唯独根据基督归算的义，唯独凭信心领受。"
},
{
"id":"wlc_071","catechism":"westminster_larger","number":71,
"question_en":"How is justification an act of God's free grace?",
"question_zh":"称义如何是神白白恩典的作为？",
"answer_en":"Although Christ, by his obedience and death, did make a proper, real, and full satisfaction to God's justice in the behalf of them that are justified; yet inasmuch as God accepteth the satisfaction from a surety, which he might have demanded of them, and did provide this surety, his own only Son, imputing his righteousness to them, and requiring nothing of them for their justification but faith, which also is his gift, their justification is to them of free grace.",
"answer_zh":"虽然基督借着祂的顺服和受死，为那些被称义之人的缘故，对神的公义作了正当的、真实的和完全的补赎；但因为神接纳了祂本可向他们要求的替身的补赎，而且提供了这位替身——祂自己的独生子，将祂的义归算给他们，为他们的称义除了信心（这也是祂的恩赐）之外不向他们要求什么，所以他们的称义是出于白白的恩典。",
"proof_texts":["Romans 3:24","Romans 8:32","2 Corinthians 5:21","Romans 5:17-19","Ephesians 2:8"],
"notes_en":"Justification is free grace because God Himself provided the surety and requires only faith—which is also His gift.",
"notes_zh":"称义是白白的恩典，因为神自己提供了替身，只要求信心——而信心也是祂的恩赐。"
},
{
"id":"wlc_072","catechism":"westminster_larger","number":72,
"question_en":"What is justifying faith?",
"question_zh":"什么是称义的信心？",
"answer_en":"Justifying faith is a saving grace, wrought in the heart of a sinner by the Spirit and Word of God, whereby he, being convinced of his sin and misery, and of the disability in himself and all other creatures to recover him out of his lost condition, not only assenteth to the truth of the promise of the gospel, but receiveth and resteth upon Christ and his righteousness, therein held forth, for pardon of sin, and for the accepting and accounting of his person righteous in the sight of God for salvation.",
"answer_zh":"称义的信心是一种救恩之恩典，由神的灵和话语在罪人心中产生，借此他认识到自己的罪和愁苦，也认识到自己和一切受造物都无力使他从失丧的状况中恢复，不仅同意福音应许的真理，而且接受并安息在其中所展示的基督和祂的义上，为要使罪得赦免，使自己在神面前被接纳和算为义，以致得救。",
"proof_texts":["Hebrews 10:39","Acts 2:37","Acts 16:30","Acts 15:11","John 1:12","Philippians 3:9","Acts 10:43"],
"notes_en":"Justifying faith involves conviction of sin, assent to gospel truth, and personal trust in Christ alone for righteousness.",
"notes_zh":"称义的信心包括对罪的认知、赞同福音真理，以及个人信靠唯独基督的义。"
},
{
"id":"wlc_073","catechism":"westminster_larger","number":73,
"question_en":"How doth faith justify a sinner in the sight of God?",
"question_zh":"信心如何使罪人在神面前称义？",
"answer_en":"Faith justifies a sinner in the sight of God, not because of those other graces which do always accompany it, or of good works that are the fruits of it, nor as if the grace of faith, or any act thereof, were imputed to him for his justification; but only as it is an instrument by which he receiveth and applieth Christ and his righteousness.",
"answer_zh":"信心使罪人在神面前称义，不是因为总是伴随信心的其他恩典，或作为信心果子的善行，也不是因为信心的恩典或它的任何行为被归算给他使他称义；而唯独因为信心是他借以领受和应用基督与祂的义的工具。",
"proof_texts":["Galatians 3:11","Romans 3:28","Romans 4:5","John 1:12","Philippians 3:9"],
"notes_en":"Faith justifies only as an instrument that receives Christ's righteousness; it is not the ground of justification.",
"notes_zh":"信心称义仅仅作为领受基督之义的工具；它不是称义的根据。"
},
{
"id":"wlc_074","catechism":"westminster_larger","number":74,
"question_en":"What is adoption?",
"question_zh":"什么是得儿子的名分？",
"answer_en":"Adoption is an act of the free grace of God, in and for his only Son Jesus Christ, whereby all those that are justified are received into the number of his children, have his name put upon them, the Spirit of his Son given to them, are under his fatherly care and dispensations, admitted to all the liberties and privileges of the sons of God, made heirs of all the promises, and fellow heirs with Christ in glory.",
"answer_zh":"得儿子的名分是神在祂独生子耶稣基督里并为了祂白白恩典的作为，借此所有被称义的人都被接纳为祂的儿女，有祂的名加在他们身上，祂儿子的灵赐给他们，在祂父亲般的看顾和安排之下，被准许享有神儿女一切的自由和特权，成为一切应许的后嗣，与基督在荣耀中同为后嗣。",
"proof_texts":["1 John 3:1","Galatians 4:4-5","John 1:12","Romans 8:17","2 Corinthians 6:18","Galatians 4:6","Hebrews 12:6"],
"notes_en":"Adoption grants justified sinners the full status of God's children, with all attendant privileges and the inheritance of glory.",
"notes_zh":"得儿子名分赋予被称义的罪人神儿女的完整身份，以及随之而来的一切特权和荣耀的产业。"
},
{
"id":"wlc_075","catechism":"westminster_larger","number":75,
"question_en":"What is sanctification?",
"question_zh":"什么是成圣？",
"answer_en":"Sanctification is a work of God's grace, whereby they whom God hath, before the foundation of the world, chosen to be holy, are in time, through the powerful operation of his Spirit applying the death and resurrection of Christ unto them, renewed in their whole man after the image of God; having the seeds of repentance unto life, and all other saving graces, put into their hearts, and those graces so stirred up, increased, and strengthened, as that they more and more die unto sin, and rise unto newness of life.",
"answer_zh":"成圣是神恩典的工作，借此那些在创世以前被神拣选为圣洁的人，在适当的时候，借着圣灵将基督的死和复活应用在他们身上的大能运行，全人按照神的形像被更新；悔改得生命的种子和其他一切救恩的恩典被放在他们心中，这些恩典被激发、增长并坚固，以致他们越来越向罪而死，在新生命中活过来。",
"proof_texts":["Ephesians 1:4","1 Corinthians 6:11","2 Thessalonians 2:13","Romans 6:4-6","Ephesians 3:16-19","Colossians 1:10-11"],
"notes_en":"Sanctification is the progressive work of the Spirit applying Christ's death and resurrection, renewing believers in God's image.",
"notes_zh":"成圣是圣灵将基督的死和复活应用于信徒、按神的形像更新他们的渐进工作。"
},
{
"id":"wlc_076","catechism":"westminster_larger","number":76,
"question_en":"What is repentance unto life?",
"question_zh":"什么是悔改得生命？",
"answer_en":"Repentance unto life is a saving grace, wrought in the heart of a sinner by the Spirit and Word of God, whereby, out of the sight and sense, not only of the danger, but also of the filthiness and odiousness of his sins, and upon the apprehension of God's mercy in Christ to such as are penitent, he so grieves for and hates his sins, as that he turns from them all to God, purposing and endeavoring constantly to walk with him in all the ways of new obedience.",
"answer_zh":"悔改得生命是一种救恩的恩典，由神的灵和话语在罪人心中产生，借此他不仅看到并感受到自己的罪的危险，也看到其污秽和可恨，又领悟到神在基督里对悔改之人的怜悯，以致他为自己的罪忧伤并恨恶，转离一切的罪归向神，决心并努力不断地与神同行，走一切新顺服的道路。",
"proof_texts":["Acts 11:18","Zechariah 12:10","Ezekiel 36:31","2 Corinthians 7:11","Joel 2:12-13","Acts 26:18","Psalm 119:6,59,128"],
"notes_en":"True repentance involves grief over sin, hatred of it, and a wholehearted turning from sin to God in new obedience.",
"notes_zh":"真正的悔改包括为罪忧伤、恨恶罪，以及全心转离罪归向神，行新的顺服。"
},
{
"id":"wlc_077","catechism":"westminster_larger","number":77,
"question_en":"Wherein do justification and sanctification differ?",
"question_zh":"称义和成圣有何区别？",
"answer_en":"Although sanctification be inseparably joined with justification, yet they differ, in that God in justification imputeth the righteousness of Christ; in sanctification his Spirit infuseth grace, and enableth to the exercise thereof; in the former, sin is pardoned; in the other, it is subdued: the one doth equally free all believers from the revenging wrath of God, and that perfectly in this life, that they never fall into condemnation; the other is neither equal in all, nor in this life perfect in any, but growing up to perfection.",
"answer_zh":"虽然成圣与称义不可分离地联结在一起，但它们有所不同：在称义中，神归算基督的义；在成圣中，祂的灵注入恩典并使人能操练恩典；在前者中，罪被赦免；在后者中，罪被制服。称义同等地释放所有信徒脱离神报应的忿怒，在今生就已完全，使他们永远不至于定罪；成圣在所有人身上并不同等，在今生也不完全，而是不断增长趋向完全。",
"proof_texts":["1 Corinthians 6:11","1 Corinthians 1:30","Romans 3:24","Romans 6:6,14","Romans 8:33-34","1 John 1:8","2 Corinthians 7:1","Philippians 3:12-14"],
"notes_en":"Justification imputes righteousness and pardons sin perfectly and equally; sanctification infuses grace and subdues sin progressively.",
"notes_zh":"称义归算公义、完全并同等地赦罪；成圣注入恩典、渐进地制服罪。"
},
{
"id":"wlc_078","catechism":"westminster_larger","number":78,
"question_en":"Whence ariseth the imperfection of sanctification in believers?",
"question_zh":"信徒成圣的不完全从何而来？",
"answer_en":"The imperfection of sanctification in believers ariseth from the remnants of sin abiding in every part of them, and the perpetual lustings of the flesh against the spirit; whereby they are often foiled with temptations, and fall into many sins, are hindered in all their spiritual services, and their best works are imperfect and defiled in the sight of God.",
"answer_zh":"信徒成圣的不完全来自残留在他们各部分中的罪，以及情欲与圣灵持续的争战；因此他们常常被试探所胜，陷入许多罪中，在一切属灵的事奉上受阻碍，他们最好的行为在神面前也是不完全和有玷污的。",
"proof_texts":["Romans 7:18,23","Galatians 5:17","Mark 14:66-72","Hebrews 12:1","Isaiah 64:6"],
"notes_en":"Remaining sin in believers causes ongoing struggle, frequent falls, and imperfection in even their best works.",
"notes_zh":"信徒里面残余的罪导致持续的争战、频繁的跌倒，即便最好的行为也不完全。"
},
{
"id":"wlc_079","catechism":"westminster_larger","number":79,
"question_en":"May not true believers, by reason of their imperfections, and the many temptations and sins they are overtaken with, fall from the state of grace?",
"question_zh":"真信徒是否会因他们的不完全以及所遭遇的许多试探和罪而从恩典的地位上堕落？",
"answer_en":"True believers, by reason of the unchangeable love of God, and his decree and covenant to give them perseverance, their inseparable union with Christ, his continual intercession for them, and the Spirit and seed of God abiding in them, can neither totally nor finally fall from the state of grace, but are kept by the power of God through faith unto salvation.",
"answer_zh":"真信徒因着神不变的爱，祂赐给他们持守之恩的预旨和圣约，他们与基督不可分离的联合，基督为他们不断的代求，以及神的灵和神的种子住在他们里面，既不会完全也不会最终从恩典的地位上堕落，而是被神的大能因着信心保守直到得救。",
"proof_texts":["Jeremiah 31:3","2 Timothy 2:19","John 10:28","Hebrews 7:25","1 John 3:9","1 Peter 1:5"],
"notes_en":"True believers cannot fall from grace because God's unchangeable love, Christ's intercession, and the Spirit preserve them.",
"notes_zh":"真信徒不会从恩典中堕落，因为神不变的爱、基督的代求和圣灵保守他们。"
},
{
"id":"wlc_080","catechism":"westminster_larger","number":80,
"question_en":"Can true believers be infallibly assured that they are in the estate of grace, and that they shall persevere therein unto salvation?",
"question_zh":"真信徒能否确实确信自己处于恩典的地位，并且会在其中持守直到得救？",
"answer_en":"Such as truly believe in Christ, and endeavor to walk in all good conscience before him, may, without extraordinary revelation, by faith grounded upon the truth of God's promises, and by the Spirit enabling them to discern in themselves those graces to which the promises of life are made, and bearing witness with their spirits that they are the children of God, be infallibly assured that they are in the estate of grace, and shall persevere therein unto salvation.",
"answer_zh":"凡真正信靠基督并努力在祂面前凭良心行事的人，不需要特别的启示，凭着建立在神应许之真理上的信心，以及凭着圣灵使他们能在自己身上辨别那些与生命应许相关的恩典，并与他们的灵同证他们是神的儿女，就可以确实确信自己处于恩典的地位，并且会在其中持守直到得救。",
"proof_texts":["1 John 2:3","1 John 3:14,18-21,24","1 John 5:13","Romans 8:16","2 Peter 1:10"],
"notes_en":"Believers can attain assurance through faith in God's promises and the Spirit's witness confirming their graces.",
"notes_zh":"信徒可以借着对神应许的信心和圣灵的见证获得确信。"
},
{
"id":"wlc_081","catechism":"westminster_larger","number":81,
"question_en":"Are all true believers at all times assured of their present being in the estate of grace, and that they shall be saved?",
"question_zh":"所有真信徒是否在任何时候都确信自己目前处于恩典的地位并且会得救？",
"answer_en":"Assurance of grace and salvation not being of the essence of faith, true believers may wait long before they obtain it; and, after the enjoyment thereof, may have it weakened and intermitted, through manifold distempers, sins, temptations, and desertions; yet are they never left without such a presence and support of the Spirit of God as keeps them from sinking into utter despair.",
"answer_zh":"对恩典和救恩的确信并非信心的本质，真信徒可能要等候许久才获得确信；获得确信之后，也可能因种种的困扰、罪、试探和被弃的感觉而使确信减弱和中断；但他们从不会失去神的灵的同在和扶持，以致不至于陷入完全的绝望。",
"proof_texts":["Ephesians 1:13","Isaiah 50:10","Psalm 88","Psalm 77:1-12","Song of Solomon 5:2-3,6","1 John 3:9","Isaiah 54:7-10"],
"notes_en":"Assurance may be delayed or weakened, but the Spirit always preserves believers from utter despair.",
"notes_zh":"确信可能会延迟或减弱，但圣灵始终保守信徒不至于完全绝望。"
},
{
"id":"wlc_082","catechism":"westminster_larger","number":82,
"question_en":"What is the communion in glory which the members of the invisible church have with Christ?",
"question_zh":"无形教会的成员与基督在荣耀中的交通是什么？",
"answer_en":"The communion in glory which the members of the invisible church have with Christ, is in this life, immediately after death, and at last perfected at the resurrection and day of judgment.",
"answer_zh":"无形教会的成员与基督在荣耀中的交通，在今生已有，在死后立即有，最后在复活和审判之日达到完全。",
"proof_texts":["2 Corinthians 3:18","Luke 23:43","1 Thessalonians 4:17","1 John 3:2"],
"notes_en":"Communion with Christ in glory begins in this life, advances at death, and is perfected at the resurrection.",
"notes_zh":"与基督在荣耀中的交通始于今生，在死后推进，在复活时达到完全。"
},
{
"id":"wlc_083","catechism":"westminster_larger","number":83,
"question_en":"What is the communion in glory with Christ which the members of the invisible church enjoy in this life?",
"question_zh":"无形教会的成员今生与基督在荣耀中的交通是什么？",
"answer_en":"The members of the invisible church have communicated to them in this life the firstfruits of glory with Christ, as they are members of him their head, and so in him are interested in that glory which he is fully possessed of; and, as an earnest thereof, enjoy the sense of God's love, peace of conscience, joy in the Holy Ghost, and hope of glory; as, on the contrary, the sense of God's revenging wrath, horror of conscience, and a fearful expectation of judgment, are to the wicked the beginning of the torments which they shall endure after death.",
"answer_zh":"无形教会的成员在今生就得到与基督同享荣耀的初果，因为他们是祂身体的肢体，祂是他们的头，所以在祂里面有份于祂完全拥有的荣耀；并且作为这荣耀的凭据，享受到神之爱的感受、良心的平安、圣灵中的喜乐和荣耀的盼望；相反，恶人所感受到的神报应的忿怒、良心的恐惧和对审判的惧怕等候，是他们死后要忍受之痛苦的开始。",
"proof_texts":["2 Corinthians 1:22","Romans 5:5","Romans 5:1","Romans 14:17","Colossians 1:27","Genesis 4:13","Romans 2:9","Hebrews 10:27","Mark 9:44"],
"notes_en":"Believers enjoy foretastes of glory now — God's love, peace, joy, and hope — while the wicked taste future torment.",
"notes_zh":"信徒现在就享受荣耀的预尝——神的爱、平安、喜乐和盼望——而恶人则预尝将来的痛苦。"
},
{
"id":"wlc_084","catechism":"westminster_larger","number":84,
"question_en":"Shall all men die?",
"question_zh":"所有的人都会死吗？",
"answer_en":"Death being threatened as the wages of sin, it is appointed unto all men once to die; for that all have sinned.",
"answer_zh":"死既被定为罪的工价，所有的人都注定要死一次，因为人人都犯了罪。",
"proof_texts":["Romans 6:23","Hebrews 9:27","Romans 5:12"],
"notes_en":"Physical death is the universal consequence of sin; every person must face it.",
"notes_zh":"肉体的死亡是罪的普遍后果；每个人都必须面对。"
},
{
"id":"wlc_085","catechism":"westminster_larger","number":85,
"question_en":"Death being the wages of sin, why are not the righteous delivered from death, seeing all their sins are forgiven in Christ?",
"question_zh":"死既是罪的工价，义人的罪既已在基督里蒙赦免，为什么他们没有免去死亡？",
"answer_en":"The righteous shall be delivered from death itself at the last day, and even in death are delivered from the sting and curse of it; so that, although they die, yet it is out of God's love, to free them perfectly from sin and misery, and to make them capable of further communion with Christ in glory, which they then enter upon.",
"answer_zh":"义人在末日将从死亡本身被释放，即使在死亡中也脱离了死亡的毒钩和咒诅；所以虽然他们死了，但这是出于神的爱，为要使他们完全脱离罪恶和愁苦，并使他们能够进入与基督在荣耀中更深的交通，他们那时就进入这荣耀。",
"proof_texts":["1 Corinthians 15:26,55-57","Hebrews 2:15","Isaiah 57:1-2","2 Corinthians 5:1,6,8","Philippians 1:23","Luke 23:43"],
"notes_en":"For believers, death is stripped of its sting and becomes the entrance into greater glory with Christ.",
"notes_zh":"对于信徒而言，死亡已失去毒钩，成为进入与基督更大荣耀的入口。"
},
{
"id":"wlc_086","catechism":"westminster_larger","number":86,
"question_en":"What is the communion in glory with Christ, which the members of the invisible church enjoy immediately after death?",
"question_zh":"无形教会的成员死后立即与基督在荣耀中的交通是什么？",
"answer_en":"The communion in glory with Christ, which the members of the invisible church enjoy immediately after death, is, in that their souls are then made perfect in holiness, and received into the highest heavens, where they behold the face of God in light and glory, waiting for the full redemption of their bodies, which even in death continue united to Christ, and rest in their graves as in their beds, till at the last day they be again united to their souls. Whereas the souls of the wicked are at their death cast into hell, where they remain in torments and utter darkness, and their bodies kept in their graves, as in their prisons, till the resurrection and judgment of the great day.",
"answer_zh":"无形教会的成员死后立即与基督在荣耀中的交通是：他们的灵魂那时在圣洁中被成全，被接入至高的天堂，在那里在光明和荣耀中瞻仰神的面，等候他们身体的完全救赎——他们的身体即使在死亡中仍与基督联合，安息在坟墓中如同在床上，直到末日他们再次与灵魂联合。但恶人的灵魂在死时被投入地狱，在痛苦和完全的黑暗中；他们的身体留在坟墓中如同在监狱中，直到大日的复活和审判。",
"proof_texts":["Hebrews 12:23","2 Corinthians 5:1,6,8","Philippians 1:23","Acts 3:21","1 Thessalonians 4:14","Luke 16:23-24","Jude 1:6-7"],
"notes_en":"At death, believers' souls enter heaven in perfect holiness; the wicked's souls go to hell, both awaiting bodily resurrection.",
"notes_zh":"死时信徒的灵魂进入天堂完全成圣；恶人的灵魂下地狱，两者都等候身体的复活。"
},
{
"id":"wlc_087","catechism":"westminster_larger","number":87,
"question_en":"What are we to believe concerning the resurrection?",
"question_zh":"关于复活我们当信什么？",
"answer_en":"We are to believe, that at the last day there shall be a general resurrection of the dead, both of the just and unjust: when they that are then found alive shall in a moment be changed; and the selfsame bodies of the dead which were laid in the grave, being then again united to their souls forever, shall be raised up by the power of Christ. The bodies of the just, by the Spirit of Christ, and by virtue of his resurrection as their head, shall be raised in power, spiritual, incorruptible, and made like to his glorious body; and the bodies of the wicked shall be raised up in dishonor by him, as an offended judge.",
"answer_zh":"我们当信，在末日必有死人的普遍复活，义人和不义的人都要复活：那时还活着的人将在一瞬间改变；死人那埋在坟墓中的同一身体将再次永远与灵魂联合，借着基督的大能被复活。义人的身体借着基督的灵，并因着基督作为他们元首的复活之功效，将在大能中被复活为属灵的、不朽坏的，被改变成与祂荣耀身体相似的；恶人的身体将被基督作为被冒犯的审判者在羞辱中复活。",
"proof_texts":["Acts 24:15","1 Corinthians 15:51-53","1 Thessalonians 4:15-17","John 5:28-29","Philippians 3:21"],
"notes_en":"At the last day, all will be raised bodily: the just to glory like Christ's body, the unjust to dishonor and judgment.",
"notes_zh":"在末日，所有人都将身体复活：义人得荣耀像基督的身体，不义的人受羞辱和审判。"
},
{
"id":"wlc_088","catechism":"westminster_larger","number":88,
"question_en":"What shall immediately follow after the resurrection?",
"question_zh":"复活之后紧接着会发生什么？",
"answer_en":"Immediately after the resurrection shall follow the general and final judgment of angels and men; the day and hour whereof no man knoweth, that all may watch and pray, and be ever ready for the coming of the Lord.",
"answer_zh":"紧接着复活之后，就是对天使和世人的普遍和最终的审判；那日和那时辰没有人知道，好使所有人都警醒祷告，随时预备好主的再来。",
"proof_texts":["2 Peter 2:4","Jude 1:6-7,14-15","Matthew 25:46","Matthew 24:36,42,44"],
"notes_en":"After the resurrection comes the final judgment of all angels and men; its timing is unknown to keep us watchful.",
"notes_zh":"复活之后是对所有天使和世人的最终审判；时间无人知晓，使我们警醒等候。"
},
{
"id":"wlc_089","catechism":"westminster_larger","number":89,
"question_en":"What shall be done to the wicked at the day of judgment?",
"question_zh":"在审判之日恶人将受到什么？",
"answer_en":"At the day of judgment, the wicked shall be set on Christ's left hand, and, upon clear evidence, and full conviction of their own consciences, shall have the fearful but just sentence of condemnation pronounced against them; and thereupon shall be cast out from the favorable presence of God, and the glorious fellowship with Christ, his saints, and all his holy angels, into hell, to be punished with unspeakable torments, both of body and soul, with the devil and his angels forever.",
"answer_zh":"在审判之日，恶人将被放在基督的左边，在明确的证据和他们自己良心充分的定罪之下，将受到可怕但公正的定罪宣判；随后将被逐出神恩惠的同在和基督、祂的圣徒和众圣天使荣耀的团契之外，被投入地狱，与魔鬼和他的使者一同永远受身体和灵魂难以言喻的痛苦。",
"proof_texts":["Matthew 25:33,41-43","Romans 2:15-16","2 Thessalonians 1:8-9","Matthew 25:46","Mark 9:48"],
"notes_en":"The wicked will be condemned to everlasting torment in hell, separated from God and all that is good.",
"notes_zh":"恶人将被定罪在地狱中永受痛苦，与神和一切美善隔绝。"
},
{
"id":"wlc_090","catechism":"westminster_larger","number":90,
"question_en":"What shall be done to the righteous at the day of judgment?",
"question_zh":"在审判之日义人将得到什么？",
"answer_en":"At the day of judgment, the righteous, being caught up to Christ in the clouds, shall be set on his right hand, and there openly acknowledged and acquitted, shall join with him in the judging of reprobate angels and men, and shall be received into heaven, where they shall be fully and forever freed from all sin and misery; filled with inconceivable joys, made perfectly holy and happy both in body and soul, in the company of innumerable saints and holy angels, but especially in the immediate vision and fruition of God the Father, of our Lord Jesus Christ, and of the Holy Spirit, to all eternity. And this is the perfect and full communion, which the members of the invisible church shall enjoy with Christ in glory, at the resurrection and day of judgment.",
"answer_zh":"在审判之日，义人将在云中被提到基督面前，被安置在祂的右边，在那里被公开承认和宣判无罪，将与祂一同审判被弃绝的天使和世人，并被接入天堂，在那里他们将完全并永远地从一切罪恶和愁苦中得释放；充满无法想象的喜乐，身体和灵魂都完全圣洁和幸福，在无数圣徒和圣天使的陪伴中，特别是在直接看见并享受父神、我们的主耶稣基督和圣灵中，直到永永远远。这就是无形教会的成员在复活和审判之日要在荣耀中与基督一同享受的完全的交通。",
"proof_texts":["1 Thessalonians 4:17","Matthew 25:33-34","Matthew 10:32","1 Corinthians 6:2-3","Revelation 14:13","Psalm 16:11","1 John 3:2","1 Thessalonians 4:17-18","Revelation 22:3-5"],
"notes_en":"The righteous will be publicly vindicated, received into heaven, and enjoy perfect communion with the Triune God forever.",
"notes_zh":"义人将被公开宣判无罪，被接入天堂，永远完全地与三一神交通。"
},
{
"id":"wlc_091","catechism":"westminster_larger","number":91,
"question_en":"What is the duty which God requireth of man?",
"question_zh":"神要求人尽什么本分？",
"answer_en":"The duty which God requireth of man, is obedience to his revealed will.",
"answer_zh":"神要求人所尽的本分是顺服祂所启示的旨意。",
"proof_texts":["Romans 12:1-2","Micah 6:8","1 Samuel 15:22","Deuteronomy 29:29"],
"notes_en":"God requires obedience to His revealed will, which is the whole duty of man.",
"notes_zh":"神要求人顺服祂所启示的旨意，这是人的全部本分。"
},
{
"id":"wlc_092","catechism":"westminster_larger","number":92,
"question_en":"What did God at first reveal unto man as the rule of his obedience?",
"question_zh":"神起初向人启示什么作为其顺服的准则？",
"answer_en":"The rule of obedience revealed to Adam in the estate of innocence, and to all mankind in him, was the moral law.",
"answer_zh":"在无罪状态中向亚当并在他里面向全人类启示的顺服准则，就是道德律。",
"proof_texts":["Genesis 1:26-27","Romans 2:14-15","Romans 10:5"],
"notes_en":"The moral law was originally revealed to Adam and written on the hearts of all humanity as the rule of obedience.",
"notes_zh":"道德律最初向亚当启示，也写在全人类心中，作为顺服的准则。"
},
{
"id":"wlc_093","catechism":"westminster_larger","number":93,
"question_en":"What is the moral law?",
"question_zh":"什么是道德律？",
"answer_en":"The moral law is the declaration of the will of God to mankind, directing and binding everyone to personal, perfect, and perpetual conformity and obedience thereunto, in the frame and disposition of the whole man, soul and body, and in performance of all those duties of holiness and righteousness which he oweth to God and man: promising life upon the fulfilling, and threatening death upon the breach of it.",
"answer_zh":"道德律是神向人类宣告祂的旨意，指示并约束每个人在全人——灵魂和身体——的状态和倾向上，以及在他对神和人所当尽的一切圣洁和公义的本分上，都要个人地、完全地、持续地遵从和顺服；以生命为遵行的应许，以死亡为违犯的刑罚。",
"proof_texts":["Deuteronomy 5:1-3,31,33","Luke 10:26-27","Romans 10:5","Galatians 3:10,12","1 Thessalonians 5:23"],
"notes_en":"The moral law requires perfect, personal, and perpetual obedience of the whole person, promising life and threatening death.",
"notes_zh":"道德律要求全人完全的、个人的、持续的顺服，以生命为应许，以死亡为刑罚。"
},
{
"id":"wlc_094","catechism":"westminster_larger","number":94,
"question_en":"Is there any use of the moral law to man since the fall?",
"question_zh":"堕落后道德律对人还有什么用处？",
"answer_en":"Although no man, since the fall, can attain to righteousness and life by the moral law; yet there is great use thereof, as well common to all men, as peculiar either to the unregenerate, or the regenerate.",
"answer_zh":"虽然堕落后没有人能借道德律获得公义和生命，但道德律仍有极大的用处，既有对所有人共同的用处，也有特别针对未重生之人或已重生之人的用处。",
"proof_texts":["Romans 8:3","Galatians 3:21-22","1 Timothy 1:8"],
"notes_en":"Though the moral law cannot save fallen sinners, it serves important purposes for both the unregenerate and regenerate.",
"notes_zh":"虽然道德律不能拯救堕落的罪人，但对未重生和已重生的人都有重要用处。"
},
{
"id":"wlc_095","catechism":"westminster_larger","number":95,
"question_en":"Of what use is the moral law to all men?",
"question_zh":"道德律对所有人有什么用处？",
"answer_en":"The moral law is of use to all men, to inform them of the holy nature and will of God, and of their duty, binding them to walk accordingly; to convince them of their disability to keep it, and of the sinful pollution of their nature, hearts, and lives: to humble them in the sense of their sin and misery, and thereby help them to a clearer sight of the need they have of Christ, and of the perfection of his obedience.",
"answer_zh":"道德律对所有人的用处在于：告诉他们神圣洁的本性和旨意，以及他们的本分，约束他们照着行；使他们知道自己无力遵守，认识自己本性、内心和生活的罪污；在对罪和愁苦的认识中谦卑他们，从而帮助他们更清楚地看到自己对基督的需要以及祂顺服的完全。",
"proof_texts":["Leviticus 11:44-45","Leviticus 20:7-8","Romans 7:12","Romans 3:20","Romans 7:9,13","Galatians 3:21-22","Romans 10:4"],
"notes_en":"The moral law reveals God's holiness, exposes our sinfulness, and drives us to see our need for Christ.",
"notes_zh":"道德律显明神的圣洁，暴露我们的罪性，驱使我们看到对基督的需要。"
},
{
"id":"wlc_096","catechism":"westminster_larger","number":96,
"question_en":"What particular use is there of the moral law to unregenerate men?",
"question_zh":"道德律对未重生之人有什么特别的用处？",
"answer_en":"The moral law is of use to unregenerate men, to awaken their consciences to flee from wrath to come, and to drive them to Christ; or, upon their continuance in the estate and way of sin, to leave them inexcusable, and under the curse thereof.",
"answer_zh":"道德律对未重生之人的用处在于：唤醒他们的良心，使他们逃避将来的忿怒，驱使他们归向基督；或者，若他们继续处在罪的境况和道路上，使他们无可推诿，在咒诅之下。",
"proof_texts":["1 Timothy 1:9-10","Galatians 3:24","Romans 1:20","Romans 2:15","Galatians 3:10"],
"notes_en":"For the unregenerate, the law awakens conscience and drives them to Christ, or leaves them without excuse under its curse.",
"notes_zh":"对于未重生之人，律法唤醒良心并驱使他们归向基督，或使他们在咒诅下无可推诿。"
},
{
"id":"wlc_097","catechism":"westminster_larger","number":97,
"question_en":"What special use is there of the moral law to the regenerate?",
"question_zh":"道德律对已重生之人有什么特别的用处？",
"answer_en":"Although they that are regenerate, and believe in Christ, be delivered from the moral law as a covenant of works, so as thereby they are neither justified nor condemned; yet, besides the general uses thereof common to them with all men, it is of special use, to show them how much they are bound to Christ for his fulfilling it, and enduring the curse thereof in their stead and for their good; and thereby to provoke them to more thankfulness, and to express the same in their greater care to conform themselves thereunto as the rule of their obedience.",
"answer_zh":"虽然已重生并信靠基督的人已从道德律作为行为之约中被释放，不再因此被称义或被定罪；但除了与所有人共同的一般用处之外，道德律对他们还有特别的用处：向他们显明他们多么亏欠基督，因为祂代替他们并为他们的益处成全了道德律，承受了道德律的咒诅；从而激发他们更加感恩，并以更大的谨慎使自己遵从道德律作为他们顺服的准则来表达这份感恩。",
"proof_texts":["Galatians 4:4-5","Romans 6:14","Romans 7:4,6","Romans 3:20","Romans 8:1,33","Romans 7:24-25","Luke 1:68-69,74-75","Colossians 1:12-14","Romans 7:22","Titus 2:11-14"],
"notes_en":"For believers, the law shows their debt to Christ and motivates thankful obedience as a rule of life, not a means of salvation.",
"notes_zh":"对信徒而言，律法显明他们对基督的亏欠，激发感恩的顺服作为生活准则，而非得救途径。"
},
{
"id":"wlc_098","catechism":"westminster_larger","number":98,
"question_en":"Where is the moral law summarily comprehended?",
"question_zh":"道德律概括在哪里？",
"answer_en":"The moral law is summarily comprehended in the ten commandments, which were delivered by the voice of God upon mount Sinai, and written by him in two tables of stone; and are recorded in the twentieth chapter of Exodus. The four first commandments containing our duty to God, and the other six our duty to man.",
"answer_zh":"道德律概括在十条诫命中，这十条诫命是神在西奈山上亲口传授，由祂亲自写在两块石版上的，记载在出埃及记第二十章。前四条诫命包含我们对神的本分，后六条包含我们对人的本分。",
"proof_texts":["Deuteronomy 10:4","Exodus 34:1-4","Matthew 22:37-40","Exodus 20:1-17"],
"notes_en":"The Ten Commandments summarize the moral law: the first four govern our duty to God, the last six our duty to man.",
"notes_zh":"十诫概括了道德律：前四条规定我们对神的本分，后六条规定我们对人的本分。"
},
{
"id":"wlc_099","catechism":"westminster_larger","number":99,
"question_en":"What rules are to be observed for the right understanding of the ten commandments?",
"question_zh":"为正确理解十诫，应遵守哪些规则？",
"answer_en":"For the right understanding of the ten commandments, these rules are to be observed: 1. That the law is perfect, and bindeth everyone to full conformity in the whole man unto the righteousness thereof, and unto entire obedience forever; so as to require the utmost perfection of every duty, and to forbid the least degree of every sin. 2. That it is spiritual, and so reacheth the understanding, will, affections, and all other powers of the soul; as well as words, works, and gestures. 3. That one and the same thing, in divers respects, is required or forbidden in several commandments. 4. That as, where a duty is commanded, the contrary sin is forbidden; and, where a sin is forbidden, the contrary duty is commanded: so, where a promise is annexed, the contrary threatening is included; and, where a threatening is annexed, the contrary promise is included. 5. That what God forbids, is at no time to be done; what he commands, is always our duty; and yet every particular duty is not to be done at all times. 6. That under one sin or duty, all of the same kind are forbidden or commanded; together with all the causes, means, occasions, and appearances thereof, and provocations thereunto. 7. That what is forbidden or commanded to ourselves, we are bound, according to our places, to endeavor that it may be avoided or performed by others, according to the duty of their places. 8. That in what is commanded to others, we are bound, according to our places and callings, to be helpful to them; and to take heed of partaking with others in what is forbidden them.",
"answer_zh":"为正确理解十诫，应遵守这些规则：一、律法是完全的，约束每个人在全人的公义上完全遵从，永远完全顺服；要求每一本分的最高完全，禁止每一罪的最小程度。二、律法是属灵的，因此涉及理解力、意志、感情和灵魂的一切能力，以及言语、行为和举止。三、同一件事在不同方面可能在几条诫命中被要求或被禁止。四、凡命令一项本分的地方，相反的罪就被禁止；凡禁止一项罪的地方，相反的本分就被命令。凡附有应许的地方，相反的刑罚就包含在内；凡附有刑罚的地方，相反的应许就包含在内。五、凡神所禁止的，在任何时候都不可行；凡祂所命令的，常常是我们的本分；但每一特定的本分并非在任何时候都要行。六、在一项罪或本分之下，同类的一切罪或本分都被禁止或命令；连同其一切原因、途径、场合和表现，以及引诱。七、凡向我们自己禁止或命令的，我们有责任按照我们的地位，努力使别人也按照他们的地位和本分来避免或遵行。八、凡向别人所命令的，我们有责任按照我们的地位和呼召帮助他们；并且要谨慎，不要与别人一同参与向他们所禁止的事。",
"proof_texts":["Psalm 19:7","James 2:10","Matthew 5:21-22","Colossians 3:5","1 Thessalonians 5:22","Matthew 5:21-48","Deuteronomy 6:6-7","Ephesians 5:11"],
"notes_en":"Eight rules guide proper interpretation of the Ten Commandments, revealing their comprehensive spiritual scope.",
"notes_zh":"八条规则指导十诫的正确解释，揭示它们全面的属灵范围。"
},
{
"id":"wlc_100","catechism":"westminster_larger","number":100,
"question_en":"What special things are we to consider in the ten commandments?",
"question_zh":"在十诫中我们要特别考虑什么？",
"answer_en":"We are to consider, in the ten commandments, the preface, the substance of the commandments themselves, and several reasons annexed to some of them, the more to enforce them.",
"answer_zh":"在十诫中我们要考虑序言、诫命本身的实质内容，以及附在某些诫命上的几个理由，为的是更加强调它们。",
"proof_texts":["Exodus 20:1-2","Ephesians 6:2-3","Deuteronomy 5:6"],
"notes_en":"The Ten Commandments include a preface, the commandments themselves, and appended reasons that reinforce certain commands.",
"notes_zh":"十诫包括序言、诫命本身和附加的理由，以加强某些诫命的力度。"
}
]

with open('/tmp/wlc_batch2.json', 'w', encoding='utf-8') as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)
print(f"Batch 2: {len(questions)} questions written")
