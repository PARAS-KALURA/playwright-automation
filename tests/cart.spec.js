// Login → Product → Add to Cart → Cart → Verify

import { test, expect } from '@playwright/test';

test('Backpack appears in cart', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');
  
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', {name:'Login'}).click();

await expect(page).toHaveURL(/inventory\.html/);
  //2. Add BagPack to cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  
  //3. open cart
await page.locator('[data-test="shopping-cart-link"]').click();

  // 4. Verify Backpack is in cart
await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
});

// Login → Add Backpack → Open Cart → Verify → Remove → Verify Gone

test('Backpack can be removed from cart', async ({ page }) => {

  // 1. Login
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/inventory\.html/);

  // 2. Add Backpack
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // 3. Open Cart
  await page.locator('[data-test="shopping-cart-link"]').click();

  // 4. Verify Backpack is in Cart
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

  // 5. Remove Backpack
  await page.getByRole('button', { name: 'Remove' }).click();

  // 6. Verify Backpack is removed
  await expect(page.getByText('Sauce Labs Backpack')).not.toBeVisible();

});