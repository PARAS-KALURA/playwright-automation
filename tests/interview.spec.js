const { test, expect } = require('@playwright/test');


test('Valid login test using Enter key', async ({ page }) => {

 // Open the website.
 await page.goto("https://www.saucedemo.com/");

 // Fill in the username.
 await page.locator("#user-name").fill("standard_user");

 // Fill in the password.
 await page.locator("#password").fill("secret_sauce");

 //Press Enter on the password field.
 await page.locator("#password").press('Enter');


 // Verify that the Products heading is visible.
 await expect(page.getByText('Products')).toBeVisible();


});