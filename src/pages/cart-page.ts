import { expect, Page } from '@playwright/test';
import { Customer } from '../test-data/customer';

export class CartPage {
  constructor(private readonly page: Page) {}

  private checkoutButton() {
    return this.page.getByRole('button', { name: 'Proceed to checkout' });
  }

  async expectProduct(name: string) {
    await expect(this.page.getByRole('listitem').filter({ hasText: name }).first()).toBeVisible();
  }

  async proceedToCheckout() {
    await this.checkoutButton().click();
    return new PaymentModal(this.page);
  }
}

export class PaymentModal {
  constructor(private readonly page: Page) {}

  async fillCustomer(customer: Customer) {
    await this.page.getByRole('textbox', { name: 'Name' }).fill(customer.name);
    await this.page.getByRole('textbox', { name: 'Email' }).fill(customer.email);
  }

  async submit() {
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }
}
