import SwiftUI

struct CatechismListView: View {
    @EnvironmentObject var dataService: DataService
    @State private var selectedType: CatechismType = .westminsterShorter

    var body: some View {
        VStack(spacing: 0) {
            Picker("Catechism", selection: $selectedType) {
                ForEach(CatechismType.allCases) { type in
                    Text(type.abbreviation).tag(type)
                }
            }
            .pickerStyle(.segmented)
            .padding()

            List {
                // Flash Card mode entry
                NavigationLink {
                    FlashCardView(questions: dataService.catechismQuestions(for: selectedType))
                } label: {
                    HStack(spacing: 12) {
                        Image(systemName: "rectangle.on.rectangle.angled")
                            .font(.title2)
                            .foregroundStyle(.accentGold)
                        VStack(alignment: .leading) {
                            Text("闪卡模式")
                                .font(.headline)
                            Text("Flash Card Mode")
                                .font(.caption)
                                .foregroundStyle(.secondary)
                        }
                    }
                    .padding(.vertical, 4)
                }

                // Question list
                ForEach(dataService.catechismQuestions(for: selectedType)) { question in
                    NavigationLink {
                        CatechismDetailView(question: question)
                    } label: {
                        HStack(alignment: .top, spacing: 12) {
                            Text("\(question.number)")
                                .font(.caption.weight(.bold))
                                .foregroundStyle(.white)
                                .frame(width: 28, height: 28)
                                .background(.primaryIndigo)
                                .clipShape(Circle())

                            VStack(alignment: .leading, spacing: 2) {
                                Text(question.questionZh)
                                    .font(.subheadline.weight(.medium))
                                    .lineLimit(2)
                                Text(question.questionEn)
                                    .font(.caption)
                                    .foregroundStyle(.secondary)
                                    .lineLimit(2)
                            }
                        }
                        .padding(.vertical, 2)
                    }
                }
            }
        }
        .navigationTitle("\(selectedType.nameZh)")
        .navigationBarTitleDisplayMode(.inline)
    }
}
