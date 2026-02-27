import { test, expect } from '@playwright/test';
import path from 'path';

test('Invalid login should show error', async ({ page }) => {
  const filePath = `file://${path.resolve('demo-app/login.html')}`;

  await page.goto(filePath);

  await expect(page).toHaveTitle(/Demo Login/);

  await page.fill('#username', 'wrong');
  await page.fill('#password', 'wrong');
  await page.click('#login');

  await expect(page.locator('#error')).toBeVisible();
});