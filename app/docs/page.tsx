import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent cursor-pointer">
                NoCSS
              </span>
            </Link>
            <div className="flex space-x-6">
              <Link href="/#usage" className="text-gray-700 hover:text-purple-600 font-medium">
                Usage
              </Link>
              <Link href="/docs" className="text-purple-600 font-bold">
                Docs
              </Link>
              <Link href="/demo" className="text-gray-700 hover:text-purple-600 font-medium">
                Demo
              </Link>
              <a
                href="https://github.com/m4rcel-lol/NoCSS"
                className="text-gray-700 hover:text-purple-600 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Documentation Content */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">
              Documentation
            </h1>

            {/* Table of Contents */}
            <div className="mb-12 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Table of Contents
              </h2>
              <ul className="space-y-2">
                <li>
                  <a href="#how-it-works" className="text-purple-600 hover:underline font-medium">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#browser-support" className="text-purple-600 hover:underline font-medium">
                    Browser Support
                  </a>
                </li>
                <li>
                  <a href="#limitations" className="text-purple-600 hover:underline font-medium">
                    Limitations
                  </a>
                </li>
                <li>
                  <a href="#caching" className="text-purple-600 hover:underline font-medium">
                    Caching & CDN
                  </a>
                </li>
                <li>
                  <a href="#versioning" className="text-purple-600 hover:underline font-medium">
                    Versioning
                  </a>
                </li>
                <li>
                  <a href="#security" className="text-purple-600 hover:underline font-medium">
                    Security & Privacy
                  </a>
                </li>
              </ul>
            </div>

            {/* How It Works */}
            <section id="how-it-works" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p>
                  NoCSS is a custom-written stylesheet that explicitly sets CSS properties to browser-default values, recreating the unstyled look of a page with no CSS.
                </p>
                <p>
                  The strategy is simple but powerful:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Apply universal selector <code className="bg-gray-100 px-2 py-1 rounded">*</code> with <code className="bg-gray-100 px-2 py-1 rounded">!important</code> to clear common author styling regardless of specificity</li>
                  <li>Set explicit default values with <code className="bg-gray-100 px-2 py-1 rounded">!important</code> for root, body, headings, lists, tables, and form elements</li>
                  <li>Include pseudo-elements <code className="bg-gray-100 px-2 py-1 rounded">::before</code> and <code className="bg-gray-100 px-2 py-1 rounded">::after</code></li>
                  <li>Restore correct display types for block, inline, and table elements</li>
                  <li>Add specific rules for common elements (links, headings, lists, etc.)</li>
                </ol>
                <div className="bg-gray-900 text-white p-4 rounded-lg mt-4 overflow-x-auto">
                  <code className="text-sm">
                    {`*, *::before, *::after {
  background: transparent !important;
  margin: 0 !important;
  padding: 0 !important;
  /* ... explicit browser-default values ... */
}`}
                  </code>
                </div>
              </div>
            </section>

            {/* Browser Support */}
            <section id="browser-support" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Browser Support
              </h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p>
                  NoCSS uses only standard CSS properties with explicit values, so it works in all browsers:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Chrome/Edge:</strong> All modern versions</li>
                  <li><strong>Firefox:</strong> All modern versions</li>
                  <li><strong>Safari:</strong> All modern versions</li>
                  <li><strong>Opera:</strong> All modern versions</li>
                </ul>
                <p className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <strong>Note:</strong> Since NoCSS uses explicit property values rather than relying on special CSS keywords, it has broad browser compatibility.
                </p>
              </div>
            </section>

            {/* Limitations */}
            <section id="limitations" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Limitations
              </h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p>
                  While NoCSS is powerful, it has some limitations you should be aware of:
                </p>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                    <h3 className="font-bold text-gray-900 mb-2">
                      1. Inline Styles
                    </h3>
                    <p>
                      Inline styles with <code className="bg-white px-2 py-1 rounded">!important</code> will still take precedence over NoCSS. Regular inline styles are overridden. For example:
                    </p>
                    <code className="block bg-gray-900 text-white p-2 rounded mt-2 text-sm">
                      {`<div style="color: red !important;">Text</div>`}
                    </code>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                    <h3 className="font-bold text-gray-900 mb-2">
                      2. JavaScript-Applied Styles
                    </h3>
                    <p>
                      Styles applied dynamically via JavaScript after NoCSS loads may not be fully overridden, especially if they use inline styles or high-specificity selectors.
                    </p>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                    <h3 className="font-bold text-gray-900 mb-2">
                      3. Shadow DOM
                    </h3>
                    <p>
                      Styles within Shadow DOM (used by web components) cannot be affected by external stylesheets like NoCSS.
                    </p>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                    <h3 className="font-bold text-gray-900 mb-2">
                      4. Browser Differences
                    </h3>
                    <p>
                      User-agent styles differ between browsers. A page with NoCSS applied will look slightly different in Chrome vs. Firefox vs. Safari.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Caching & CDN */}
            <section id="caching" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Caching & CDN
              </h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p>
                  NoCSS is designed to be CDN-friendly with optimal caching headers:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">Content-Type: text/css; charset=utf-8</code>
                  </li>
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">Cache-Control: public, max-age=31536000, immutable</code> (1 year)
                  </li>
                  <li>
                    <code className="bg-gray-100 px-2 py-1 rounded">Access-Control-Allow-Origin: *</code> (CORS enabled)
                  </li>
                </ul>
                <p className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <strong>Best Practice:</strong> Use versioned filenames (e.g., <code className="bg-white px-2 py-1 rounded">/no.v1.min.css</code>) for production to ensure immutable caching works correctly. When you need to update, release a new version with a new filename.
                </p>
              </div>
            </section>

            {/* Versioning */}
            <section id="versioning" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Versioning
              </h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p>
                  NoCSS follows a versioning strategy to enable immutable caching:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="font-mono text-sm">
                    <strong>Latest:</strong> <code>/no.css</code> (may change)<br />
                    <strong>Versioned:</strong> <code>/no.v1.min.css</code> (immutable)
                  </p>
                </div>
                <p>
                  <strong>When to bump versions:</strong>
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Create a new file: <code className="bg-gray-100 px-2 py-1 rounded">/no.v2.css</code> and <code className="bg-gray-100 px-2 py-1 rounded">/no.v2.min.css</code></li>
                  <li>Update <code className="bg-gray-100 px-2 py-1 rounded">/no.css</code> to the new version</li>
                  <li>Update documentation and examples</li>
                  <li>Users on old versions continue to work (cached)</li>
                  <li>New users get the latest version</li>
                </ol>
                <p className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <strong>Recommendation:</strong> Always use versioned URLs in production (<code className="bg-white px-2 py-1 rounded">/no.v1.min.css</code>) to avoid breaking changes and leverage long-term caching.
                </p>
              </div>
            </section>

            {/* Security & Privacy */}
            <section id="security" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Security & Privacy
              </h2>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <h3 className="font-bold text-gray-900 mb-2">✅ Safe to Use</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>NoCSS is a pure CSS file with no JavaScript</li>
                    <li>No data collection or tracking</li>
                    <li>No cookies or external requests</li>
                    <li>Open source and auditable</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <h3 className="font-bold text-gray-900 mb-2">⚠️ Bookmarklet Warning</h3>
                  <p>
                    If using the bookmarklet version, be aware:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Bookmarklets execute JavaScript in the context of the current page</li>
                    <li>Do not use on sensitive pages (banking, email, etc.)</li>
                    <li>Only use on pages you trust</li>
                    <li>Review the bookmarklet code before using it</li>
                  </ul>
                </div>

                <p>
                  For security issues or vulnerability reports, please see our{' '}
                  <a
                    href="https://github.com/m4rcel-lol/NoCSS/blob/main/SECURITY.md"
                    className="text-purple-600 hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SECURITY.md
                  </a>{' '}
                  file for responsible disclosure guidelines.
                </p>
              </div>
            </section>

            {/* Back to Home */}
            <div className="mt-12 pt-8 border-t text-center">
              <Link
                href="/"
                className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-700 transition"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
