import { test as setup } from '@playwright/test';

setup('save login state', async ({ page }) => {

  await page.goto("https://www.whatuni.com/");

  await page.getByRole("button", { name: 'Accept' }).click();

  await page.locator("[title='User']").click();
  await page.locator("#loginemail").fill("test@vpn.com");
  await page.locator("#textpwd").fill("Test@123");
  await page.locator("[title='Sign in']").click();

  // wait until login completes (important)
  await page.waitForURL('**/dashboard', { timeout: 15000 }).catch(() => {});

  // save storage state
  await page.context().storageState({ path: 'auth.json' });
});