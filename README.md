# NoCSS

[![CI](https://github.com/m4rcel-lol/NoCSS/actions/workflows/ci.yml/badge.svg)](https://github.com/m4rcel-lol/NoCSS/actions/workflows/ci.yml)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/m4rcel-lol/NoCSS)

**Make any page look like it has no CSS — drop-in stylesheet**

NoCSS is a production-quality stylesheet that, when applied to any webpage, makes it look like it has no CSS. It uses hand-written CSS rules that explicitly set properties to browser-default values, stripping away author-defined styling and restoring the raw, unstyled look of HTML.

🔗 **[Live Demo](https://nocss.vercel.app)** | 📖 **[Documentation](https://nocss.vercel.app/docs)** | 🎯 **[Try Interactive Demo](https://nocss.vercel.app/demo)**

---

## ✨ Features

- 🎯 **Drop-in Solution**: Single `<link>` tag to remove all styling
- 🔄 **Custom Defaults**: Explicitly sets every property to browser-default values
- 🌍 **CDN Ready**: Optimized headers for global caching
- 🔓 **CORS Enabled**: Use on any domain
- 📦 **Zero Dependencies**: Pure CSS, no JavaScript required
- 🎨 **Bookmarklet**: One-click styling removal on any page
- ⚡ **Immutable Caching**: Versioned URLs for production use
- 🧪 **Well Tested**: Automated visual regression tests

---

## 🚀 Quick Start

### Option 1: Direct Link

Add this to your HTML `<head>`:

```html
<link rel="stylesheet" href="https://nocss.vercel.app/no.css">
```

### Option 2: Versioned URL (Recommended for Production)

For immutable caching, use the versioned URL:

```html
<link rel="stylesheet" href="https://nocss.vercel.app/no.v1.min.css">
```

### Option 3: Bookmarklet

Drag this to your bookmarks bar to apply NoCSS to any page:

```javascript
javascript:(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='https://nocss.vercel.app/no.css';document.head.appendChild(l);})();
```

### Option 4: JavaScript Injection

```javascript
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://nocss.vercel.app/no.css';
document.head.appendChild(link);
```

---

## 📖 How It Works

NoCSS is a custom-written stylesheet that explicitly sets CSS properties to browser-default values, recreating the unstyled look of a page with no CSS.

```css
*, *::before, *::after {
  background: transparent;
  margin: 0;
  padding: 0;
  /* ... explicit browser-default values ... */
}
```

This strategy:
1. Applies to all elements including pseudo-elements
2. Sets explicit default values for every common CSS property
3. Uses only standard CSS properties — no special keywords or flags needed
4. Clean, hand-written CSS that recreates the browser-default appearance

---

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome/Edge | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Opera | ✅ Full |

NoCSS uses only standard CSS properties with explicit values, providing broad browser compatibility.

---

## ⚠️ Limitations

While NoCSS is powerful, it has some limitations:

### 1. Specificity Conflicts
Author styles with higher specificity or inline styles may still override NoCSS:
```html
<div style="color: red;">Text stays red</div>
```

### 2. Shadow DOM
Styles within Shadow DOM (web components) are isolated and cannot be affected.

### 3. JavaScript-Applied Styles
Dynamically applied inline styles may not be fully overridden, especially if they use high-specificity selectors.

### 4. Browser Differences
User-agent styles differ between browsers. A page with NoCSS applied will look slightly different in Chrome vs. Firefox vs. Safari.

See the [full documentation](https://nocss.vercel.app/docs#limitations) for details.

---

## 🔧 Development

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/m4rcel-lol/NoCSS.git
cd NoCSS

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run test:e2e     # Run Playwright tests
```

### Project Structure

```
NoCSS/
├── app/                  # Next.js app directory
│   ├── page.tsx          # Landing page
│   ├── demo/page.tsx     # Interactive demo
│   └── docs/page.tsx     # Documentation
├── public/               # Static assets
│   ├── no.css            # Main stylesheet (latest)
│   └── no.v1.min.css     # Versioned minified
├── examples/             # Example sites
│   └── sample-site/      # Demo HTML page
├── tests/                # Playwright tests
│   └── visual.spec.ts    # Visual regression tests
└── .github/workflows/    # CI/CD
```

---

## 📦 Versioning & Caching

NoCSS uses versioned filenames for immutable caching:

- **Latest**: `/no.css` (may change, shorter cache)
- **Versioned**: `/no.v1.min.css` (immutable, 1-year cache)

### Cache Headers

```
Content-Type: text/css; charset=utf-8
Cache-Control: public, max-age=31536000, immutable
Access-Control-Allow-Origin: *
```

### Bumping Versions

When releasing a new version:

1. Create new versioned files: `no.v2.css` and `no.v2.min.css`
2. Update `no.css` to point to the latest version
3. Update documentation and examples
4. Tag the release in Git
5. Deploy to Vercel

Users on old versions continue to work (cached), while new users get the latest.

### Subresource Integrity (SRI)

For additional security, you can use SRI hashes:

```html
<link 
  rel="stylesheet" 
  href="https://nocss.vercel.app/no.v1.min.css"
  integrity="sha384-YOUR_HASH_HERE"
  crossorigin="anonymous"
>
```

Generate SRI hashes at [srihash.org](https://www.srihash.org/).

---

## 🔒 Security

NoCSS is designed with security in mind:

- ✅ Pure CSS, no JavaScript execution
- ✅ No data collection or tracking
- ✅ No cookies or external requests
- ✅ Open source and auditable

### Bookmarklet Warning

⚠️ **Bookmarklets execute JavaScript**. Only use on pages you trust. Do not use on:
- Banking or financial sites
- Email or messaging platforms  
- Pages with sensitive information

For more details, see [SECURITY.md](SECURITY.md).

---

## 🧪 Testing

NoCSS includes comprehensive automated tests:

```bash
# Run all tests
npm run test:e2e

# Run with UI
npx playwright test --ui

# Debug mode
npx playwright test --debug
```

Tests include:
- Header validation (Content-Type, CORS, Cache-Control)
- Visual regression (before/after screenshots)
- Landing page rendering
- Demo page toggle functionality
- Bookmarklet copy functionality

---

## 🚀 Deploy to Vercel

Deploy your own instance of NoCSS:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/m4rcel-lol/NoCSS)

The project includes:
- `vercel.json` for static file headers
- `next.config.js` with header configuration
- Optimized build settings
- Automatic deployments on push

---

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Quick Contribution Steps

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test
4. Commit: `git commit -m 'feat: add amazing feature'`
5. Push: `git push origin feature/amazing-feature`
6. Open a Pull Request

---

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

Copyright (c) 2024 m4rcel-lol

---

## 🙏 Acknowledgments

- Inspired by CSS resets and normalize.css
- Built with [Next.js](https://nextjs.org/)
- Tested with [Playwright](https://playwright.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

## 📞 Support

- 🐛 **Bug Reports**: [Open an issue](https://github.com/m4rcel-lol/NoCSS/issues)
- 💡 **Feature Requests**: [Open an issue](https://github.com/m4rcel-lol/NoCSS/issues)
- 📖 **Documentation**: [Read the docs](https://nocss.vercel.app/docs)
- 🔒 **Security**: See [SECURITY.md](SECURITY.md)

---

## 🌟 Star History

If you find NoCSS useful, please consider starring the repository!

---

**Made with ❤️ by [m4rcel-lol](https://github.com/m4rcel-lol)**