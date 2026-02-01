import SwiftUI

struct FlashCardView: View {
    let questions: [CatechismQuestion]
    @State private var currentIndex = 0
    @State private var isFlipped = false
    @State private var dragOffset: CGFloat = 0

    var currentQuestion: CatechismQuestion? {
        guard !questions.isEmpty, currentIndex < questions.count else { return nil }
        return questions[currentIndex]
    }

    var body: some View {
        VStack(spacing: 24) {
            // Progress
            HStack {
                Text("\(currentIndex + 1) / \(questions.count)")
                    .font(.headline)
                    .foregroundStyle(.primaryIndigo)
                Spacer()
                Text(isFlipped ? "答案 Answer" : "问题 Question")
                    .font(.caption)
                    .foregroundStyle(.secondary)
            }
            .padding(.horizontal)

            ProgressView(value: Double(currentIndex + 1), total: Double(questions.count))
                .tint(.accentGold)
                .padding(.horizontal)

            // Card
            if let q = currentQuestion {
                ZStack {
                    // Front (question)
                    cardFace(isQuestion: true, question: q)
                        .opacity(isFlipped ? 0 : 1)
                        .rotation3DEffect(.degrees(isFlipped ? 180 : 0), axis: (x: 0, y: 1, z: 0))

                    // Back (answer)
                    cardFace(isQuestion: false, question: q)
                        .opacity(isFlipped ? 1 : 0)
                        .rotation3DEffect(.degrees(isFlipped ? 0 : -180), axis: (x: 0, y: 1, z: 0))
                }
                .offset(x: dragOffset)
                .gesture(
                    DragGesture()
                        .onChanged { value in
                            dragOffset = value.translation.width
                        }
                        .onEnded { value in
                            withAnimation(.spring(duration: 0.3)) {
                                if value.translation.width < -100 {
                                    nextCard()
                                } else if value.translation.width > 100 {
                                    previousCard()
                                }
                                dragOffset = 0
                            }
                        }
                )
                .onTapGesture {
                    withAnimation(.spring(duration: 0.4)) {
                        isFlipped.toggle()
                    }
                }
            }

            Spacer()

            // Navigation buttons
            HStack(spacing: 40) {
                Button {
                    withAnimation { previousCard() }
                } label: {
                    Image(systemName: "chevron.left.circle.fill")
                        .font(.largeTitle)
                        .foregroundStyle(.primaryIndigo)
                }
                .disabled(currentIndex == 0)

                Button {
                    withAnimation(.spring(duration: 0.4)) {
                        isFlipped.toggle()
                    }
                } label: {
                    Image(systemName: "arrow.triangle.2.circlepath.circle.fill")
                        .font(.largeTitle)
                        .foregroundStyle(.accentGold)
                }

                Button {
                    withAnimation { nextCard() }
                } label: {
                    Image(systemName: "chevron.right.circle.fill")
                        .font(.largeTitle)
                        .foregroundStyle(.primaryIndigo)
                }
                .disabled(currentIndex >= questions.count - 1)
            }
            .padding(.bottom)
        }
        .navigationTitle("闪卡 Flash Cards")
        .navigationBarTitleDisplayMode(.inline)
    }

    private func cardFace(isQuestion: Bool, question: CatechismQuestion) -> some View {
        VStack(spacing: 16) {
            Text("第 \(question.number) 问")
                .font(.caption.weight(.bold))
                .foregroundStyle(.accentGold)

            if isQuestion {
                Text(question.questionZh)
                    .font(.title3.weight(.bold))
                    .multilineTextAlignment(.center)
                Text(question.questionEn)
                    .font(.body)
                    .foregroundStyle(.secondary)
                    .multilineTextAlignment(.center)

                Text("点击翻转 Tap to flip")
                    .font(.caption2)
                    .foregroundStyle(.warmGray)
                    .padding(.top, 20)
            } else {
                Text(question.answerZh)
                    .font(.body.weight(.medium))
                    .multilineTextAlignment(.center)
                Text(question.answerEn)
                    .font(.callout)
                    .foregroundStyle(.secondary)
                    .multilineTextAlignment(.center)
            }
        }
        .padding(24)
        .frame(maxWidth: .infinity, minHeight: 350)
        .background(
            RoundedRectangle(cornerRadius: 20)
                .fill(.background)
                .shadow(color: .black.opacity(0.1), radius: 10, y: 5)
        )
        .padding(.horizontal)
    }

    private func nextCard() {
        if currentIndex < questions.count - 1 {
            currentIndex += 1
            isFlipped = false
        }
    }

    private func previousCard() {
        if currentIndex > 0 {
            currentIndex -= 1
            isFlipped = false
        }
    }
}
