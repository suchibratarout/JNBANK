import { test, expect } from "@playwright/test";


test ('go to URL', async ({page}) => {

await page.goto('https://portal.jnbank.co.uk/')

// const title = await page.title();
//   Print the title in console
// console.log('Page Title is:', title);
//hello

await expect(page).toHaveTitle('JN Bank UK | Savings & Personal Loans For UK Customers')

//await page.click('text=Saving')
//await page.click('href=/saving')
// const loginBtn = page.getByRole('button', { name: 'Saving' });
// await loginBtn.click();

await page.getByRole('link', { name: 'Saving', exact: true }).click();

await page.waitForTimeout(3000);

await page.wa







});
