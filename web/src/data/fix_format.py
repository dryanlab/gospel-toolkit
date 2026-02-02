#!/usr/bin/env python3
"""Fix tags and resources in apologetics.json to use English format consistently."""
import json
import re

def fix_tags(tags):
    """Convert Chinese tags to English kebab-case."""
    tag_map = {
        '本体论证': 'ontological-argument',
        '阿尔文·普兰丁格': 'plantinga',
        '安瑟尔谟': 'anselm',
        '必要存在': 'necessary-existence',
        '模态逻辑': 'modal-logic',
        '先验论证': 'transcendental-argument',
        '理性论证': 'argument-from-reason',
        'C.S.路易斯': 'cs-lewis',
        '普兰丁格EAAN': 'EAAN',
        '自然主义': 'naturalism',
        '认知可靠性': 'cognitive-reliability',
        '心灵哲学': 'philosophy-of-mind',
        '美的论证': 'argument-from-beauty',
        '客观美': 'objective-beauty',
        '审美体验': 'aesthetic-experience',
        '数学之美': 'mathematical-beauty',
        '自然美学': 'natural-aesthetics',
        '创造美学': 'creation-aesthetics',
        '宗教经验': 'religious-experience',
        '斯温伯恩': 'swinburne',
        '威廉·詹姆斯': 'william-james',
        '神秘主义': 'mysticism',
        '感知上帝': 'perceiving-god',
        '经验证据': 'experiential-evidence',
        '偶然性论证': 'contingency-argument',
        '莱布尼茨': 'leibniz',
        '充足理由律': 'principle-of-sufficient-reason',
        '宇宙论论证': 'cosmological-argument',
        '形而上学依赖': 'metaphysical-dependence',
        '前设护教学': 'presuppositionalism',
        '范泰尔': 'van-til',
        '巴恩森': 'bahnsen',
        '认识论': 'epistemology',
        '世界观': 'worldview',
        'TAG': 'TAG',
        '逻辑定律': 'laws-of-logic',
        '辩论': 'debate',
        '理性': 'reason',
        '逻辑基础': 'logic-foundations',
        '科学哲学': 'philosophy-of-science',
        '道德基础': 'moral-foundations',
        '先验条件': 'preconditions',
        '内在批判': 'internal-critique',
        '薛华': 'schaeffer',
        '形而上学': 'metaphysics',
        '哲学方法': 'philosophical-method',
        '循环论证': 'circular-reasoning',
        '基础主义': 'foundationalism',
        '一致性理论': 'coherentism',
        '中性性': 'neutrality',
        '古典护教学': 'classical-apologetics',
        '视角论': 'perspectivalism',
        '融合方法': 'integrative-method',
        '证据': 'evidence',
        '方法论': 'methodology',
        '历史证据': 'historical-evidence',
        '约瑟夫': 'josephus',
        '塔西佗': 'tacitus',
        '史学研究': 'historiography',
        '基督教起源': 'christian-origins',
        '三难论证': 'trilemma',
        '基督神性': 'deity-of-christ',
        '逻辑论证': 'logical-argument',
        '历史耶稣': 'historical-jesus',
        '空坟墓': 'empty-tomb',
        '复活证据': 'resurrection-evidence',
        '威廉·克雷格': 'william-lane-craig',
        '历史论证': 'historical-argument',
        '初期教会': 'early-church',
        '门徒转变': 'disciple-transformation',
        '殉道见证': 'martyrdom-witness',
        '复活显现': 'resurrection-appearances',
        '早期教会': 'early-church',
        '保罗归信': 'paul-conversion',
        '大马士革经历': 'damascus-experience',
        '逼迫者转变': 'persecutor-transformed',
        '使徒见证': 'apostolic-witness',
        '罗德尼·斯塔克': 'rodney-stark',
        '社会学分析': 'sociological-analysis',
        '基督教传播': 'christian-spread',
        '教会增长': 'church-growth',
    }
    result = []
    for t in tags:
        if t in tag_map:
            result.append(tag_map[t])
        elif re.search(r'[\u4e00-\u9fff]', t):
            # Unknown Chinese tag - try to transliterate
            result.append(t)  # Keep as-is, will flag
        else:
            result.append(t)
    return result

