import SwiftUI
import SwiftData

@main
struct GospelToolkitApp: App {
    let modelContainer: ModelContainer

    init() {
        do {
            let schema = Schema([FavoriteItem.self, CatechismProgress.self, AppSettings.self])
            let config = ModelConfiguration(isStoredInMemoryOnly: false)
            modelContainer = try ModelContainer(for: schema, configurations: [config])
        } catch {
            fatalError("Failed to create ModelContainer: \(error)")
        }
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(DataService.shared)
                .environmentObject(SearchService())
                .environmentObject(FavoritesService())
                .environmentObject(NotificationService())
        }
        .modelContainer(modelContainer)
    }
}
