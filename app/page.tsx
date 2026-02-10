'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [copied, setCopied] = useState(false);
  const domain = typeof window !== 'undefined' 
    ? window.location.origin 
    : 'https://nocss.vercel.app';
  
  const bookmarkletCode = `javascript:(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='${domain}/no.css';document.head.appendChild(l);})();`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                NoCSS
              </span>
            </div>
            <div className="flex space-x-6">
              <a href="#usage" className="text-gray-700 hover:text-purple-600 font-medium">
                Usage
              </a>
              <Link href="/docs" className="text-gray-700 hover:text-purple-600 font-medium">
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

      {/* Hero Section */}
      <section className="px-4 py-20 sm:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6">
            Make any page look like it has{' '}
            <span className="underline decoration-yellow-400">no CSS</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Drop-in stylesheet that reverts any webpage to browser default appearance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/no.css"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg"
              download
            >
              Get /no.css
            </a>
            <Link
              href="/demo"
              className="bg-purple-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-900 transition shadow-lg"
            >
              Try Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section id="usage" className="px-4 py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Usage
          </h2>

          {/* Link Tag */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              1. Add to your HTML
            </h3>
            <p className="text-gray-600 mb-4">
              Include the stylesheet in your HTML <code className="bg-gray-100 px-2 py-1 rounded">&lt;head&gt;</code> tag:
            </p>
            <div className="bg-gray-900 rounded-lg p-6 text-white font-mono text-sm overflow-x-auto">
              <code>{`<link rel="stylesheet" href="${domain}/no.css">`}</code>
            </div>
          </div>

          {/* Bookmarklet */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              2. Use as a Bookmarklet
            </h3>
            <p className="text-gray-600 mb-4">
              Click the button below to copy the bookmarklet code. Create a new bookmark in your browser and paste this code as the URL:
            </p>
            <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-between">
              <code className="text-sm text-gray-700 overflow-x-auto flex-1 mr-4">
                {bookmarkletCode}
              </code>
              <button
                onClick={() => copyToClipboard(bookmarkletCode)}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition whitespace-nowrap"
              >
                {copied ? '✓ Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          {/* JS Injector */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              3. Inject with JavaScript
            </h3>
            <p className="text-gray-600 mb-4">
              Add the stylesheet dynamically using JavaScript:
            </p>
            <div className="bg-gray-900 rounded-lg p-6 text-white font-mono text-sm overflow-x-auto">
              <pre>{`const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '${domain}/no.css';
document.head.appendChild(link);`}</pre>
            </div>
          </div>

          {/* Versioned URL */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              4. Use Versioned URL (Recommended for Production)
            </h3>
            <p className="text-gray-600 mb-4">
              For immutable caching, use the versioned URL:
            </p>
            <div className="bg-gray-900 rounded-lg p-6 text-white font-mono text-sm overflow-x-auto">
              <code>{`<link rel="stylesheet" href="${domain}/no.v1.min.css">`}</code>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Demo Preview */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            See It In Action
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Check out our interactive demo page to see how NoCSS transforms styled pages back to browser defaults.
          </p>
          <div className="flex justify-center">
            <Link
              href="/demo"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition shadow-lg"
            >
              View Interactive Demo →
            </Link>
          </div>
        </div>
      </section>

      {/* Features/How it Works */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-2">Revert Strategy</h3>
              <p className="text-gray-700">
                Uses CSS <code className="bg-white px-2 py-1 rounded">all: revert !important</code> to force styles back to browser defaults
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Universal Selectors</h3>
              <p className="text-gray-700">
                Applies to all elements including pseudo-elements to ensure complete coverage
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">CDN Ready</h3>
              <p className="text-gray-700">
                Served with immutable caching headers and CORS support for global use
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deploy to Vercel */}
      <section className="px-4 py-16 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Deploy Your Own</h2>
          <p className="text-xl text-gray-300 mb-8">
            Deploy your own instance of NoCSS to Vercel with one click
          </p>
          <a
            href="https://vercel.com/new/clone?repository-url=https://github.com/m4rcel-lol/NoCSS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src="https://vercel.com/button"
              alt="Deploy with Vercel"
              className="h-12"
            />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold">NoCSS</span>
              <p className="text-gray-400 mt-2">
                Make any page look like it has no CSS
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-6 mb-2">
                <a
                  href="https://github.com/m4rcel-lol/NoCSS"
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <Link href="/docs" className="text-gray-400 hover:text-white">
                  Docs
                </Link>
                <a
                  href="https://github.com/m4rcel-lol/NoCSS/blob/main/LICENSE"
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  License
                </a>
              </div>
              <p className="text-gray-500 text-sm">
                © 2024 m4rcel-lol. MIT Licensed.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
