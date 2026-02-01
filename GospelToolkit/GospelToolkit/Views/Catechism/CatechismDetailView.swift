import SwiftUI
import SwiftData

struct CatechismDetailView: View {
    let question: CatechismQuestion
    @EnvironmentObject var favoritesService: FavoritesService
    @Environment(\.modelContext) private var modelContext

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                // Number badge
                HStack {
                    Text("第 \(question.number) 问")
                        .font(.caption.weight(.bold))
                        .foregroundStyle(.white)
                        .padding(.horizontal, 12)
                        .padding(.vertical, 6)
                        .background(.primaryIndigo)
                        .clipShape(Capsule())
                    Text("Q. \(question.number)")
                        .font(.caption)
                        .foregroundStyle(.secondary)
                }

                // Question
                SectionBlock(titleZh: "问", titleEn: "Question") {
                    Text(question.questionZh)
                        .font(.title3.weight(.semibold))
                    Text(question.questionEn)
                        .font(.body)
                        .foregroundStyle(.secondary)
                }

                // Answer
                SectionBlock(titleZh: "答", titleEn: "Answer") {
                    Text(question.answerZh)
                        .font(.body.weight(.medium))
                    Text(question.answerEn)
                        .font(.callout)
                        .foregroundStyle(.secondary)
                }

                // Proof texts
                if !question.proofTexts.isEmpty {
                    SectionBlock(titleZh: "经文引证", titleEn: "Proof Texts") {
                        ForEach(question.proofTexts, id: \.self) { text in
                            Label(text, systemImage: "book.closed")
                                .font(.subheadline)
                                .foregroundStyle(.primaryIndigo)
                        }
                    }
                }

                // Notes
                if !question.notesZh.isEmpty {
                    SectionBlock(titleZh: "注释", titleEn: "Notes") {
                        Text(question.notesZh)
                            .font(.callout)
                        Text(question.notesEn)
                            .font(.caption)
                            .foregroundStyle(.secondary)
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
                    favoritesService.toggleFavorite(itemId: question.id, itemType: "catechism", titleZh: question.questionZh, titleEn: question.questionEn, context: modelContext)
                } label: {
                    Image(systemName: favoritesService.isFavorite(question.id) ? "heart.fill" : "heart")
                        .foregroundStyle(.accentGold)
                }
            }
        }
        .onAppear {
            favoritesService.loadFavorites(context: modelContext)
        }
    }
}
