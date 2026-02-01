import SwiftUI
import ReadiumShared
import ReadiumNavigator
import ReadiumStreamer
import ReadiumAdapterGCDWebServer

// MARK: - Readium Services Singleton

@MainActor
final class ReadiumServices {
    static let shared = ReadiumServices()

    let httpClient: HTTPClient = DefaultHTTPClient()
    lazy var assetRetriever = AssetRetriever(httpClient: httpClient)
    lazy var httpServer: HTTPServer = GCDHTTPServer(assetRetriever: assetRetriever)
    lazy var publicationOpener = PublicationOpener(
        parser: DefaultPublicationParser(
            httpClient: httpClient,
            assetRetriever: assetRetriever,
            pdfFactory: DefaultPDFDocumentFactory()
        )
    )

    private init() {}
}

// MARK: - EPUB Reader View

struct EPUBReaderView: View {
    let book: Book
    /// Explicit EPUB filename to open. Falls back to `book.epubFilename` for
    /// backward compatibility when nil.
    var epubFilename: String?
    @State private var publication: Publication?
    @State private var error: String?
    @State private var isLoading = true
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        Group {
            if isLoading {
                ProgressView("正在打开…")
            } else if let publication {
                EPUBNavigatorRepresentable(publication: publication)
                    .ignoresSafeArea(edges: .bottom)
            } else if let error {
                ContentUnavailableView(
                    "无法打开",
                    systemImage: "exclamationmark.triangle",
                    description: Text(error)
                )
            }
        }
        .navigationTitle(book.titleZh)
        .navigationBarTitleDisplayMode(.inline)
        .toolbar {
            ToolbarItem(placement: .topBarTrailing) {
                Button("关闭") { dismiss() }
            }
        }
        .task {
            await openEPUB()
        }
    }

    private func openEPUB() async {
        guard let filename = epubFilename ?? book.epubFilename else {
            error = "此书暂无EPUB文件"
            isLoading = false
            return
        }

        let name = filename.replacingOccurrences(of: ".epub", with: "")
        guard let fileURL = Bundle.main.url(forResource: name, withExtension: "epub") else {
            error = "未找到EPUB文件: \(filename)"
            isLoading = false
            return
        }

        do {
            let services = ReadiumServices.shared
            guard let absoluteURL = fileURL.anyURL.absoluteURL else {
                error = "无效的文件路径"
                isLoading = false
                return
            }
            let asset = try await services.assetRetriever.retrieve(url: absoluteURL).get()
            let pub = try await services.publicationOpener.open(
                asset: asset,
                allowUserInteraction: false
            ).get()
            publication = pub
            isLoading = false
        } catch {
            self.error = "打开失败: \(error.localizedDescription)"
            isLoading = false
        }
    }
}

// MARK: - UIViewControllerRepresentable

struct EPUBNavigatorRepresentable: UIViewControllerRepresentable {
    let publication: Publication

    func makeUIViewController(context: Context) -> UIViewController {
        let container = UIViewController()

        Task { @MainActor in
            do {
                let services = ReadiumServices.shared
                let navigator = try EPUBNavigatorViewController(
                    publication: publication,
                    config: EPUBNavigatorViewController.Configuration(),
                    httpServer: services.httpServer
                )
                container.addChild(navigator)
                navigator.view.frame = container.view.bounds
                navigator.view.autoresizingMask = [.flexibleWidth, .flexibleHeight]
                container.view.addSubview(navigator.view)
                navigator.didMove(toParent: container)
            } catch {
                let label = UILabel()
                label.text = "无法渲染EPUB: \(error.localizedDescription)"
                label.textAlignment = .center
                label.numberOfLines = 0
                label.frame = container.view.bounds
                label.autoresizingMask = [.flexibleWidth, .flexibleHeight]
                container.view.addSubview(label)
            }
        }

        return container
    }

    func updateUIViewController(_ uiViewController: UIViewController, context: Context) {}
}
