
import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/LoginPage';
import users from '../../test-data/users.json';
import fs from 'node:fs';
import path from 'node:path';

const authFile = path.join(
    process.cwd(),
    'playwright',
    '.auth',
    'user.json'
);


setup('Authenticate user', async ({ page }) => {
    await page.goto('/web/index.php/auth/login');

    const loginPage = new LoginPage(page);

    await loginPage.login(
        users.validUser.username,
        users.validUser.password
    );

    // Wait for the login request/navigation to settle
    await page.waitForLoadState('networkidle').catch(() => {});

    console.log('Current URL:', page.url());

    console.log(
        'Dashboard text count:',
        await page.getByText('Dashboard', { exact: true }).count()
    );

    console.log(
        'Login button visible:',
        await page.getByRole('button', { name: 'Login' })
            .isVisible()
            .catch(() => false)
    );

    // Only save authentication state after confirming login
    await expect(page).toHaveURL(/dashboard\/index/);

    fs.mkdirSync(path.dirname(authFile), { recursive: true });

    await page.context().storageState({ path: authFile });
});
