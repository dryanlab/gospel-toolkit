import Foundation

enum SearchResultType: String {
    case question = "福音问答"
    case catechism = "要理问答"
    case apologetics = "护教学"
    case book = "经典著作"
}

struct SearchResult: Identifiable, Hashable {
    let id: String
    let type: String
    let titleZh: String
    let titleEn: String
    let snippetZh: String
    let snippetEn: String
}

@MainActor
class SearchService: ObservableObject {
    @Published var results: [SearchResult] = []
    @Published var isSearching = false

    func search(query: String, dataService: DataService) {
        guard !query.trimmingCharacters(in: .whitespaces).isEmpty else {
            results = []
            return
        }
        isSearching = true
        let q = query.lowercased()

        var found: [SearchResult] = []

        // Search questions
        for item in dataService.questions {
            if matches(q, in: [item.questionZh, item.questionEn, item.shortAnswerZh, item.shortAnswerEn, item.detailedAnswerZh, item.detailedAnswerEn]) {
                found.append(SearchResult(id: item.id, type: SearchResultType.question.rawValue, titleZh: item.questionZh, titleEn: item.questionEn, snippetZh: item.shortAnswerZh, snippetEn: item.shortAnswerEn))
            }
        }

        // Search catechisms
        for (_, questions) in dataService.catechisms {
            for item in questions {
                if matches(q, in: [item.questionZh, item.questionEn, item.answerZh, item.answerEn]) {
                    found.append(SearchResult(id: item.id, type: SearchResultType.catechism.rawValue, titleZh: item.questionZh, titleEn: item.questionEn, snippetZh: item.answerZh, snippetEn: item.answerEn))
                }
            }
        }

        // Search apologetics
        for item in dataService.apologeticsTopics {
            if matches(q, in: [item.topicZh, item.topicEn, item.coreArgumentZh, item.coreArgumentEn]) {
                found.append(SearchResult(id: item.id, type: SearchResultType.apologetics.rawValue, titleZh: item.topicZh, titleEn: item.topicEn, snippetZh: String(item.coreArgumentZh.prefix(100)), snippetEn: String(item.coreArgumentEn.prefix(100))))
            }
        }

        // Search books
        for item in dataService.books {
            if matches(q, in: [item.titleZh, item.titleEn, item.authorZh, item.authorEn, item.summaryZh, item.summaryEn]) {
                found.append(SearchResult(id: item.id, type: SearchResultType.book.rawValue, titleZh: item.titleZh, titleEn: item.titleEn, snippetZh: String(item.summaryZh.prefix(100)), snippetEn: String(item.summaryEn.prefix(100))))
            }
        }

        results = found
        isSearching = false
    }

    private func matches(_ query: String, in texts: [String]) -> Bool {
        texts.contains { $0.lowercased().contains(query) }
    }
}
