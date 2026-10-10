import { Locator, Page } from '@playwright/test';

export class AdminPage {

    private readonly adminLink: Locator;

    constructor(private page: Page) {

        this.adminLink = page.getByRole('link', { name: 'Admin' });
    }

    async openAdminPage() {

        await this.adminLink.click();
    }
}