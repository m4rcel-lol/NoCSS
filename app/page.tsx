'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <Image
                src="/Untitled283_20260211071004.png"
                alt="NoCSS Logo"
                width={40}
                height={40}
                className="transition-transform group-hover:scale-110"
              />
              <span className="text-2xl font-bold text-gray-900">
                NoCSS
              </span>
            </Link>
            <div className="flex items-center space-x-6">
              <a href="#usage" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Usage
              </a>
              <Link href="/docs" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Docs
              </Link>
              <Link href="/demo" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Demo
              </Link>
              <a
                href="https://github.com/m4rcel-lol/NoCSS"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
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
      <section className="px-4 py-20 sm:py-28">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/Untitled283_20260211071004.png"
              alt="NoCSS Logo"
              width={160}
              height={160}
              className="drop-shadow-2xl"
              priority
            />
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 tracking-tight">
            Make any page look like it has{' '}
            <span className="underline decoration-yellow-400 decoration-4 underline-offset-4">no CSS</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Drop-in stylesheet that strips any webpage back to browser default appearance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/no.css"
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
              download
            >
              Get /no.css
            </a>
            <Link
              href="/demo"
              className="bg-gray-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-600 transition-all shadow-lg hover:shadow-xl border border-gray-600"
            >
              Try Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section id="usage" className="px-4 py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
            Usage
          </h2>

          {/* Link Tag */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              1. Add to your HTML
            </h3>
            <p className="text-gray-600 mb-4">
              Include the stylesheet in your HTML <code className="bg-gray-100 px-2 py-1 rounded text-sm">&lt;head&gt;</code> tag:
            </p>
            <div className="bg-gray-900 rounded-xl p-6 text-white font-mono text-sm overflow-x-auto shadow-inner">
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
            <div className="bg-gray-100 rounded-xl p-4 flex items-center justify-between border border-gray-200">
              <code className="text-sm text-gray-700 overflow-x-auto flex-1 mr-4">
                {bookmarkletCode}
              </code>
              <button
                onClick={() => copyToClipboard(bookmarkletCode)}
                className="bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap"
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
            <div className="bg-gray-900 rounded-xl p-6 text-white font-mono text-sm overflow-x-auto shadow-inner">
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
            <div className="bg-gray-900 rounded-xl p-6 text-white font-mono text-sm overflow-x-auto shadow-inner">
              <code>{`<link rel="stylesheet" href="${domain}/no.v1.min.css">`}</code>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Demo Preview */}
      <section className="px-4 py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            See It In Action
          </h2>
          <p className="text-center text-gray-600 mb-8 text-lg">
            Check out our interactive demo page to see how NoCSS transforms styled pages back to browser defaults.
          </p>
          <div className="flex justify-center">
            <Link
              href="/demo"
              className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
            >
              View Interactive Demo →
            </Link>
          </div>
        </div>
      </section>

      {/* Features/How it Works */}
      <section className="px-4 py-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Custom Defaults</h3>
              <p className="text-gray-600">
                Hand-written CSS that explicitly sets every property to browser-default values
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Universal Selectors</h3>
              <p className="text-gray-600">
                Applies to all elements including pseudo-elements to ensure complete coverage
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">CDN Ready</h3>
              <p className="text-gray-600">
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
          <p className="text-xl text-gray-400 mb-8">
            Deploy your own instance of NoCSS to Vercel with one click
          </p>
          <a
            href="https://vercel.com/new/clone?repository-url=https://github.com/m4rcel-lol/NoCSS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
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
            <div className="mb-6 md:mb-0 flex items-center space-x-3">
              <Image
                src="/Untitled283_20260211071004.png"
                alt="NoCSS Logo"
                width={32}
                height={32}
                className="invert"
              />
              <div>
                <span className="text-2xl font-bold">NoCSS</span>
                <p className="text-gray-500 mt-1">
                  Make any page look like it has no CSS
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-6 mb-2">
                <a
                  href="https://github.com/m4rcel-lol/NoCSS"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <Link href="/docs" className="text-gray-400 hover:text-white transition-colors">
                  Docs
                </Link>
                <a
                  href="https://github.com/m4rcel-lol/NoCSS/blob/main/LICENSE"
                  className="text-gray-400 hover:text-white transition-colors"
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
