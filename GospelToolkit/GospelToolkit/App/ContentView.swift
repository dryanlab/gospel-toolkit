import SwiftUI

struct ContentView: View {
    var body: some View {
        TabView {
            HomeView()
                .tabItem {
                    Label("首页", systemImage: "house.fill")
                }

            SearchView()
                .tabItem {
                    Label("搜索", systemImage: "magnifyingglass")
                }

            FavoritesView()
                .tabItem {
                    Label("收藏", systemImage: "heart.fill")
                }

            SettingsView()
                .tabItem {
                    Label("设置", systemImage: "gearshape.fill")
                }
        }
        .tint(Color.accentGold)
    }
}

struct SettingsView: View {
    @EnvironmentObject var notificationService: NotificationService
    @State private var dailyNotification = true
    @State private var notificationTime = Date()

    var body: some View {
        NavigationStack {
            Form {
                Section("每日推送 Daily Reminder") {
                    Toggle("每日一问", isOn: $dailyNotification)
                    if dailyNotification {
                        DatePicker("推送时间", selection: $notificationTime, displayedComponents: .hourAndMinute)
                    }
                }

                Section("关于 About") {
                    HStack {
                        Text("版本 Version")
                        Spacer()
                        Text("1.0.0 MVP")
                            .foregroundStyle(.secondary)
                    }
                    Text("福音工具箱 Gospel Toolkit")
                        .font(.footnote)
                        .foregroundStyle(.secondary)
                }
            }
            .navigationTitle("设置 Settings")
            .onChange(of: dailyNotification) { _, newValue in
                if newValue {
                    notificationService.scheduleDailyCatechism(at: notificationTime)
                } else {
                    notificationService.cancelAll()
                }
            }
        }
    }
}
