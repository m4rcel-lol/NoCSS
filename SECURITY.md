# Security Policy

## Reporting a Vulnerability

We take the security of NoCSS seriously. If you discover a security vulnerability, please follow these steps:

### Reporting Process

1. **Do NOT** open a public GitHub issue for security vulnerabilities
2. Email security concerns to: [Create an issue with "[SECURITY]" prefix if no direct email is available]
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

### What to Expect

- **Initial Response**: Within 48 hours
- **Status Update**: Within 7 days
- **Fix Timeline**: Depends on severity
  - Critical: 24-48 hours
  - High: 7 days
  - Medium: 30 days
  - Low: 90 days

### Disclosure Policy

- We will acknowledge your report within 48 hours
- We will provide regular updates on our progress
- We will credit you in our changelog (unless you prefer to remain anonymous)
- We will coordinate public disclosure timing with you

## Security Notes

### NoCSS Stylesheet

- **No Data Collection**: The `no.css` file is a pure CSS stylesheet that does not collect any data
- **No JavaScript**: Contains no JavaScript code or executable content
- **No External Requests**: Does not load resources from external domains
- **No Cookies**: Does not set or read cookies
- **Open Source**: All code is publicly auditable

### Bookmarklet Usage

If you use the NoCSS bookmarklet, be aware:

⚠️ **Security Warnings**:

- Bookmarklets execute JavaScript in the context of the current page
- They have access to page content and can modify the DOM
- **DO NOT** use bookmarklets on sensitive pages such as:
  - Banking or financial sites
  - Email or messaging platforms
  - Sites with confidential information
  - Login pages with password fields

✅ **Safe Usage**:

- Only use on pages you trust
- Review the bookmarklet code before using it
- Use on public websites or personal development sites
- Test in a sandbox environment first

### Browser Extensions

If you create a browser extension based on NoCSS:

- Follow browser extension security best practices
- Request only necessary permissions
- Do not inject scripts on sensitive domains
- Provide clear privacy policy
- Submit for security review

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x     | :white_check_mark: |

## Known Limitations (Not Security Issues)

These are design limitations, not security vulnerabilities:

1. **Cannot Override Inline !important**: CSS cannot override inline styles with `!important`
2. **Shadow DOM**: Cannot penetrate Shadow DOM boundaries
3. **Dynamic JS Styles**: May not fully override dynamically applied styles
4. **Browser Differences**: User-agent styles vary by browser

## Best Practices for Users

1. **Use HTTPS**: Always load NoCSS over HTTPS
2. **Verify Source**: Ensure you're loading from official domain
3. **Check SRI**: Use Subresource Integrity when possible
4. **Review Changes**: Understand what NoCSS does before applying
5. **Test First**: Try on non-production sites first

## Responsible Disclosure

We believe in responsible disclosure and will work with security researchers to:

- Verify and reproduce reported vulnerabilities
- Develop and test fixes
- Coordinate disclosure timing
- Provide credit where appropriate

Thank you for helping keep NoCSS and its users safe!
