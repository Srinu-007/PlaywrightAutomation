import { Locator, Page } from "@playwright/test";

export class LoginPage{
    private readonly username: Locator;
    private readonly password: Locator;
    private readonly loginButton: Locator;
    constructor(private page: Page){
     this.username = this.page.getByPlaceholder("Username");
    this.password = this.page.getByPlaceholder("Password");
    //this.loginButton = this.page.getByRole("button").getByText("Login");
    this.loginButton = this.page.getByRole('button', { name: 'Login' });
    }

   async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
}
}