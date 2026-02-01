import SwiftUI
import SwiftData

struct BookDetailView: View {
    let book: Book
    @EnvironmentObject var favoritesService: FavoritesService
    @Environment(\.modelContext) private var modelContext
    @State private var showReader = false
    @State private var selectedVersion: BookVersion = .summary

    /// The EPUB filename for the currently selected version.
    private var activeEpub: String? {
        book.epubFilename(for: selectedVersion)
    }

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                // MARK: Header
                VStack(alignment: .leading, spacing: 8) {
                    Text(book.titleZh)
                        .font(.title.weight(.bold))
                        .foregroundStyle(.primaryIndigo)
                    Text(book.titleEn)
                        .font(.title2)
                        .foregroundStyle(.secondary)
                    Text("\(book.authorZh) / \(book.authorEn)")
                        .font(.subheadline)
                        .foregroundStyle(.warmGray)
                }

                // MARK: Recommend tags
                if !book.recommendFor.isEmpty {
                    HStack {
                        ForEach(book.recommendFor, id: \.self) { audience in
                            Text(audience)
                                .font(.caption)
                                .padding(.horizontal, 10)
                                .padding(.vertical, 5)
                                .background(.accentGold.opacity(0.15))
                                .foregroundStyle(.accentGold)
                                .clipShape(Capsule())
                        }
                    }
                }

                // MARK: Version Picker
                versionPicker

                // MARK: Read / Import actions
                actionArea

                Divider()

                // MARK: Summary
                SectionBlock(titleZh: "简介", titleEn: "Summary") {
                    Text(book.summaryZh)
                        .font(.body)
                    Text(book.summaryEn)
                        .font(.callout)
                        .foregroundStyle(.secondary)
                }

                // MARK: Chapters
                if !book.chapters.isEmpty {
                    SectionBlock(titleZh: "章节摘要", titleEn: "Chapter Summaries") {
                        ForEach(book.chapters, id: \.number) { chapter in
                            VStack(alignment: .leading, spacing: 8) {
                                HStack {
                                    Text("第\(chapter.number)章")
                                        .font(.caption.weight(.bold))
                                        .foregroundStyle(.white)
                                        .padding(.horizontal, 8)
                                        .padding(.vertical, 3)
                                        .background(.primaryIndigo)
                                        .clipShape(Capsule())
                                    Text(chapter.titleZh)
                                        .font(.subheadline.weight(.medium))
                                }
                                Text(chapter.titleEn)
                                    .font(.caption)
                                    .foregroundStyle(.secondary)

                                Text(chapter.summaryZh)
                                    .font(.callout)
                                Text(chapter.summaryEn)
                                    .font(.caption)
                                    .foregroundStyle(.secondary)

                                // Key quotes
                                ForEach(chapter.keyQuotes, id: \.self) { quote in
                                    HStack(alignment: .top) {
                                        Image(systemName: "quote.opening")
                                            .font(.caption)
                                            .foregroundStyle(.accentGold)
                                        Text(quote)
                                            .font(.caption)
                                            .italic()
                                    }
                                    .padding(.leading, 8)
                                }

                                Divider()
                            }
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
                    favoritesService.toggleFavorite(itemId: book.id, itemType: "book", titleZh: book.titleZh, titleEn: book.titleEn, context: modelContext)
                } label: {
                    Image(systemName: favoritesService.isFavorite(book.id) ? "heart.fill" : "heart")
                        .foregroundStyle(.accentGold)
                }
            }
        }
        .onAppear {
            favoritesService.loadFavorites(context: modelContext)
            // Default to whichever version is actually available
            if !book.isSummaryVersionAvailable && book.epubFilename == nil && book.isFullVersionAvailable {
                selectedVersion = .full
            }
        }
        .fullScreenCover(isPresented: $showReader) {
            NavigationStack {
                EPUBReaderView(book: book, epubFilename: activeEpub)
            }
        }
    }

    // MARK: - Version Picker

    private var versionPicker: some View {
        Picker("版本 / Version", selection: $selectedVersion) {
            ForEach(BookVersion.allCases) { version in
                Text(version.label).tag(version)
            }
        }
        .pickerStyle(.segmented)
        .padding(.vertical, 4)
    }

    // MARK: - Action Area (Read / Import)

    @ViewBuilder
    private var actionArea: some View {
        if let _ = activeEpub {
            // EPUB available for the selected version
            Button {
                showReader = true
            } label: {
                Label("阅读 / Read", systemImage: "book.fill")
                    .font(.headline)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 12)
            }
            .buttonStyle(.borderedProminent)
            .tint(.primaryIndigo)
        } else {
            // No EPUB for this version
            VStack(spacing: 12) {
                Label(
                    selectedVersion == .full
                        ? "完整版即将推出 / Full version coming soon"
                        : "摘要版即将推出 / Summary coming soon",
                    systemImage: "clock"
                )
                .font(.subheadline)
                .foregroundStyle(.secondary)
                .frame(maxWidth: .infinity)
                .padding()
                .background(.primaryIndigo.opacity(0.05))
                .clipShape(RoundedRectangle(cornerRadius: 12))

                Button {
                    // TODO: Implement EPUB file import via UIDocumentPickerViewController
                    // Allow users to import their own purchased EPUB files.
                } label: {
                    Label("导入 / Import", systemImage: "square.and.arrow.down")
                        .font(.headline)
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 12)
                }
                .buttonStyle(.borderedProminent)
                .tint(.accentGold)
            }
        }
    }
}
