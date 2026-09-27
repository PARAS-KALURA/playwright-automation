import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';

test("Valid Login", async ({ page }) => {

  const loginPage = new LoginPage(page);

  await page.goto("https://www.saucedemo.com/");

  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);

});

test("Invalid Password", async ({page}) => {
  
    const loginPage = new LoginPage(page);

      await page.goto("https://www.saucedemo.com/");

        await loginPage.login('standard_user', 'wrong_password');

     await expect (
        page.getByText("Username and password do not match any user in this service")
     ).toBeVisible;
     
})

test("Invalid Username", async ({ page }) => {

  const loginPage = new LoginPage(page);

  await page.goto("https://www.saucedemo.com/");

  await loginPage.login('wrong_user', 'secret_sauce');

  await expect(
    page.getByText("Username and password do not match any user in this service")
  ).toBeVisible();

});