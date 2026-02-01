import Foundation

struct Objection: Codable, Hashable {
    let objectionZh: String
    let objectionEn: String
    let responseZh: String
    let responseEn: String

    enum CodingKeys: String, CodingKey {
        case objectionZh = "objection_zh"
        case objectionEn = "objection_en"
        case responseZh = "response_zh"
        case responseEn = "response_en"
    }
}

struct ApologeticsTopic: Codable, Identifiable, Hashable {
    let id: String
    let targetWorldview: String
    let topicZh: String
    let topicEn: String
    let coreArgumentZh: String
    let coreArgumentEn: String
    let commonObjections: [Objection]
    let bibleVerses: [String]
    let recommendedResources: [String]
    let tags: [String]

    enum CodingKeys: String, CodingKey {
        case id, tags
        case targetWorldview = "target_worldview"
        case topicZh = "topic_zh"
        case topicEn = "topic_en"
        case coreArgumentZh = "core_argument_zh"
        case coreArgumentEn = "core_argument_en"
        case commonObjections = "common_objections"
        case bibleVerses = "bible_verses"
        case recommendedResources = "recommended_resources"
    }
}

enum Worldview: String, CaseIterable, Identifiable {
    case atheism
    case islam
    case buddhism
    case cults
    case secularism

    var id: String { rawValue }

    var nameZh: String {
        switch self {
        case .atheism: return "无神论/不可知论"
        case .islam: return "伊斯兰教"
        case .buddhism: return "佛教/东方宗教"
        case .cults: return "异端辨别"
        case .secularism: return "世俗主义/相对主义"
        }
    }

    var nameEn: String {
        switch self {
        case .atheism: return "Atheism / Agnosticism"
        case .islam: return "Islam"
        case .buddhism: return "Buddhism / Eastern Religions"
        case .cults: return "Cults & Heresies"
        case .secularism: return "Secularism / Relativism"
        }
    }

    var icon: String {
        switch self {
        case .atheism: return "questionmark.circle"
        case .islam: return "moon.stars"
        case .buddhism: return "leaf"
        case .cults: return "exclamationmark.triangle"
        case .secularism: return "globe"
        }
    }
}
