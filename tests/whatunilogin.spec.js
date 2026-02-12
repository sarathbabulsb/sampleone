const {test,expect}=require('@playwright/test');
const { wlogin } = require('../pageobject/whatunilogin');

test("@Regression whatunilogin",async({browser,page})=>
    
    {
const whatunilogin=new wlogin(page);
// await page.goto("https://www.whatuni.com/");
// await page.getByRole("button",{name:'Accept'}).click();
// await page.locator("[title='User']").click();
// await page.locator("#loginemail").fill("test@vpn.com");
// await page.locator("#textpwd").fill("Test@123");
// await page.locator("[title='Sign in']").click();
await page.getByRole()
await page.getByRole()

await whatunilogin.homepage();
await whatunilogin.cookie.click();
await whatunilogin.usericon.click();
await whatunilogin.firstname.fill("test@vpn.com");
await whatunilogin.password.fill("Test@123");
 // console.log('sarath');
// await whatunilogin.submit.click();

})

test("practicetest",async({browser,page})=>{
await page.goto("https://www.whatuni.com/");
await page.getByRole("button",{name:'Accept'}).click();
const currenturl = await page.url();
console.log(currenturl);
await expect(currenturl).toContain("whatuni");
await page.locator("//div[@class='relative shrink-0']").click();
await page.getByPlaceholder("Enter subject").fill("Business");
await page.locator("//button[text()='Search']").click();
// await page.getByRole("button",{name:'Search'}).click();
await page.locator("div.topnav",{hasText:/Money/i});
await page.screenshot({path:'wu.png'});
expect(await page.screenshot()).toMatchSnapshot('wu.png');
const text=await page.locator("//h1[normalize-space (text())='Business degrees']").textContent();
console.log(text);
expect(text).to("Business degrees");
})

test("adding",async({browser,page})=>{

await page.goto("https://practice.expandtesting.com/");
const allproduct=await page.locator("div.col-md-3").filter({hasText:'Web inputs'});
await allproduct.getByRole('link',{name:'Try it out'}).click();
})

// test.only('Verify Chrome browser launch', async () => {
//   const browser = await chromium.launch({
//     channel: 'chrome',
//     headless: false
//   });

//   const page = await browser.newPage();
//   await page.goto('https://example.com');
//   await expect(page).toHaveTitle(/Example/);
//   await browser.close();
// });

// ("test",async()=>{
// const browser = await chromium.launch()({
// cahnnel:'chrome',
// headless:true


// })
// const page=await browser.newpage();
// page.goto("test")

// });





// ("test",async()=>{

// const browser =await chromium.launch({
//     channel:'chrome',
//     headless:true
// })
// const context=browser.newcontext;
// const page=context.newpage();
// await page.goto("www.test.com");


// })

test.only("srinitest",async({browser,page})=>{

await page.goto("https://www.whatuni.com/");
await page.getByRole("button",{name:'Accept'}).click();
await page.locator("[title='User']").click();
await page.screenshot();
await page.locator("test").screenshot();
page.locator().pressSequentially()
page.on("dialog",dialog=>dialog.accept);
page.locator().scrollIntoViewIfNeeded

})
