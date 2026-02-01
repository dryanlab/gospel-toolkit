import Foundation
import UserNotifications

@MainActor
class NotificationService: ObservableObject {

    func requestPermission() {
        UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .sound, .badge]) { granted, error in
            if let error = error {
                print("Notification permission error: \(error)")
            }
        }
    }

    func scheduleDailyCatechism(at date: Date) {
        let content = UNMutableNotificationContent()
        content.title = "每日一问 Daily Catechism"
        content.body = "今天的要理问答已准备好，来学习吧！\nYour daily catechism question is ready!"
        content.sound = .default

        let calendar = Calendar.current
        var components = DateComponents()
        components.hour = calendar.component(.hour, from: date)
        components.minute = calendar.component(.minute, from: date)

        let trigger = UNCalendarNotificationTrigger(dateMatching: components, repeats: true)
        let request = UNNotificationRequest(identifier: "daily_catechism", content: content, trigger: trigger)

        UNUserNotificationCenter.current().add(request)
    }

    func cancelAll() {
        UNUserNotificationCenter.current().removeAllPendingNotificationRequests()
    }
}
