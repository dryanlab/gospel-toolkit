import Foundation

struct Question: Codable, Identifiable, Hashable {
    let id: String
    let category: String
    let questionZh: String
    let questionEn: String
    let shortAnswerZh: String
    let shortAnswerEn: String
    let detailedAnswerZh: String
    let detailedAnswerEn: String
    let bibleVerses: [String]
    let relatedReadings: [String]
    let tags: [String]

    enum CodingKeys: String, CodingKey {
        case id, category, tags
        case questionZh = "question_zh"
        case questionEn = "question_en"
        case shortAnswerZh = "short_answer_zh"
        case shortAnswerEn = "short_answer_en"
        case detailedAnswerZh = "detailed_answer_zh"
        case detailedAnswerEn = "detailed_answer_en"
        case bibleVerses = "bible_verses"
        case relatedReadings = "related_readings"
    }
}

enum QuestionCategory: String, CaseIterable, Identifiable {
    case existenceOfGod = "existence_of_god"
    case problemOfEvil = "problem_of_evil"
    case bibleReliability = "bible_reliability"
    case scienceAndFaith = "science_and_faith"
    case uniquenessOfJesus = "uniqueness_of_jesus"
    case sinAndSalvation = "sin_and_salvation"
    case lifeAfterDeath = "life_after_death"
    case moralFoundation = "moral_foundation"

    var id: String { rawValue }

    var nameZh: String {
        switch self {
        case .existenceOfGod: return "上帝的存在"
        case .problemOfEvil: return "苦难问题"
        case .bibleReliability: return "圣经可靠性"
        case .scienceAndFaith: return "科学与信仰"
        case .uniquenessOfJesus: return "耶稣的独特性"
        case .sinAndSalvation: return "罪与救恩"
        case .lifeAfterDeath: return "死后的生命"
        case .moralFoundation: return "道德基础"
        }
    }

    var nameEn: String {
        switch self {
        case .existenceOfGod: return "Does God Exist?"
        case .problemOfEvil: return "Problem of Evil"
        case .bibleReliability: return "Reliability of the Bible"
        case .scienceAndFaith: return "Science & Faith"
        case .uniquenessOfJesus: return "Uniqueness of Jesus"
        case .sinAndSalvation: return "Sin & Salvation"
        case .lifeAfterDeath: return "Life After Death"
        case .moralFoundation: return "Moral Foundation"
        }
    }

    var icon: String {
        switch self {
        case .existenceOfGod: return "eye"
        case .problemOfEvil: return "cloud.bolt"
        case .bibleReliability: return "book.closed"
        case .scienceAndFaith: return "atom"
        case .uniquenessOfJesus: return "cross"
        case .sinAndSalvation: return "heart.circle"
        case .lifeAfterDeath: return "infinity"
        case .moralFoundation: return "scale.3d"
        }
    }
}
