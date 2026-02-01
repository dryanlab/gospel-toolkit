import Foundation

struct CatechismQuestion: Codable, Identifiable, Hashable {
    let id: String
    let catechism: String
    let number: Int
    let questionZh: String
    let questionEn: String
    let answerZh: String
    let answerEn: String
    let proofTexts: [String]
    let notesZh: String
    let notesEn: String

    enum CodingKeys: String, CodingKey {
        case id, catechism, number
        case questionZh = "question_zh"
        case questionEn = "question_en"
        case answerZh = "answer_zh"
        case answerEn = "answer_en"
        case proofTexts = "proof_texts"
        case notesZh = "notes_zh"
        case notesEn = "notes_en"
    }
}

enum CatechismType: String, CaseIterable, Identifiable {
    case westminsterShorter = "westminster_shorter"
    case westminsterLarger = "westminster_larger"
    case heidelberg = "heidelberg"

    var id: String { rawValue }

    var nameZh: String {
        switch self {
        case .westminsterShorter: return "威斯敏斯特小要理问答"
        case .westminsterLarger: return "威斯敏斯特大要理问答"
        case .heidelberg: return "海德堡要理问答"
        }
    }

    var nameEn: String {
        switch self {
        case .westminsterShorter: return "Westminster Shorter Catechism"
        case .westminsterLarger: return "Westminster Larger Catechism"
        case .heidelberg: return "Heidelberg Catechism"
        }
    }

    var abbreviation: String {
        switch self {
        case .westminsterShorter: return "WSC"
        case .westminsterLarger: return "WLC"
        case .heidelberg: return "HC"
        }
    }

    var totalQuestions: Int {
        switch self {
        case .westminsterShorter: return 107
        case .westminsterLarger: return 196
        case .heidelberg: return 129
        }
    }

    var jsonFileName: String {
        switch self {
        case .westminsterShorter: return "catechism_wsc"
        case .westminsterLarger: return "catechism_wlc"
        case .heidelberg: return "catechism_hc"
        }
    }
}
