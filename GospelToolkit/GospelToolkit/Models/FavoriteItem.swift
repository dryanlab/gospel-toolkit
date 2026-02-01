import Foundation
import SwiftData

@Model
final class FavoriteItem {
    var itemId: String
    var itemType: String // "question", "catechism", "apologetics", "book"
    var titleZh: String
    var titleEn: String
    var dateAdded: Date
    var customTags: [String]

    init(itemId: String, itemType: String, titleZh: String, titleEn: String, dateAdded: Date = .now, customTags: [String] = []) {
        self.itemId = itemId
        self.itemType = itemType
        self.titleZh = titleZh
        self.titleEn = titleEn
        self.dateAdded = dateAdded
        self.customTags = customTags
    }
}

@Model
final class CatechismProgress {
    var questionId: String
    var status: String // "unlearned", "learning", "memorized"
    var lastReviewed: Date?

    init(questionId: String, status: String = "unlearned", lastReviewed: Date? = nil) {
        self.questionId = questionId
        self.status = status
        self.lastReviewed = lastReviewed
    }
}

@Model
final class AppSettings {
    var preferredLanguage: String // "zh", "en", "both"
    var dailyNotificationEnabled: Bool
    var notificationHour: Int
    var notificationMinute: Int

    init(preferredLanguage: String = "both", dailyNotificationEnabled: Bool = true, notificationHour: Int = 8, notificationMinute: Int = 0) {
        self.preferredLanguage = preferredLanguage
        self.dailyNotificationEnabled = dailyNotificationEnabled
        self.notificationHour = notificationHour
        self.notificationMinute = notificationMinute
    }
}
