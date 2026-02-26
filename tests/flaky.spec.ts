import { test, expect } from '@playwright/test';

test('Flaky test example', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Random delay
  const randomDelay = Math.floor(Math.random() * 3000);
  await page.waitForTimeout(randomDelay);

  // Intentionally fragile assertion
  await expect(page.locator('h1')).toHaveText('This heading does not exist');
});