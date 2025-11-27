import { test, expect } from '@playwright/test';

test.describe('Contact Page', () => {
  test('should load contact page successfully', async ({ page }) => {
    await page.goto('/contact');
    
    // Check page title
    await expect(page).toHaveTitle(/Contact/i);
    
    // Check main heading
    await expect(page.getByRole('heading', { name: /Contact Find Your Light Psychiatry/i })).toBeVisible();
    
    // Check form is present
    await expect(page.getByRole('textbox', { name: /name/i })).toBeVisible();
    await expect(page.getByRole('textbox', { name: /email/i })).toBeVisible();
  });

  test('should validate required fields', async ({ page }) => {
    await page.goto('/contact');
    
    // Try to submit without filling required fields
    const submitButton = page.getByRole('button', { name: /request appointment/i });
    await submitButton.click();
    
    // Check HTML5 validation
    const nameInput = page.getByLabel(/name/i);
    await expect(nameInput).toHaveAttribute('required');
  });

  test('should submit form with valid data', async ({ page }) => {
    await page.goto('/contact');
    
    // Mock API response
    await page.route('/api/contact', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true, message: 'Thank you for your request.' }),
      });
    });
    
    // Fill form
    await page.getByLabel(/name/i).fill('John Doe');
    await page.getByLabel(/date of birth/i).fill('1990-01-01');
    await page.getByLabel(/email/i).fill('john@example.com');
    await page.getByLabel(/message/i).fill('Test message');
    
    // Submit
    await page.getByRole('button', { name: /request appointment/i }).click();
    
    // Check for success message
    await expect(page.getByText(/thank you/i)).toBeVisible({ timeout: 5000 });
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/contact');
    
    // Check that form is still accessible
    await expect(page.getByRole('textbox', { name: /name/i })).toBeVisible();
  });
});










