const { test, expect } = require('@playwright/test');

/**
 * 
 * 1.Verfy to check Login page is accessible.
   2.Verify to check User able to Navigate to login page
    3. Verify to check Enter username "BadUser"
    4. Verify to check Enter password "BadPassword"
    5. Verify to check click on Submit button
 Expected Result:
    1. Error message should be displayed

   -Add a timeout of 2 mins for your test or global config. 
*/


test('Verify to check Login functinality', async ({ browser }) => {


    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://qa-app-01.qventus.com');
    console.log(await page.title());
    await page.locator("[name='username']").fill("BadUser");
    await page.waitForTimeout(2000);
    await page.locator("[name='password']").fill("BadPassword");
    await page.waitForTimeout(2000);
    await page.locator("[type='submit']").click();
    await expect(page.locator("[style*='color: red']")).toContainText('Invalid username and/or password!');
    await page.waitForTimeout(2000);


});