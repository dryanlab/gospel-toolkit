import SwiftUI

struct QAListView: View {
    @EnvironmentObject var dataService: DataService

    var body: some View {
        List {
            ForEach(QuestionCategory.allCases) { category in
                NavigationLink {
                    QACategoryView(category: category)
                } label: {
                    HStack(spacing: 12) {
                        Image(systemName: category.icon)
                            .font(.title3)
                            .foregroundStyle(.accentGold)
                            .frame(width: 32)
                        VStack(alignment: .leading) {
                            Text(category.nameZh)
                                .font(.headline)
                            Text(category.nameEn)
                                .font(.caption)
                                .foregroundStyle(.secondary)
                        }
                        Spacer()
                        Text("\(dataService.questions(for: category).count)")
                            .font(.caption)
                            .padding(.horizontal, 8)
                            .padding(.vertical, 4)
                            .background(.primaryIndigo.opacity(0.1))
                            .clipShape(Capsule())
                    }
                    .padding(.vertical, 4)
                }
            }
        }
        .navigationTitle("福音问答 Q&A")
    }
}

struct QACategoryView: View {
    let category: QuestionCategory
    @EnvironmentObject var dataService: DataService

    var questions: [Question] {
        dataService.questions(for: category)
    }

    var body: some View {
        List(questions) { question in
            NavigationLink {
                QADetailView(question: question)
            } label: {
                VStack(alignment: .leading, spacing: 4) {
                    Text(question.questionZh)
                        .font(.headline)
                    Text(question.questionEn)
                        .font(.subheadline)
                        .foregroundStyle(.secondary)
                }
                .padding(.vertical, 4)
            }
        }
        .navigationTitle("\(category.nameZh)")
    }
}
