import Foundation

@MainActor
class CatechismViewModel: ObservableObject {
    @Published var selectedType: CatechismType = .westminsterShorter
    @Published var questions: [CatechismQuestion] = []
    @Published var currentFlashCardIndex: Int = 0

    func loadQuestions(from dataService: DataService) {
        questions = dataService.catechismQuestions(for: selectedType)
    }

    func nextCard() {
        if currentFlashCardIndex < questions.count - 1 {
            currentFlashCardIndex += 1
        }
    }

    func previousCard() {
        if currentFlashCardIndex > 0 {
            currentFlashCardIndex -= 1
        }
    }

    var currentQuestion: CatechismQuestion? {
        guard !questions.isEmpty, currentFlashCardIndex < questions.count else { return nil }
        return questions[currentFlashCardIndex]
    }
}
