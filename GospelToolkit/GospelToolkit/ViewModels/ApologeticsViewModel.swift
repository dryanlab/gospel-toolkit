import Foundation

@MainActor
class ApologeticsViewModel: ObservableObject {
    @Published var selectedWorldview: Worldview?
    @Published var filteredTopics: [ApologeticsTopic] = []

    func loadTopics(for worldview: Worldview, from dataService: DataService) {
        selectedWorldview = worldview
        filteredTopics = dataService.apologetics(for: worldview)
    }
}
