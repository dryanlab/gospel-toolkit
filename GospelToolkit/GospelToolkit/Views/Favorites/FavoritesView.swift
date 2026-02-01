import SwiftUI
import SwiftData

struct FavoritesView: View {
    @EnvironmentObject var favoritesService: FavoritesService
    @EnvironmentObject var dataService: DataService
    @Environment(\.modelContext) private var modelContext
    @Query(sort: \FavoriteItem.dateAdded, order: .reverse) private var favorites: [FavoriteItem]

    var grouped: [String: [FavoriteItem]] {
        Dictionary(grouping: favorites, by: \.itemType)
    }

    var body: some View {
        NavigationStack {
            List {
                if favorites.isEmpty {
                    ContentUnavailableView("暂无收藏", systemImage: "heart", description: Text("No favorites yet. Tap ❤️ to save content."))
                }

                ForEach(["question", "catechism", "apologetics", "book"], id: \.self) { type in
                    if let items = grouped[type], !items.isEmpty {
                        Section(sectionTitle(for: type)) {
                            ForEach(items, id: \.itemId) { item in
                                NavigationLink {
                                    favoriteDestination(for: item)
                                } label: {
                                    VStack(alignment: .leading, spacing: 2) {
                                        Text(item.titleZh)
                                            .font(.subheadline.weight(.medium))
                                        Text(item.titleEn)
                                            .font(.caption)
                                            .foregroundStyle(.secondary)
                                    }
                                }
                            }
                            .onDelete { indexSet in
                                deleteItems(items: items, at: indexSet)
                            }
                        }
                    }
                }
            }
            .navigationTitle("收藏 Favorites")
            .onAppear {
                favoritesService.loadFavorites(context: modelContext)
            }
        }
    }

    private func sectionTitle(for type: String) -> String {
        switch type {
        case "question": return "福音问答 Q&A"
        case "catechism": return "要理问答 Catechism"
        case "apologetics": return "护教学 Apologetics"
        case "book": return "经典著作 Library"
        default: return type
        }
    }

    @ViewBuilder
    private func favoriteDestination(for item: FavoriteItem) -> some View {
        switch item.itemType {
        case "question":
            if let q = dataService.questions.first(where: { $0.id == item.itemId }) {
                QADetailView(question: q)
            }
        case "catechism":
            if let q = dataService.catechisms.values.flatMap({ $0 }).first(where: { $0.id == item.itemId }) {
                CatechismDetailView(question: q)
            }
        case "apologetics":
            if let t = dataService.apologeticsTopics.first(where: { $0.id == item.itemId }) {
                ApologeticsDetailView(topic: t)
            }
        case "book":
            if let b = dataService.books.first(where: { $0.id == item.itemId }) {
                BookDetailView(book: b)
            }
        default:
            Text("Content not found")
        }
    }

    private func deleteItems(items: [FavoriteItem], at offsets: IndexSet) {
        for index in offsets {
            let item = items[index]
            favoritesService.toggleFavorite(itemId: item.itemId, itemType: item.itemType, titleZh: item.titleZh, titleEn: item.titleEn, context: modelContext)
        }
    }
}
