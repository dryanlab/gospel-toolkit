import SwiftUI
import SwiftData

struct QADetailView: View {
    let question: Question
    @EnvironmentObject var favoritesService: FavoritesService
    @Environment(\.modelContext) private var modelContext

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                // Question
                VStack(alignment: .leading, spacing: 8) {
                    Text(question.questionZh)
                        .font(.title2.weight(.bold))
                        .foregroundStyle(.primaryIndigo)
                    Text(question.questionEn)
                        .font(.title3)
                        .foregroundStyle(.secondary)
                }

                Divider()

                // Short answer
                SectionBlock(titleZh: "简要回答", titleEn: "Short Answer") {
                    Text(question.shortAnswerZh)
                        .font(.body)
                    Text(question.shortAnswerEn)
                        .font(.callout)
                        .foregroundStyle(.secondary)
                }

                // Detailed answer
                SectionBlock(titleZh: "详细解答", titleEn: "Detailed Answer") {
                    Text(question.detailedAnswerZh)
                        .font(.body)
                    Text(question.detailedAnswerEn)
                        .font(.callout)
                        .foregroundStyle(.secondary)
                }

                // Bible verses
                if !question.bibleVerses.isEmpty {
                    SectionBlock(titleZh: "相关经文", titleEn: "Bible Verses") {
                        ForEach(question.bibleVerses, id: \.self) { verse in
                            Label(verse, systemImage: "book.closed")
                                .font(.subheadline)
                                .foregroundStyle(.primaryIndigo)
                        }
                    }
                }

                // Related readings
                if !question.relatedReadings.isEmpty {
                    SectionBlock(titleZh: "推荐阅读", titleEn: "Related Readings") {
                        ForEach(question.relatedReadings, id: \.self) { reading in
                            Label(reading, systemImage: "book")
                                .font(.subheadline)
                        }
                    }
                }

                // Tags
                if !question.tags.isEmpty {
                    FlowLayout(spacing: 8) {
                        ForEach(question.tags, id: \.self) { tag in
                            Text(tag)
                                .font(.caption)
                                .padding(.horizontal, 10)
                                .padding(.vertical, 5)
                                .background(.primaryIndigo.opacity(0.1))
                                .clipShape(Capsule())
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
                    favoritesService.toggleFavorite(itemId: question.id, itemType: "question", titleZh: question.questionZh, titleEn: question.questionEn, context: modelContext)
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

struct SectionBlock<Content: View>: View {
    let titleZh: String
    let titleEn: String
    @ViewBuilder let content: Content

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            HStack(spacing: 6) {
                Text(titleZh)
                    .font(.headline)
                Text(titleEn)
                    .font(.subheadline)
                    .foregroundStyle(.secondary)
            }
            content
        }
    }
}

struct FlowLayout: Layout {
    var spacing: CGFloat = 8

    func sizeThatFits(proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) -> CGSize {
        let result = arrange(proposal: proposal, subviews: subviews)
        return result.size
    }

    func placeSubviews(in bounds: CGRect, proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) {
        let result = arrange(proposal: proposal, subviews: subviews)
        for (index, position) in result.positions.enumerated() {
            subviews[index].place(at: CGPoint(x: bounds.minX + position.x, y: bounds.minY + position.y), proposal: .unspecified)
        }
    }

    private func arrange(proposal: ProposedViewSize, subviews: Subviews) -> (positions: [CGPoint], size: CGSize) {
        let maxWidth = proposal.width ?? .infinity
        var positions: [CGPoint] = []
        var x: CGFloat = 0
        var y: CGFloat = 0
        var rowHeight: CGFloat = 0

        for subview in subviews {
            let size = subview.sizeThatFits(.unspecified)
            if x + size.width > maxWidth && x > 0 {
                x = 0
                y += rowHeight + spacing
                rowHeight = 0
            }
            positions.append(CGPoint(x: x, y: y))
            rowHeight = max(rowHeight, size.height)
            x += size.width + spacing
        }

        return (positions, CGSize(width: maxWidth, height: y + rowHeight))
    }
}
