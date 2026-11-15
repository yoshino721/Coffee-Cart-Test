import { test } from './fixtures';

test('double-clicking a coffee title translates it to Chinese', async ({ menuPage }) => {
  await menuPage.goto();
  await menuPage.translateProductTitle('Espresso');

  await menuPage.expectProductTitle('特浓咖啡');
});
