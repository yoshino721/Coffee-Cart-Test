import { expect, Page } from '@playwright/test';

export class MenuPage {
  constructor(private readonly page: Page) {}

  private product(name: string) {
    return this.page.locator(`[data-test="${name}"]`);
  }

  private productCard(name: string) {
    return this.page.getByRole('listitem').filter({ has: this.product(name) });
  }

  async goto() {
    await this.page.goto('/');
    await this.dismissPromoPopupIfPresent();
  }

  private async dismissPromoPopupIfPresent() {
    const popup = this.page.locator('[role="dialog"]:visible').filter({
      hasText: /promo|promotion|discount|offer/i,
    });
    if (await popup.count()) {
      await popup.getByRole('button', { name: /close|dismiss|no thanks/i }).click();
    }
  }

  async addProduct(name: string) {
    const product = this.product(name);
    await expect(product, `Product "${name}" should be available`).toBeVisible();
    await product.click();
  }

  async translateProductTitle(name: string) {
    await this.productCard(name).getByRole('heading').dblclick();
  }

  async expectProductTitle(name: string) {
    await expect(this.page.getByRole('heading', { name: new RegExp(`^${name} `) })).toBeVisible();
  }

  async openCart() {
    await this.page.getByRole('link', { name: /cart/i }).click();
  }
}
