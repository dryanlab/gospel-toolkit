import SwiftUI
import SwiftData

struct ApologeticsDetailView: View {
    let topic: ApologeticsTopic
    @EnvironmentObject var favoritesService: FavoritesService
    @Environment(\.modelContext) private var modelContext

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                // Title
                VStack(alignment: .leading, spacing: 4) {
                    Text(topic.topicZh)
                        .font(.title2.weight(.bold))
                        .foregroundStyle(.primaryIndigo)
                    Text(topic.topicEn)
                        .font(.title3)
                        .foregroundStyle(.secondary)
                }

                Divider()

                // Core argument
                SectionBlock(titleZh: "核心论点", titleEn: "Core Argument") {
                    Text(topic.coreArgumentZh)
                        .font(.body)
                    Text(topic.coreArgumentEn)
                        .font(.callout)
                        .foregroundStyle(.secondary)
                }

                // Common objections
                if !topic.commonObjections.isEmpty {
                    SectionBlock(titleZh: "常见反驳与回应", titleEn: "Common Objections & Responses") {
                        ForEach(Array(topic.commonObjections.enumerated()), id: \.offset) { index, objection in
                            VStack(alignment: .leading, spacing: 8) {
                                HStack(alignment: .top, spacing: 8) {
                                    Text("反")
                                        .font(.caption.weight(.bold))
                                        .foregroundStyle(.white)
                                        .frame(width: 24, height: 24)
                                        .background(.red.opacity(0.7))
                                        .clipShape(Circle())

                                    VStack(alignment: .leading) {
                                        Text(objection.objectionZh)
                                            .font(.subheadline.weight(.medium))
                                        Text(objection.objectionEn)
                                            .font(.caption)
                                            .foregroundStyle(.secondary)
                                    }
                                }

                                HStack(alignment: .top, spacing: 8) {
                                    Text("应")
                                        .font(.caption.weight(.bold))
                                        .foregroundStyle(.white)
                                        .frame(width: 24, height: 24)
                                        .background(.primaryIndigo)
                                        .clipShape(Circle())

                                    VStack(alignment: .leading) {
                                        Text(objection.responseZh)
                                            .font(.subheadline)
                                        Text(objection.responseEn)
                                            .font(.caption)
                                            .foregroundStyle(.secondary)
                                    }
                                }

                                if index < topic.commonObjections.count - 1 {
                                    Divider()
                                }
                            }
                        }
                    }
                }

                // Bible verses
                if !topic.bibleVerses.isEmpty {
                    SectionBlock(titleZh: "相关经文", titleEn: "Bible Verses") {
                        ForEach(topic.bibleVerses, id: \.self) { verse in
                            Label(verse, systemImage: "book.closed")
                                .font(.subheadline)
                                .foregroundStyle(.primaryIndigo)
                        }
                    }
                }

                // Resources
                if !topic.recommendedResources.isEmpty {
                    SectionBlock(titleZh: "推荐资源", titleEn: "Recommended Resources") {
                        ForEach(topic.recommendedResources, id: \.self) { resource in
                            Label(resource, systemImage: "book")
                                .font(.subheadline)
                        }
                    }
                }
            }
            .padding()
        }
        .background(Color.warmWhite.ignoresSafeArea())
        .navigationBarTitleDisplayMode(.inline)
        .toolbar {
            ToolbarItem(placement: .topBarTrailing) {
                Button {
                    favoritesService.toggleFavorite(itemId: topic.id, itemType: "apologetics", titleZh: topic.topicZh, titleEn: topic.topicEn, context: modelContext)
                } label: {
                    Image(systemName: favoritesService.isFavorite(topic.id) ? "heart.fill" : "heart")
                        .foregroundStyle(.accentGold)
                }
            }
        }
        .onAppear {
            favoritesService.loadFavorites(context: modelContext)
        }
    }
}
