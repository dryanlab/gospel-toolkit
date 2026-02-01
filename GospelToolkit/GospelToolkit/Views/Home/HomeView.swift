import SwiftUI

struct HomeView: View {
    @EnvironmentObject var dataService: DataService

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(spacing: 20) {
                    // Daily catechism widget
                    if let daily = dataService.catechisms[.westminsterShorter]?.randomElement() {
                        DailyWidget(question: daily)
                    }

                    // Module cards
                    LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 16) {
                        NavigationLink {
                            QAListView()
                        } label: {
                            ModuleCard(icon: "questionmark.bubble.fill", titleZh: "福音问答", titleEn: "Gospel Q&A", color: .primaryIndigo)
                        }

                        NavigationLink {
                            CatechismListView()
                        } label: {
                            ModuleCard(icon: "text.book.closed.fill", titleZh: "要理问答", titleEn: "Catechisms", color: Color(red: 0.25, green: 0.35, blue: 0.55))
                        }

                        NavigationLink {
                            ApologeticsListView()
                        } label: {
                            ModuleCard(icon: "shield.checkered", titleZh: "护教学", titleEn: "Apologetics", color: Color(red: 0.30, green: 0.28, blue: 0.50))
                        }

                        NavigationLink {
                            BookListView()
                        } label: {
                            ModuleCard(icon: "books.vertical.fill", titleZh: "经典著作", titleEn: "Classic Works", color: Color(red: 0.22, green: 0.30, blue: 0.48))
                        }
                    }
                    .padding(.horizontal)
                }
                .padding(.vertical)
            }
            .background(Color.warmWhite.ignoresSafeArea())
            .navigationTitle("福音工具箱")
            .toolbar {
                ToolbarItem(placement: .topBarTrailing) {
                    NavigationLink {
                        SearchView()
                    } label: {
                        Image(systemName: "magnifyingglass")
                    }
                }
            }
        }
        .tint(.primaryIndigo)
    }
}

struct DailyWidget: View {
    let question: CatechismQuestion
    @State private var showAnswer = false

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                Image(systemName: "sparkles")
                    .foregroundStyle(.accentGold)
                Text("每日一问 Daily Question")
                    .font(.caption.weight(.semibold))
                    .foregroundStyle(.accentGold)
            }

            Text(question.questionZh)
                .font(.headline)
                .foregroundStyle(.white)
            Text(question.questionEn)
                .font(.subheadline)
                .foregroundStyle(.white.opacity(0.8))

            if showAnswer {
                Divider().background(.white.opacity(0.3))
                Text(question.answerZh)
                    .font(.body)
                    .foregroundStyle(.white.opacity(0.95))
                Text(question.answerEn)
                    .font(.callout)
                    .foregroundStyle(.white.opacity(0.75))
            }

            Button(showAnswer ? "隐藏答案 Hide" : "显示答案 Reveal") {
                withAnimation(.spring(duration: 0.3)) {
                    showAnswer.toggle()
                }
            }
            .font(.caption.weight(.medium))
            .foregroundStyle(.accentGold)
        }
        .padding()
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(
            LinearGradient(colors: [.primaryIndigo, Color(red: 0.25, green: 0.30, blue: 0.55)], startPoint: .topLeading, endPoint: .bottomTrailing)
        )
        .clipShape(RoundedRectangle(cornerRadius: 16))
        .padding(.horizontal)
    }
}

struct ModuleCard: View {
    let icon: String
    let titleZh: String
    let titleEn: String
    let color: Color

    var body: some View {
        VStack(spacing: 12) {
            Image(systemName: icon)
                .font(.largeTitle)
                .foregroundStyle(.white)
            Text(titleZh)
                .font(.headline)
                .foregroundStyle(.white)
            Text(titleEn)
                .font(.caption)
                .foregroundStyle(.white.opacity(0.7))
        }
        .frame(maxWidth: .infinity)
        .frame(height: 140)
        .background(
            LinearGradient(colors: [color, color.opacity(0.8)], startPoint: .top, endPoint: .bottom)
        )
        .clipShape(RoundedRectangle(cornerRadius: 16))
    }
}
