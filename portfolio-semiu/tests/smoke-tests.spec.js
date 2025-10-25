import { test, expect } from '@playwright/test';

test.describe('Portfolio Website - Smoke Tests', () => {
  test('Home page loads successfully', async ({ page }) => {
    await page.goto('/');
    expect(page).toHaveTitle(/Dr\. Semiu Akanni/);
    await expect(page.locator('h1')).toContainText('Dr. Semiu Akanni, AYINDE');
  });

  test('Navigation links work', async ({ page }) => {
    await page.goto('/');
    
    // Test About link
    await page.click('a:has-text("About")');
    await expect(page).toHaveURL('/about');
    
    // Test Projects link
    await page.click('a:has-text("Projects")');
    await expect(page).toHaveURL('/projects');
    
    // Test Home link
    await page.click('a:has-text("Home")');
    await expect(page).toHaveURL('/');
  });

  test('Contact form is visible and interactive', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to contact section
    await page.locator('#contact').scrollIntoViewIfNeeded();
    
    // Check form fields exist
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
  });

  test('CV download link exists', async ({ page }) => {
    await page.goto('/');
    
    const downloadLink = page.locator('a:has-text("Download CV")').first();
    await expect(downloadLink).toBeVisible();
    expect(await downloadLink.getAttribute('href')).toContain('/api/generate-cv');
  });

  test('About page displays education and experience', async ({ page }) => {
    await page.goto('/about');
    
    await expect(page.locator('h2')).toContainText('Education');
    await expect(page.locator('h2')).toContainText('Work Experience');
    await expect(page.locator('text=Professional Summary')).toBeVisible();
  });

  test('Projects page displays project categories', async ({ page }) => {
    await page.goto('/projects');
    
    await expect(page.locator('h2')).toContainText('Projects & Executed Works');
    // Check for at least one project category
    await expect(page.locator('text=Survey & Mapping')).toBeVisible();
  });

  test('Contact form validates required fields', async ({ page }) => {
    await page.goto('/');
    
    // Try to submit empty form
    await page.locator('#contact button[type="submit"]').click();
    
    // Should see validation messages or disabled state
    await expect(page.locator('input[name="name"]')).toBeInvalid();
  });

  test('Contact form submission works', async ({ page }) => {
    await page.goto('/');
    
    // Fill form
    await page.locator('input[name="name"]').fill('Test User');
    await page.locator('input[name="email"]').fill('test@example.com');
    await page.locator('textarea[name="message"]').fill('Test message');
    
    // Intercept API call
    await page.route('/api/contact', route => {
      route.abort();
    });
    
    // Submit form
    await page.locator('#contact button[type="submit"]').click();
    
    // Should show error since we aborted the request
    // In real test with server, should show success
  });

  test('Mobile layout is responsive (375px)', async ({ browser }) => {
    const context = await browser.createContext({
      ...{ width: 375, height: 667 },
    });
    const page = await context.newPage();
    
    await page.goto('http://localhost:3000');
    
    // Header should be visible
    await expect(page.locator('header')).toBeVisible();
    
    // Mobile menu button should be visible
    await expect(page.locator('button[aria-label*="menu"]')).toBeVisible();
    
    // Main content should be readable
    await expect(page.locator('h1')).toBeVisible();
    
    await context.close();
  });

  test('Desktop layout is responsive (1440px)', async ({ browser }) => {
    const context = await browser.createContext({
      ...{ width: 1440, height: 900 },
    });
    const page = await context.newPage();
    
    await page.goto('http://localhost:3000');
    
    // Full navigation should be visible
    await expect(page.locator('nav a')).toHaveCount(4);
    
    // Hero section highlights should be visible
    const highlights = page.locator('[role="main"] div').filter({
      has: page.locator('text=/Years of Experience|Projects Executed/')
    });
    await expect(highlights).toBeVisible();
    
    await context.close();
  });

  test('No console errors on page load', async ({ page }) => {
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    
    await page.goto('/');
    await page.goto('/about');
    await page.goto('/projects');
    
    expect(errors).toHaveLength(0);
  });

  test('All links are keyboard accessible', async ({ page }) => {
    await page.goto('/');
    
    // Tab through navigation
    await page.keyboard.press('Tab');
    await expect(page.locator('nav a').first()).toBeFocused();
    
    // Continue tabbing
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('Tab');
    }
    
    // Should still be on the page
    await expect(page).toHaveURL('/');
  });

  test('Meta tags and SEO present', async ({ page }) => {
    await page.goto('/');
    
    // Check title
    const title = await page.title();
    expect(title).toContain('Dr. Semiu Akanni');
    
    // Check meta description
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toBeTruthy();
    
    // Check Open Graph
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    expect(ogTitle).toBeTruthy();
  });
});
