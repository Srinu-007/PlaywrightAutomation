import { Locator, Page } from "@playwright/test";

export class EditUserPage{
     private readonly userRoleDropdown: Locator;

    constructor(private page: Page) {
        
        this.userRoleDropdown = this.page
            .locator('.oxd-input-group:has-text("User Role") .oxd-select-text');
    }

    async selectUserRole(role: string) {
       
        // Open User Role dropdown
        await this.userRoleDropdown.click();
 await this.page.pause();
        // Select required role
        await this.page
            .locator('.oxd-select-dropdown')
            .getByText(role, { exact: true })
            .click();
    }
    }