import { Page } from 'playwright';
import { MenuModule } from './MenuModule';
import { SearchBarModule } from './SearchBarModule';
import { expect } from '@playwright/test';

export class BasePage {
    private page: Page;
    private menu: MenuModule;
    private searchBar: SearchBarModule;

    constructor(page: Page) {
        this.page = page;
        this.menu = new MenuModule(this.page);
        this.searchBar = new SearchBarModule(this.page);
    }

    async navigate() {
        await this.page.goto('/');
    }

    async toProjectPage(projectName: string) {
        await this.searchBar.jumpToProject(projectName);
        await expect(this.searchBar.pageName).toContainText(projectName);
    }


}