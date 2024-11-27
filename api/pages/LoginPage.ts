import { Page, Locator } from 'playwright';
import { expect } from 'playwright/test';

export class LoginPage {
    private page: Page;
    private username: Locator;
    private password: Locator;
    private signInButton: Locator;
    private signOutLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = this.page.getByLabel('Login');
        this.password = this.page.getByLabel('Password');
        this.signInButton = this.page.getByRole("button", { name: "Login" });
        this.signOutLink = this.page.getByRole('link', { name: 'Kijelentkezés' });
    }

    async navigate() {
        await this.page.goto('/');
    }

    async fillUsername(userName: string) {
        await this.username.fill(userName);
    }

    async fillPassword(password: string) {
        await this.password.fill(password);
    }

    async submit() {
        await this.signInButton.click();
    }

    async verifySuccessfulLogin() {
        await expect(this.signOutLink).toBeVisible();
    }

    async login(username: string = process.env.USERNAME ?? '', 
        password: string = process.env.PASSWORD ?? '') {
        await this.navigate();
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.submit();
        await this.verifySuccessfulLogin();
        console.log(`A bejelentkezés sikeres ${username} felhasználóval.`);
    }

}