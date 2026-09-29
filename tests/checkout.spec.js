import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import ProductsPage from '../pages/ProductsPage.js';
import CartPage from '../pages/CartPage.js';
import CheckoutPage from '../pages/CheckoutPage.js';

test('User can complete checkout', async ({ page }) => {

    const productsPage = new ProductsPage(page);
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

      await page.goto('https://www.saucedemo.com/');


      await loginPage.login('standard_user', 'secret_sauce');
      await productsPage.addBackpackToCart();
      await cartPage.openCart();
      await checkoutPage.clickCheckout();

      await checkoutPage.fillCheckoutDetails(
  'Paras',
  'Kalura',
  '110001'
);

await checkoutPage.continueCheckout();
await expect(page).toHaveURL(/checkout-step-two/);

});