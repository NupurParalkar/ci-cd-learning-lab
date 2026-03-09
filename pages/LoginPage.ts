import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(filePath: string) {
    await this.page.goto(filePath);
  }

  async enterUsername(username: string) {
    await this.page.fill('#username', username);
  }

  async enterPassword(password: string) {
    await this.page.fill('#password', password);
  }

  async clickLogin() {
    await this.page.click('#login');
  }

  async getErrorMessage() {
    return this.page.locator('#error');
  }
}