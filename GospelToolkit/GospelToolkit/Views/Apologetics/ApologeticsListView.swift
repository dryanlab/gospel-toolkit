import SwiftUI

struct ApologeticsListView: View {
    @EnvironmentObject var dataService: DataService

    var body: some View {
        List {
            ForEach(Worldview.allCases) { worldview in
                NavigationLink {
                    ApologeticsWorldviewView(worldview: worldview)
                } label: {
                    HStack(spacing: 12) {
                        Image(systemName: worldview.icon)
                            .font(.title3)
                            .foregroundStyle(.accentGold)
                            .frame(width: 32)
                        VStack(alignment: .leading) {
                            Text(worldview.nameZh)
                                .font(.headline)
                            Text(worldview.nameEn)
                                .font(.caption)
                                .foregroundStyle(.secondary)
                        }
                        Spacer()
                        Text("\(dataService.apologetics(for: worldview).count)")
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
        .navigationTitle("护教学 Apologetics")
    }
}

struct ApologeticsWorldviewView: View {
    let worldview: Worldview
    @EnvironmentObject var dataService: DataService

    var topics: [ApologeticsTopic] {
        dataService.apologetics(for: worldview)
    }

    var body: some View {
        List(topics) { topic in
            NavigationLink {
                ApologeticsDetailView(topic: topic)
            } label: {
                VStack(alignment: .leading, spacing: 4) {
                    Text(topic.topicZh)
                        .font(.headline)
                    Text(topic.topicEn)
                        .font(.subheadline)
                        .foregroundStyle(.secondary)
                }
                .padding(.vertical, 4)
            }
        }
        .navigationTitle(worldview.nameZh)
    }
}
