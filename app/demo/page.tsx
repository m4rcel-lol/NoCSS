'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DemoPage() {
  const [noCssApplied, setNoCssApplied] = useState(false);

  const toggleNoCSS = () => {
    const iframe = document.getElementById('demo-iframe') as HTMLIFrameElement;
    if (iframe && iframe.contentDocument) {
      if (noCssApplied) {
        // Remove NoCSS
        const link = iframe.contentDocument.getElementById('nocss-link');
        if (link) {
          link.remove();
        }
        setNoCssApplied(false);
      } else {
        // Apply NoCSS
        const link = iframe.contentDocument.createElement('link');
        link.id = 'nocss-link';
        link.rel = 'stylesheet';
        link.href = '/no.css';
        iframe.contentDocument.head.appendChild(link);
        setNoCssApplied(true);
      }
    }
  };

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
              <Link href="/docs" className="text-gray-700 hover:text-purple-600 font-medium">
                Docs
              </Link>
              <Link href="/demo" className="text-purple-600 font-bold">
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

      {/* Demo Section */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-2xl p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Interactive Demo
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Toggle the switch below to see how NoCSS transforms a fully styled page back to browser defaults.
            </p>

            {/* Toggle Controls */}
            <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-lg">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  NoCSS Status: {noCssApplied ? '✅ Applied' : '❌ Not Applied'}
                </h2>
                <p className="text-gray-600">
                  {noCssApplied
                    ? 'The page is now showing browser default styles'
                    : 'The page is showing custom styles'}
                </p>
              </div>
              <button
                onClick={toggleNoCSS}
                className={`px-8 py-3 rounded-lg font-bold text-lg transition shadow-lg ${
                  noCssApplied
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
              >
                {noCssApplied ? 'Remove NoCSS' : 'Apply NoCSS'}
              </button>
            </div>

            {/* Demo Iframe */}
            <div className="border-4 border-gray-300 rounded-lg overflow-hidden shadow-inner">
              <iframe
                id="demo-iframe"
                src="/examples/sample-site/index.html"
                className="w-full h-[800px]"
                title="Demo Site"
              />
            </div>

            {/* Instructions */}
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                💡 What's Happening?
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Before:</strong> The sample page has custom CSS with colors, layouts, fonts, and styling
                </li>
                <li>
                  <strong>After:</strong> NoCSS uses <code className="bg-white px-2 py-1 rounded">all: revert !important</code> to force everything back to browser defaults
                </li>
                <li>
                  All custom colors, spacing, typography, and layouts are removed
                </li>
                <li>
                  The page looks like raw HTML with only user-agent (browser) styling
                </li>
              </ul>
            </div>

            {/* Back to Home */}
            <div className="mt-8 text-center">
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
