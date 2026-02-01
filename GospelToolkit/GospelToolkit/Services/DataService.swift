import Foundation

@MainActor
class DataService: ObservableObject {
    static let shared = DataService()

    @Published var questions: [Question] = []
    @Published var catechisms: [CatechismType: [CatechismQuestion]] = [:]
    @Published var apologeticsTopics: [ApologeticsTopic] = []
    @Published var books: [Book] = []
    @Published var isLoaded = false

    private init() {
        loadAllData()
    }

    func loadAllData() {
        questions = loadJSON("qa_questions") ?? []
        let wsc: [CatechismQuestion] = loadJSON("catechism_wsc") ?? []
        catechisms[.westminsterShorter] = wsc
        apologeticsTopics = loadJSON("apologetics") ?? []
        books = loadJSON("books") ?? []
        isLoaded = true
    }

    private func loadJSON<T: Decodable>(_ name: String) -> T? {
        guard let url = Bundle.main.url(forResource: name, withExtension: "json") else {
            print("⚠️ Could not find \(name).json")
            return nil
        }
        do {
            let data = try Data(contentsOf: url)
            let decoder = JSONDecoder()
            return try decoder.decode(T.self, from: data)
        } catch {
            print("⚠️ Error decoding \(name).json: \(error)")
            return nil
        }
    }

    func questions(for category: QuestionCategory) -> [Question] {
        questions.filter { $0.category == category.rawValue }
    }

    func apologetics(for worldview: Worldview) -> [ApologeticsTopic] {
        apologeticsTopics.filter { $0.targetWorldview == worldview.rawValue }
    }

    func catechismQuestions(for type: CatechismType) -> [CatechismQuestion] {
        catechisms[type] ?? []
    }
}
