import Foundation

@MainActor
class LibraryViewModel: ObservableObject {
    @Published var books: [Book] = []

    func loadBooks(from dataService: DataService) {
        books = dataService.books
    }
}
