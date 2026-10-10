import { test, expect } from '../fixtures/testFixtures';
import users from "../test-data/users.json";
//import { LoginPage } from '../Pages/LoginPage';
import { AdminPage } from '../Pages/AdminPage';
import { EditUserPage } from '../Pages/EditUserPage';

// test("OrangeHRM Login",     { tag: '@smoke' },
// async({ page }) => {
//   await page.goto("/web/index.php/auth/login");
//   const loginpage  = new LoginPage(page);
//   await loginpage.Login("Admin", "admin123");
//   await expect(page.getByRole("heading", {name: "Dashboard"})).toBeVisible();

// });

//**************************************LOGIN PAGE FIXTURE
test("OrangeHRM Login",     { tag: '@smoke' },
async({ page,loginPage }) => {
  await page.goto("/web/index.php/auth/login");
  await loginPage.login(
    users.validUser.username,
    users.validUser.password
  )
  //await loginPage.Login("Admin", "admin123");
  await expect(page.getByRole("heading", {name: "Dashboard"})).toBeVisible();

});

// test("Edit user from Admin page", async({ page}) => {
//      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//      const loginpage = new LoginPage(page);
//      const adminPage = new AdminPage(page);
//      const editUserPage = new EditUserPage(page);
//      await loginpage.Login("Admin", "admin123");
//      //await page.getByRole("link", { name : 'Admin'}).click();
//      //await page.locator("//ul/li/a/span[text() = 'Admin']");
//     //  const row = page.getByRole("row").filter({
//     //   hasText:'/^FMLName$/'
//     //  });
// //      const row = page.getByRole('row').filter({
// //     has: page.getByText('FMLName', { exact: true })
// // });

// //      await row.locator('.bi-pencil-fill').click();
//   await adminPage.open();
//   await adminPage.editUser("chen_t");
//  await expect(page.getByRole("heading", {name : 'Edit User'})).toBeVisible();
//  //await page.getByText('ESS',{ exact: true }).click();

//   //await page.pause();
//   //await page.getByRole('option', {name: 'Admin'}).click();
// // await page.locator('.oxd-select-text').filter({
// //     hasText: /^ESS$/
// // }).click();

// // await page.locator('.oxd-select-dropdown')
// //     .getByText('Admin', { exact: true })
// //     .click();
// await page.pause();
// editUserPage.selectUserRole("Admin");
// });