'use client';

import { useState } from 'react';
import Link from 'next/link';

const sampleHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sample Site - NoCSS Demo</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      padding: 2rem;
    }
    .header {
      background: rgba(255, 255, 255, 0.95);
      padding: 1rem 2rem;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      margin-bottom: 2rem;
    }
    .nav { display: flex; justify-content: space-between; align-items: center; }
    .logo { font-size: 1.5rem; color: #667eea; font-weight: bold; }
    .hero {
      text-align: center;
      padding: 4rem 2rem;
      background: white;
      border-radius: 10px;
      margin-bottom: 2rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
    .hero h1 { font-size: 3rem; color: #667eea; margin-bottom: 1rem; }
    .hero-text { font-size: 1.2rem; color: #666; margin-bottom: 2rem; }
    .cta-button {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      padding: 1rem 2rem;
      font-size: 1.1rem;
      border-radius: 5px;
      cursor: pointer;
    }
    .content {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
    .content h2 { color: #667eea; margin-top: 2rem; margin-bottom: 1rem; font-size: 2rem; }
    .content p { margin-bottom: 1rem; color: #555; }
    form { margin: 2rem 0; }
    label { display: block; margin-top: 1rem; font-weight: 600; }
    input, textarea { display: block; width: 100%; padding: 0.5rem; margin-top: 0.25rem; border: 2px solid #ddd; border-radius: 5px; }
    button[type="submit"] { margin-top: 1rem; background: #667eea; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 5px; cursor: pointer; }
    table {
      width: 100%;
      margin: 2rem 0;
      border-collapse: collapse;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    th, td { padding: 1rem; text-align: left; border-bottom: 1px solid #ddd; }
    th { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
    ul { margin: 1rem 0 1rem 2rem; }
    li { margin-bottom: 0.5rem; }
  </style>
</head>
<body>
  <div class="header">
    <div class="nav">
      <h1 class="logo">Sample Website</h1>
    </div>
  </div>
  <div class="hero">
    <h1>Welcome to Our Sample Site</h1>
    <p class="hero-text">This demonstration page has custom styling that will be neutralized by NoCSS.</p>
    <button class="cta-button">Get Started</button>
  </div>
  <div class="content">
    <h2>About Our Service</h2>
    <p>This sample site has custom CSS styling including colors, fonts, layouts, and more.</p>
    
    <h2>Form Example</h2>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" placeholder="Enter your name">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Enter your email">
      <button type="submit">Submit</button>
    </form>
    
    <h2>Table Example</h2>
    <table>
      <thead>
        <tr><th>Name</th><th>Value</th><th>Status</th></tr>
      </thead>
      <tbody>
        <tr><td>Item 1</td><td>100</td><td>Active</td></tr>
        <tr><td>Item 2</td><td>200</td><td>Pending</td></tr>
      </tbody>
    </table>
    
    <h2>List Examples</h2>
    <ul>
      <li>First item with custom styling</li>
      <li>Second item with custom styling</li>
      <li>Third item with custom styling</li>
    </ul>
  </div>
</body>
</html>`;

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
                srcDoc={sampleHTML}
                className="w-full h-[800px]"
                title="Demo Site"
              />
            </div>

            {/* Instructions */}
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                💡 What&apos;s Happening?
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Before:</strong> The sample page has custom CSS with colors, layouts, fonts, and styling
                </li>
                <li>
                  <strong>After:</strong> NoCSS uses hand-written CSS to explicitly set every property back to browser defaults
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
