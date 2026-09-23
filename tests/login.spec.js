import { test, expect } from '@playwright/test';

test('Valid login', async ({page}) => {
 await page.goto('https://www.saucedemo.com/');
})