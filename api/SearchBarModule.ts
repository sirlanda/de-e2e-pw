
import { Page, Locator } from 'playwright';

export class SearchBarModule {
    private page: Page;
    readonly pageName: Locator;
    readonly searchField: Locator;
    readonly jumpToProjectField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageName = page.locator('h1');
        this.searchField = page.locator('input#q');
        this.jumpToProjectField = page.locator('div#project-jump');
    }

    async jumpToProject(projectName: string) {
        await this.jumpToProjectField.click();
        await this.page.getByRole('link', { name: projectName }).first().click();
    }

}