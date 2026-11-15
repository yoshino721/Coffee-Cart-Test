import { expect, Page } from '@playwright/test';

export class SuccessNotification {
  constructor(private readonly page: Page) {}

  async expectVisible() {
    await expect(
      this.page.getByRole('button', {
        name: 'Thanks for your purchase. Please check your email for payment.',
      }),
    ).toBeVisible();
  }
}
