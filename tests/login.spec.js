import { test, expect } from '@playwright/test';

test('Invalid Password', async ({page}) => {
 await page.goto('https://www.saucedemo.com/');
 await page.getByPlaceholder('Username').fill("standard_user");
 await page.getByPlaceholder('Password').fill("wrong_password");
 await page.getByRole('button', {name : "Login"}).click();
 
 await expect(page.getByText("Password do not match")).toBeVisible();

})