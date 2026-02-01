import SwiftUI

struct SearchView: View {
    @EnvironmentObject var dataService: DataService
    @EnvironmentObject var searchService: SearchService
    @State private var searchText = ""

    var body: some View {
        NavigationStack {
            List {
                if searchService.results.isEmpty && !searchText.isEmpty {
                    ContentUnavailableView("没有找到结果", systemImage: "magnifyingglass", description: Text("No results found for \"\(searchText)\""))
                }

                ForEach(searchService.results) { result in
                    NavigationLink {
                        searchDestination(for: result)
                    } label: {
                        VStack(alignment: .leading, spacing: 4) {
                            HStack {
                                Text(result.type)
                                    .font(.caption2.weight(.bold))
                                    .foregroundStyle(.white)
                                    .padding(.horizontal, 8)
                                    .padding(.vertical, 2)
                                    .background(.primaryIndigo)
                                    .clipShape(Capsule())
                                Spacer()
                            }
                            Text(result.titleZh)
                                .font(.subheadline.weight(.medium))
                            Text(result.titleEn)
                                .font(.caption)
                                .foregroundStyle(.secondary)
                            Text(result.snippetZh)
                                .font(.caption)
                                .foregroundStyle(.warmGray)
                                .lineLimit(2)
                        }
                        .padding(.vertical, 4)
                    }
                }
            }
            .navigationTitle("搜索 Search")
            .searchable(text: $searchText, prompt: "搜索所有内容 Search all...")
            .onChange(of: searchText) { _, newValue in
                searchService.search(query: newValue, dataService: dataService)
            }
        }
    }

    @ViewBuilder
    private func searchDestination(for result: SearchResult) -> some View {
        if result.type == SearchResultType.question.rawValue,
           let q = dataService.questions.first(where: { $0.id == result.id }) {
            QADetailView(question: q)
        } else if result.type == SearchResultType.catechism.rawValue {
            if let q = dataService.catechisms.values.flatMap({ $0 }).first(where: { $0.id == result.id }) {
                CatechismDetailView(question: q)
            }
        } else if result.type == SearchResultType.apologetics.rawValue,
                  let t = dataService.apologeticsTopics.first(where: { $0.id == result.id }) {
            ApologeticsDetailView(topic: t)
        } else if result.type == SearchResultType.book.rawValue,
                  let b = dataService.books.first(where: { $0.id == result.id }) {
            BookDetailView(book: b)
        } else {
            Text("Content not found")
        }
    }
}
