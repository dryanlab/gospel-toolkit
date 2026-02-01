import Foundation

@MainActor
class QAViewModel: ObservableObject {
    @Published var selectedCategory: QuestionCategory?
    @Published var filteredQuestions: [Question] = []

    func loadQuestions(for category: QuestionCategory, from dataService: DataService) {
        selectedCategory = category
        filteredQuestions = dataService.questions(for: category)
    }

    func allCategories() -> [QuestionCategory] {
        QuestionCategory.allCases
    }
}
