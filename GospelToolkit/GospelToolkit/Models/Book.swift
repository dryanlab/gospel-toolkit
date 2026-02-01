import Foundation

struct BookChapter: Codable, Hashable {
    let number: Int
    let titleZh: String
    let titleEn: String
    let summaryZh: String
    let summaryEn: String
    let keyQuotes: [String]

    enum CodingKeys: String, CodingKey {
        case number
        case titleZh = "title_zh"
        case titleEn = "title_en"
        case summaryZh = "summary_zh"
        case summaryEn = "summary_en"
        case keyQuotes = "key_quotes"
    }
}

struct Book: Codable, Identifiable, Hashable {
    let id: String
    let authorZh: String
    let authorEn: String
    let titleZh: String
    let titleEn: String
    let summaryZh: String
    let summaryEn: String
    let chapters: [BookChapter]
    let recommendFor: [String]
    let tags: [String]
    let epubFilename: String?
    let summaryEpubFilename: String?
    let fullEpubFilename: String?

    /// True when a full-text EPUB is bundled or has been imported.
    var isFullVersionAvailable: Bool { fullEpubFilename != nil }

    /// True when a summary EPUB is bundled.
    var isSummaryVersionAvailable: Bool { summaryEpubFilename != nil }

    /// Returns the EPUB filename for the requested version, falling back to
    /// the legacy `epubFilename` field for backward compatibility.
    func epubFilename(for version: BookVersion) -> String? {
        switch version {
        case .summary:
            return summaryEpubFilename ?? epubFilename
        case .full:
            return fullEpubFilename
        }
    }

    enum CodingKeys: String, CodingKey {
        case id, chapters, tags
        case epubFilename = "epub_filename"
        case summaryEpubFilename = "summary_epub_filename"
        case fullEpubFilename = "full_epub_filename"
        case authorZh = "author_zh"
        case authorEn = "author_en"
        case titleZh = "title_zh"
        case titleEn = "title_en"
        case summaryZh = "summary_zh"
        case summaryEn = "summary_en"
        case recommendFor = "recommend_for"
    }
}

// MARK: - Book Version

enum BookVersion: String, CaseIterable, Identifiable {
    case summary
    case full

    var id: String { rawValue }

    var label: String {
        switch self {
        case .summary: "摘要版 Summary"
        case .full: "完整版 Full Text"
        }
    }
}
