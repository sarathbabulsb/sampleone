const {test,expect}=require('@playwright/test');
const { wlogin } = require('../pageobject/whatunilogin');

test("whatunilogin",async({browser,page})=>
    
    {
const whatunilogin=new wlogin(page);
// await page.goto("https://www.whatuni.com/");
// await page.getByRole("button",{name:'Accept'}).click();
// await page.locator("[title='User']").click();
// await page.locator("#loginemail").fill("test@vpn.com");
// await page.locator("#textpwd").fill("Test@123");
// await page.locator("[title='Sign in']").click();

await whatunilogin.homepage();
await whatunilogin.cookie.click();
await whatunilogin.usericon.click();
await whatunilogin.firstname.fill("test@vpn.com");
await whatunilogin.password.fill("Test@123");
 // console.log('sarath');
// await whatunilogin.submit.click();

})
