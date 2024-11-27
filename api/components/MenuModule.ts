
import { Page, Locator } from 'playwright';

export class MenuModule {
    private page: Page;
    private homeLink: Locator;
    private myPageLink: Locator;
    private projectsLink: Locator;
    private loggedAsBlock: Locator;
    private logoutLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeLink = page.locator('a.home');
        this.myPageLink = page.locator('a.my-page');
        this.projectsLink = page.locator('a.projects');
        this.loggedAsBlock = page.locator('div#loggedas');
        this.logoutLink = page.locator('a.logout');
    }
}