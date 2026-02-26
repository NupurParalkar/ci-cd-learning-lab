import { test, expect } from '@playwright/test';

test('Invalid login should show error message', async ({ page }) => {
  // Navigate to SauceDemo
  await page.goto('https://www.saucedemo.com/');

  // Verify title
  await expect(page).toHaveTitle(/Swag Labs/);

  // Enter invalid username
  await page.locator('#user-name').fill('invalid_user');

  // Enter invalid password
  await page.locator('#password').fill('wrong_password');

  // Click login
  await page.locator('#login-button').click();

  // Verify error message is visible
  const errorMessage = page.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();
});