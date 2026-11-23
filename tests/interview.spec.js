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

test("Hover prectice", async ({page}) => {

    // Opens SauceDemo.
await page.goto("https://www.saucedemo.com/");

// Logs in using standard_user.
await page.locator("#user-name").fill("standard_user");

// Logs in using secret_sauce
await page.locator("#password").fill("secret_sauce");

// 1. Hovers over an element of your choice.
await page.locator("#user-name").hover();

// verifies hover behaviour;

await page.locator("#user-name").hover();

});

test('should login successfully with valid credentials', async ({page}) => {

// Opens https://www.saucedemo.com/.
await page.goto("https://www.saucedemo.com");

//Enters standard_user as the username.
await page.locator("#user-name").fill("standard_user");

// Enters secret_sauce as the password.
await page.locator("#password").fill("secret_sauce");

// Clicks the Login button.
await page.locator("#login-button").click();

//Verifies that the URL contains inventory.html.
await expect(page).toHaveURL(/inventory\.html/);


// Verifies that the Products heading is visible.
await expect(page.getByText('Products')).toBeVisible();

});