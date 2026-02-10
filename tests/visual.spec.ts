import { test, expect } from '@playwright/test';

test.describe('NoCSS Visual Tests', () => {
  test('should serve no.css with correct headers', async ({ page }) => {
    const response = await page.goto('/no.css');
    expect(response).not.toBeNull();
    expect(response!.status()).toBe(200);

    const headers = response!.headers();
    expect(headers['content-type']).toContain('text/css');
    expect(headers['access-control-allow-origin']).toBe('*');
    expect(headers['cache-control']).toContain('immutable');
  });

  test('should serve no.v1.min.css with correct headers', async ({ page }) => {
    const response = await page.goto('/no.v1.min.css');
    expect(response).not.toBeNull();
    expect(response!.status()).toBe(200);

    const headers = response!.headers();
    expect(headers['content-type']).toContain('text/css');
    expect(headers['access-control-allow-origin']).toBe('*');
    expect(headers['cache-control']).toContain('immutable');
  });

  test('should display landing page correctly', async ({ page }) => {
    await page.goto('/');
    
    // Check for key elements
    await expect(page.getByText('Make any page look like it has')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Get /no.css' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Try Demo' })).toBeVisible();
  });

  test('should display docs page correctly', async ({ page }) => {
    await page.goto('/docs');
    
    // Check for documentation sections
    await expect(page.getByRole('heading', { name: 'Documentation' })).toBeVisible();
    await expect(page.getByText('How It Works')).toBeVisible();
    await expect(page.getByText('Browser Support')).toBeVisible();
    await expect(page.getByText('Limitations')).toBeVisible();
  });

  test('visual regression - sample site before and after NoCSS', async ({
    page,
  }) => {
    // Navigate to the sample site
    await page.goto('/examples/sample-site/index.html');

    // Wait for page to fully load
    await page.waitForLoadState('networkidle');

    // Take screenshot BEFORE applying NoCSS
    const beforeScreenshot = await page.screenshot({
      fullPage: true,
    });
    expect(beforeScreenshot).toBeTruthy();

    // Inject NoCSS into the page
    await page.evaluate(() => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/no.css';
      document.head.appendChild(link);
    });

    // Wait a moment for styles to apply
    await page.waitForTimeout(500);

    // Take screenshot AFTER applying NoCSS
    const afterScreenshot = await page.screenshot({
      fullPage: true,
    });
    expect(afterScreenshot).toBeTruthy();

    // The screenshots should be different
    expect(beforeScreenshot.length).not.toBe(afterScreenshot.length);

    // Verify some visual changes occurred
    // Check that custom background is removed
    const bodyBg = await page.evaluate(() => {
      return window.getComputedStyle(document.body).background;
    });
    
    // After NoCSS, background should be transparent or default
    expect(bodyBg).toContain('transparent');
  });

  test('demo page toggle functionality', async ({ page }) => {
    await page.goto('/demo');
    
    // Check initial state
    await expect(page.getByText('NoCSS Status: ❌ Not Applied')).toBeVisible();
    
    // Click the toggle button
    await page.getByRole('button', { name: /Apply NoCSS/i }).click();
    
    // Wait for state change
    await page.waitForTimeout(300);
    
    // Check that status changed
    await expect(page.getByText('NoCSS Status: ✅ Applied')).toBeVisible();
    
    // Button text should change
    await expect(page.getByRole('button', { name: /Remove NoCSS/i })).toBeVisible();
  });

  test('bookmarklet copy functionality', async ({ page, context }) => {
    // Grant clipboard permissions
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    
    await page.goto('/');
    
    // Find and click the copy button
    await page.getByRole('button', { name: 'Copy' }).click();
    
    // Check that button shows "Copied!"
    await expect(page.getByRole('button', { name: '✓ Copied!' })).toBeVisible();
    
    // Verify clipboard content
    const clipboardText = await page.evaluate(() => navigator.clipboard.readText());
    expect(clipboardText).toContain('javascript:');
    expect(clipboardText).toContain('no.css');
  });
});
