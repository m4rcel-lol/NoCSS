# Contributing to NoCSS

Thank you for your interest in contributing to NoCSS! We welcome contributions from the community.

## Code of Conduct

Be respectful, inclusive, and constructive. We're all here to learn and improve.

## How to Contribute

### Reporting Bugs

1. Check if the issue already exists
2. Create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs. actual behavior
   - Browser and version
   - Screenshots if applicable

### Suggesting Features

1. Open an issue with the `enhancement` label
2. Describe the feature and use case
3. Explain why it would be valuable
4. Consider implementation details

### Submitting Pull Requests

1. **Fork the repository**
   ```bash
   git clone https://github.com/m4rcel-lol/NoCSS.git
   cd NoCSS
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow existing code style
   - Write clear commit messages
   - Add tests if applicable
   - Update documentation

4. **Test your changes**
   ```bash
   npm install
   npm run lint
   npm run build
   npm run test:e2e
   ```

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**
   - Provide a clear description
   - Reference related issues
   - Include screenshots for UI changes
   - Ensure CI passes

## Development Setup

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/NoCSS.git
cd NoCSS

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Project Structure

```
NoCSS/
├── app/              # Next.js app directory
│   ├── page.tsx      # Landing page
│   ├── demo/         # Demo page
│   └── docs/         # Documentation page
├── public/           # Static assets
│   ├── no.css        # Main stylesheet
│   └── no.v1.min.css # Versioned minified
├── examples/         # Example sites
├── tests/            # Playwright tests
└── .github/          # CI/CD workflows
```

## Code Style

### TypeScript/JavaScript

- Use TypeScript strict mode
- Follow ESLint rules
- Use Prettier for formatting
- Prefer functional components
- Use meaningful variable names

### CSS

- Use Tailwind CSS for landing site
- Follow BEM naming for custom CSS
- Maintain no.css as custom-written defaults
- Comment complex rules

### Commits

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Test changes
- `chore:` Build/tooling changes

Examples:
```
feat: add SRI hash generator
fix: correct CORS headers for versioned files
docs: update browser support section
```

## Testing

### Running Tests

```bash
# Run all tests
npm run test:e2e

# Run specific test
npx playwright test visual.spec.ts

# Run with UI
npx playwright test --ui

# Debug mode
npx playwright test --debug
```

### Writing Tests

- Place tests in `tests/` directory
- Use descriptive test names
- Test both success and failure cases
- Include visual regression tests for UI changes

## Documentation

When making changes:

1. Update README.md if needed
2. Update docs page for user-facing changes
3. Add JSDoc comments for functions
4. Update CHANGELOG.md

## Versioning

NoCSS follows semantic versioning:

- **Major (v2.0.0)**: Breaking changes
- **Minor (v1.1.0)**: New features, backward compatible
- **Patch (v1.0.1)**: Bug fixes

When bumping versions:

1. Create new versioned files (e.g., `no.v2.css`)
2. Update `no.css` to latest version
3. Update documentation
4. Add migration guide if breaking

## Release Process

1. Update version in `package.json`
2. Update CHANGELOG.md
3. Create versioned CSS files
4. Run full test suite
5. Create GitHub release with notes
6. Deploy to Vercel

## Questions?

- Open an issue for questions
- Check existing issues and PRs
- Read the documentation

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

Thank you for contributing to NoCSS! 🎉
