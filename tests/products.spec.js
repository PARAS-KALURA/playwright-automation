import { test, expect } from '@playwright/test';

test('User can add Backpack to cart', async ({page}) => {
 
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', {name:'Login'}).click()

      await expect(page).toHaveURL(/inventory/);

await page
  .locator('.inventory_item')
  .filter({ hasText: 'Sauce Labs Backpack' })
  .getByRole('button', { name: 'Add to cart' })
  .click();
  
      await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

});