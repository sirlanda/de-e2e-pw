import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../../api/LoginPage';
import { BasePage } from '../../api/BasePage';

// Test Area: Ticket Management
test.describe('Ticket Management Area', () => {

  const projectName = 'Debreceni Egyetem 2024';

  test('Projekt megnyitás', async ({ page }) => {
    await test.step('Bejelentkezés', async () => {
      const loginPage = new LoginPage(page);
      await loginPage.login();
    });

    await test.step('Projekt megnyitása', async () => {
      const basePage = new BasePage(page);
      await basePage.toProjectPage(projectName);

      await expect(page.getByRole('link', { name: 'Feladatok' })).toBeVisible();
    });
  });

  test('Új feladat létrehozása a projektben', async ({ page }) => {

    await test.step('Bejelentkezés', async () => {
      const loginPage = new LoginPage(page);
      await loginPage.login();
    });

    await test.step('Projekt megnyitása', async () => {
      const basePage = new BasePage(page);
      await basePage.toProjectPage(projectName);
    });

    await test.step('Új feladat létrehozása', async () => {
      await page.getByRole('link', { name: 'Feladatok' }).click();
      await page.getByRole('link', { name: 'Új feladat' }).click();
    });

    // Véletlenszerű, de mégis a tesztre és a futtatásra jellemző tárgy
    const subject = 'E2E_' + new Date(Date.now()).toISOString() + '_TC01';
    await test.step('Feladat kitöltése', async () => {
      await page.getByLabel('Tárgy *').fill(subject);
      await page.getByLabel('Leírás').fill('Ez az első feladat leírásom.');
      await page.getByLabel('Felelős').selectOption('76');
      // Dinamikus dátum kitöltés, ami megfelel a validációs szabályoknak
      await page.getByLabel('Befejezés dátuma').fill(new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().slice(0, 10));
      // Véletlen valid érték
      await page.getByLabel('Becsült időigény').fill((Math.floor(Math.random() * 8) + 1).toString());
    });

    await test.step('Feladat beküldése', async () => {
      // Submit the ticket
      await page.getByRole('button', { name: 'Létrehoz', exact: true }).click();

      // Verify the ticket is created
      await expect(page.getByText(subject)).toBeVisible();
    });
  });
});
