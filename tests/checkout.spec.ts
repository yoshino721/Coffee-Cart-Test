import { checkoutCustomer } from '../src/test-data/customer';
import { test } from './fixtures';

test('customer can purchase a coffee', async ({
  menuPage,
  cartPage,
  successNotification,
}) => {
  await menuPage.goto();
  await menuPage.addProduct('Espresso');
  await menuPage.openCart();

  await cartPage.expectProduct('Espresso');
  const payment = await cartPage.proceedToCheckout();

  await payment.fillCustomer(checkoutCustomer);
  await payment.submit();

  await successNotification.expectVisible();
});
