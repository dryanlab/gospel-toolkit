import Foundation
import SwiftData
import SwiftUI

@MainActor
class FavoritesService: ObservableObject {
    @Published var favoriteIds: Set<String> = []

    func loadFavorites(context: ModelContext) {
        let descriptor = FetchDescriptor<FavoriteItem>()
        if let items = try? context.fetch(descriptor) {
            favoriteIds = Set(items.map(\.itemId))
        }
    }

    func isFavorite(_ id: String) -> Bool {
        favoriteIds.contains(id)
    }

    func toggleFavorite(itemId: String, itemType: String, titleZh: String, titleEn: String, context: ModelContext) {
        if isFavorite(itemId) {
            removeFavorite(itemId: itemId, context: context)
        } else {
            addFavorite(itemId: itemId, itemType: itemType, titleZh: titleZh, titleEn: titleEn, context: context)
        }
    }

    private func addFavorite(itemId: String, itemType: String, titleZh: String, titleEn: String, context: ModelContext) {
        let item = FavoriteItem(itemId: itemId, itemType: itemType, titleZh: titleZh, titleEn: titleEn)
        context.insert(item)
        favoriteIds.insert(itemId)
        try? context.save()
    }

    private func removeFavorite(itemId: String, context: ModelContext) {
        let descriptor = FetchDescriptor<FavoriteItem>(predicate: #Predicate { $0.itemId == itemId })
        if let items = try? context.fetch(descriptor) {
            for item in items {
                context.delete(item)
            }
        }
        favoriteIds.remove(itemId)
        try? context.save()
    }

    func allFavorites(context: ModelContext) -> [FavoriteItem] {
        let descriptor = FetchDescriptor<FavoriteItem>(sortBy: [SortDescriptor(\.dateAdded, order: .reverse)])
        return (try? context.fetch(descriptor)) ?? []
    }
}
