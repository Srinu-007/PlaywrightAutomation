import { test as base, expect } from '@playwright/test';

import { LoginPage } from '../Pages/LoginPage';
import { AdminPage } from '../Pages/AdminPage';

type Fixtures = {
    loginPage: LoginPage;
    adminPage: AdminPage;
};

export const test = base.extend<Fixtures>({

    loginPage: async ({ page }, use) => {

        const loginPage = new LoginPage(page);

        await use(loginPage);
    },

    adminPage: async ({ page }, use) => {

        const adminPage = new AdminPage(page);

        await use(adminPage);
    },
});

export { expect };