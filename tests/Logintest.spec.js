const {test,expect} = require('@playwright/test');
//import { expect } from "chai";
//const {expect} = require("chai");




/**
1.Locate and enter username – “BadUser”
2.Locate and enter Password – “BadPassword”
3.Click Submit button.
4.Assert the Error. 
5.Add a timeout of 2 mins for your test or global config. 
 */

//in js we have to add awaut keyword before every step when you put await inside this we have to represent that func. with async , async & await comes as a combination 
//if you skip async then await has no use , it will activated only when you mark func. with async ..

//in new version of js if func. dont have any name so we call this func. as a anonymous  fucn. from new version of js we can skip writing this keyword called func. intead w can put
//fat operator like this => then it will automatically treated as anonymous func. dont have anyname.

//that it is playwright fixture put{browser} fixture are global variable which avail. in your whole project

//4 fxtures in Playwright browser, page 

/**
 * we can write this as this :
 * test('example test', async ({ browser,page }) => {
    // const context = await browser.newContext();
    // const page = await context.newPage();
    await page.goto('https://qa-app-01.qventus.com');
 */

    // function sleep(ms) {
    //     return new Promise(resolve => setTimeout(resolve, ms));
    //   }
      
      

test('example test', async ({ browser }) => {
   
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://qa-app-01.qventus.com');
    //const title = await page.title();
    //expect(title).toBe('Example Domain');
    console.log(await page.title());
    await page.locator("[name='username']").fill("BadUser");
    //await sleep(10000);
    await page.locator("[name='password']").fill("BadPassword");
    await page.locator("[type='submit']").click();
    console.log(await page.locator("[style*='color: red']").textContent());
    //await expect(locator).toContainText('substring');
    await expect(page.locator("[style*='color: red']")).toContainText('Invalid username and/or password!');
    test.setTimeout(120000);

    // [style*='color: red'] we can give partial value like this in case of error message shown for few sec. [style*='red'] 
});