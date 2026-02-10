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

  test('demo page toggle functionality', async ({ page }) => {
    await page.goto('/demo');
    
    // Check initial state
    await expect(page.getByText('NoCSS Status: ❌ Not Applied')).toBeVisible();
    
    // Wait for iframe to load
    await page.waitForTimeout(500);
    
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

  test('visual comparison - demo page before and after NoCSS', async ({ page }) => {
    await page.goto('/demo');
    
    // Wait for iframe to load
    await page.waitForTimeout(1000);
    
    // Get iframe element
    const iframe = page.frameLocator('iframe#demo-iframe');
    
    // Verify sample site is loaded with styled content
    await expect(iframe.locator('h1').first()).toBeVisible();
    
    // Take screenshot before
    const beforeScreenshot = await page.screenshot({ fullPage: true });
    expect(beforeScreenshot).toBeTruthy();
    
    // Click Apply NoCSS button
    await page.getByRole('button', { name: /Apply NoCSS/i }).click();
    
    // Wait for styles to be applied
    await page.waitForTimeout(500);
    
    // Take screenshot after
    const afterScreenshot = await page.screenshot({ fullPage: true });
    expect(afterScreenshot).toBeTruthy();
    
    // Screenshots should be different
    expect(beforeScreenshot.length).not.toBe(afterScreenshot.length);
  });
});
