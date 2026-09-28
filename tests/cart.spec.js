import { test, expect } from '@playwright/test';
import ProductsPage from '../pages/ProductsPage.js';
import CartPage from '../pages/CartPage.js';

test('Backpack appears in cart', async ({ page }) => {

  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  // 1. Login
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/inventory\.html/);

  // 2. Add Backpack
  await productsPage.addBackpackToCart();

  // 3. Open Cart
  await cartPage.openCart();

  // 4. Verify Backpack is in Cart
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

});


test('Backpack can be removed from cart', async ({ page }) => {

  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  // 1. Login
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/inventory\.html/);

  // 2. Add Backpack
  await productsPage.addBackpackToCart();

  // 3. Open Cart
  await cartPage.openCart();

  // 4. Verify Backpack is in Cart
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

  // 5. Remove Backpack
  await cartPage.removeBackpack();

  // 6. Verify Backpack is removedd
  await expect(
    page.getByText('Sauce Labs Backpack')
  ).not.toBeVisible();

});