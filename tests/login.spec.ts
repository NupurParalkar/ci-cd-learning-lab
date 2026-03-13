import { test, expect } from '@playwright/test';
import path from 'path';
import { LoginPage } from '../pages/LoginPage';

test('@smoke @ui Invalid login should show error', async ({ page }) => {
  const loginPage = new LoginPage(page);

  const filePath = `file://${path.resolve('demo-app/login.html')}`;

  await loginPage.navigate(filePath);

  await loginPage.enterUsername('wrong');
  await loginPage.enterPassword('wrong');
  await loginPage.clickLogin();

  await expect(await loginPage.getErrorMessage()).toBeVisible();

});
