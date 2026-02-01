import SwiftUI

struct BookListView: View {
    @EnvironmentObject var dataService: DataService

    var body: some View {
        List(dataService.books) { book in
            NavigationLink {
                BookDetailView(book: book)
            } label: {
                HStack(spacing: 12) {
                    // Book icon
                    VStack {
                        Image(systemName: "book.closed.fill")
                            .font(.title)
                            .foregroundStyle(.primaryIndigo)
                    }
                    .frame(width: 50, height: 65)
                    .background(.primaryIndigo.opacity(0.1))
                    .clipShape(RoundedRectangle(cornerRadius: 8))

                    VStack(alignment: .leading, spacing: 4) {
                        Text(book.titleZh)
                            .font(.headline)
                        Text(book.titleEn)
                            .font(.subheadline)
                            .foregroundStyle(.secondary)
                        Text("\(book.authorZh) / \(book.authorEn)")
                            .font(.caption)
                            .foregroundStyle(.warmGray)
                    }
                }
                .padding(.vertical, 4)
            }
        }
        .navigationTitle("经典著作 Library")
    }
}
