const {test,expect} =require('@playwright/test');

test("whatuniregister",async({browser,page})=>
{
await page.goto("https://www.flipkart.com/");
await page.locator("[placeholder='Search for Products, Brands and More']").fill("mobiles");
// await page.screenshot({path:'screen.png'});
await page.locator("[placeholder='Search for Products, Brands and More']").screenshot({path:'partialDeepStrictEqual.png'});




})