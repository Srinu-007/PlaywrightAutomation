// import test, { expect } from "@playwright/test";
// import { LoginPage } from "../Pages/LoginPage";
// import { AdminPage } from "../Pages/AdminPage";

// test(
//     'Open Admin Page',
//     { tag: '@regression'},
//     async ({ page }) => {
//     await page.goto('/web/index.php/auth/login');

//         const loginPage = new LoginPage(page);

//         await loginPage.Login('Admin', 'admin123');

//         const adminPage = new AdminPage(page);

//         await adminPage.openAdminPage();

//         await expect(
//             page.getByText('System Users')
//         ).toBeVisible();
// });


import { test, expect } from '../fixtures/testFixtures';
import users from "../test-data/users.json";

test(
    'Open Admin Page',
    { tag: '@regression' },
    async ({ page, loginPage, adminPage }) => {

    //     await page.goto('/web/index.php/auth/login');

    //    loginPage.Login(
    //     users.validusers.username,
    //     users.validusers.password
    //    )

    await page.goto('/web/index.php/dashboard/index');

        await expect(
            page.getByRole('heading', { name: 'Dashboard' })
        ).toBeVisible();

        await adminPage.openAdminPage();

        await expect(
            page.getByText('System Users')
        ).toBeVisible();

    }
);

// test isolation**************************************************
// import { test, expect } from '@playwright/test';

// test('Test A - Set browser storage', async ({ page }) => {

//     await page.goto('https://example.com');

//     await page.evaluate(() => {
//         localStorage.setItem('testKey', 'valueA');
//     });

//     await expect.poll(async () => {
//         return page.evaluate(() => localStorage.getItem('testKey'));
//     }).toBe('valueA');
// });

// test('Test B - Browser storage starts fresh', async ({ page }) => {

//     await page.goto('https://example.com');

//     const storedValue = await page.evaluate(() => {
//         return localStorage.getItem('testKey');
//     });

//     expect(storedValue).toBeNull();
// });
