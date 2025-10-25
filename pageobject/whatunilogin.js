 class wlogin{

constructor(page){
    this.page=(page);
 this.cookie =page.getByRole("button",{name:'Accept'});
 this.usericon=page.locator("[title='User']");
 this.firstname=page.locator("#loginemail");
 this.password=page.locator("#textpwd");
 this.submit=page.locator("[title='Sign in']");
}
async homepage(page){
await this.page.goto("https://www.whatuni.com/");
 }

}
module.exports = { wlogin };