def fix_resources(resources):
    """Convert Chinese-format resources to English format."""
    res_map = {
        'Alvin Plantinga, 《上帝、自由与恶的本质》': "Alvin Plantinga, 'God, Freedom, and Evil'",
        'Anselm of Canterbury, 《申辩》': "Anselm of Canterbury, 'Proslogion'",
        'William Lane Craig, 《合理信仰：基督教真理与护教学》': "William Lane Craig, 'Reasonable Faith'",
        'Charles Hartshorne, 《安瑟尔谟的发现》': "Charles Hartshorne, 'Anselm's Discovery'",
        'Norman Malcolm, 《安瑟尔谟的本体论证》': "Norman Malcolm, 'Anselm's Ontological Arguments'",
        'C.S. Lewis, 《奇迹》': "C.S. Lewis, 'Miracles'",
        'Alvin Plantinga, 《保证：基督教信仰的知识地位》': "Alvin Plantinga, 'Warranted Christian Belief'",
        'Victor Reppert, 《C.S.路易斯的危险观念》': "Victor Reppert, 'C.S. Lewis's Dangerous Idea'",
        'William Hasker, 《突现二元论》': "William Hasker, 'The Emergent Self'",
        'Thomas Nagel, 《心灵与宇宙》': "Thomas Nagel, 'Mind and Cosmos'",
        'Francis Schaeffer, 《他在那里，他并不沉默》': "Francis Schaeffer, 'He Is There and He Is Not Silent'",
        'Hans Urs von Balthasar, 《荣耀：神学美学》': "Hans Urs von Balthasar, 'The Glory of the Lord'",
        'Elaine Scarry, 《论美》': "Elaine Scarry, 'On Beauty and Being Just'",
        'Umberto Eco, 《美的历史》': "Umberto Eco, 'History of Beauty'",
        'Patrick Sherry, 《精神与美》': "Patrick Sherry, 'Spirit and Beauty'",
        'Richard Swinburne, 《上帝存在吗？》': "Richard Swinburne, 'The Existence of God'",
        'William James, 《宗教经验种种》': "William James, 'The Varieties of Religious Experience'",
        'Caroline Franks Davis, 《宗教经验的明证性》': "Caroline Franks Davis, 'The Evidential Force of Religious Experience'",
        'William Alston, 《感知上帝》': "William Alston, 'Perceiving God'",
        'Gary Gutting, 《宗教信仰与宗教怀疑》': "Gary Gutting, 'Religious Belief and Religious Skepticism'",
        'Alexander Pruss, 《充足理由原理：新的论证》': "Alexander Pruss, 'The Principle of Sufficient Reason'",
        'Richard Taylor, 《形而上学》': "Richard Taylor, 'Metaphysics'",
        'William Rowe, 《宇宙论论证》': "William Rowe, 'The Cosmological Argument'",
        'Joshua Rasmussen, 《必要存在》': "Joshua Rasmussen, 'Necessary Existence'",
        'Edward Feser, 《最后的迷信》': "Edward Feser, 'The Last Superstition'",
        '《基督教护教学》- 范泰尔 (A Christian Theory of Knowledge - Cornelius Van Til)': "Cornelius Van Til, 'A Christian Theory of Knowledge'",
        '《范泰尔护教学》- 巴恩森 (Van Til\'s Apologetic - Greg Bahnsen)': "Greg Bahnsen, 'Van Til's Apologetic'",
        '《前设护教学导论》- 约翰·弗雷姆 (Apologetics to the Glory of God - John Frame)': "John Frame, 'Apologetics to the Glory of God'",
        '《The Great Debate: Does God Exist?》- Bahnsen vs Stein辩论录音': "Greg Bahnsen vs Gordon Stein, 'The Great Debate: Does God Exist?' (audio)",
        '《Presuppositional Apologetics Stated and Defended》- Greg Bahnsen': "Greg Bahnsen, 'Presuppositional Apologetics: Stated and Defended'",
        '《The Transcendental Argument for God\'s Existence》- Michael Butler': "Michael Butler, 'The Transcendental Argument for God's Existence'",
        '《Doctrine of the Knowledge of God》- Cornelius Van Til': "Cornelius Van Til, 'The Defense of the Faith'",
        '《Apologetics to the Glory of God》- John Frame': "John Frame, 'Apologetics to the Glory of God'",
        '《Without Excuse: Scripture and the Rational Mind》- Michael Butler': "Michael Butler, 'The Transcendental Argument for God's Existence'",
        '《理性的逃避》- 薛华 (Escape from Reason - Francis Schaeffer)': "Francis Schaeffer, 'Escape from Reason'",
        '《基督教世界观》- 詹姆斯·赛尔 (The Universe Next Door - James Sire)': "James Sire, 'The Universe Next Door'",
        '《世界观分析与评判》- 詹姆斯·安德森 (What\'s Your Worldview? - James Anderson)': "James Anderson, 'What's Your Worldview?'",
        '《A Reformed Epistemology》- John Frame': "John Frame, 'The Doctrine of the Knowledge of God'",
        '《The Doctrine of the Knowledge of God》- John Frame': "John Frame, 'The Doctrine of the Knowledge of God'",
        '《Presuppositional Apologetics: An Introduction》- K. Scott Oliphint': "K. Scott Oliphint, 'Covenantal Apologetics'",
        '《护教学概论》- 约翰·弗雷姆 (Apologetics to the Glory of God - John Frame)': "John Frame, 'Apologetics to the Glory of God'",
        '《融合式护教学》- K. Scott Oliphint (Covenantal Apologetics - K. Scott Oliphint)': "K. Scott Oliphint, 'Covenantal Apologetics'",
        '《古典护教学手册》- 诺曼·盖斯勒 (Baker Encyclopedia of Christian Apologetics - Norman Geisler)': "Norman Geisler, 'Baker Encyclopedia of Christian Apologetics'",
        '《耶稣与史学家的眼光》- 克雷格·A·埃文斯': "Craig A. Evans, 'Jesus and His World'",
        '《历史中的耶稣》- 约翰·P·迈尔': "John P. Meier, 'A Marginal Jew'",
        '《耶稣传》- 约瑟夫·拉辛格（本笃十六世）': "Joseph Ratzinger (Benedict XVI), 'Jesus of Nazareth'",
        '《返朴归真》- C.S.路易斯': "C.S. Lewis, 'Mere Christianity'",
        '《基督的格位》- 约翰·斯托特': "John Stott, 'Basic Christianity'",
        '《谁是耶稣》- N.T.赖特': "N.T. Wright, 'Simply Jesus'",
        '《合理的信仰》- 威廉·莱恩·克雷格': "William Lane Craig, 'Reasonable Faith'",
        '《复活的儿子》- N.T.赖特': "N.T. Wright, 'The Resurrection of the Son of God'",
        '《复活的案例》- 李·斯特博': "Lee Strobel, 'The Case for Christ'",
        '《复活的见证》- 理查德·布克汉姆': "Richard Bauckham, 'Jesus and the Eyewitnesses'",
        '《门徒的证言》- 理查德·鲍克汉姆': "Richard Bauckham, 'Jesus and the Eyewitnesses'",
        '《复活的历史论证》- 加里·哈伯马斯': "Gary Habermas, 'The Case for the Resurrection of Jesus'",
        '《保罗的归信》- 艾伦·塞格尔': "Alan Segal, 'Paul the Convert'",
        '《保罗传》- N.T.赖特': "N.T. Wright, 'Paul: A Biography'",
        '《大马士革路上》- 理查德·朗内克': "Richard Longenecker, 'The Road from Damascus'",
        '《基督教的兴起》- 罗德尼·斯塔克': "Rodney Stark, 'The Rise of Christianity'",
        '《早期基督教的传播》- 迈克尔·格林': "Michael Green, 'Evangelism in the Early Church'",
        '《基督教与古典文化》- 查尔斯·诺里斯·科克伦': "Charles Norris Cochrane, 'Christianity and Classical Culture'",
    }
    
    result = []
    for r in resources:
        if r in res_map:
            result.append(res_map[r])
        else:
            # Clean up mixed format like "John Lennox, Can Science Explain Everything? 约翰·列诺克斯《科学能解释一切吗？》"
            if re.search(r'[\u4e00-\u9fff]', r) or '《' in r:
                # Try to extract English part
                english_part = re.sub(r'[\u4e00-\u9fff《》]+.*$', '', r).strip()
                if english_part and len(english_part) > 10:
                    result.append(english_part)
                else:
                    result.append(r)  # Keep as-is
            else:
                result.append(r)
    return result

def main():
    path = '/Users/suyan/clawd/projects/gospel-app/web/src/data/apologetics.json'
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    for item in data:
        item['tags'] = fix_tags(item.get('tags', []))
        item['recommended_resources'] = fix_resources(item.get('recommended_resources', []))
    
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    # Verify
    issues = 0
    for item in data:
        for t in item.get('tags', []):
            if re.search(r'[\u4e00-\u9fff]', t):
                print(f"  {item['id']}: Chinese tag: {t}")
                issues += 1
        for r in item.get('recommended_resources', []):
            if '《' in r or '》' in r or re.search(r'[\u4e00-\u9fff]', r):
                print(f"  {item['id']}: Chinese resource: {r[:60]}")
                issues += 1
    
    print(f"Fixed. Remaining issues: {issues}")

if __name__ == '__main__':
    main()
