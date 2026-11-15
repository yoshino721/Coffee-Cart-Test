import { test as base, expect } from '@playwright/test';
import { CartPage } from '../src/pages/cart-page';
import { MenuPage } from '../src/pages/menu-page';
import { SuccessNotification } from '../src/pages/success-notification';

type Fixtures = {
  menuPage: MenuPage;
  cartPage: CartPage;
  successNotification: SuccessNotification;
};

export const test = base.extend<Fixtures>({
  menuPage: async ({ page }, use) => {
    await use(new MenuPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  successNotification: async ({ page }, use) => {
    await use(new SuccessNotification(page));
  },
});

export { expect };
