import { test, expect, Page } from '@playwright/test';

async function login(page: Page) {
  await page.goto('');
  await page.getByLabel('Login').fill(process.env.USERNAME ?? '');
  await page.getByLabel('Password').fill(process.env.PASSWORD ?? '');
  await page.getByRole('button', { name: 'Login' }).click();
}

// Test Area: Login
test.describe('Login Area', () => {
  test('should successfully log in', async ({ page }) => {
    await page.goto('');

    // Login steps
    await page.getByLabel('Login').fill(process.env.USERNAME ?? '');
    await page.getByLabel('Password').fill(process.env.PASSWORD ?? '');
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify successful login
    await expect(page.getByRole('link', { name: 'Kijelentkezés' })).toBeVisible();
  });
});

const projectName = 'Debreceni Egyetem 2024';

// Test Area: Ticket Management
test.describe('Ticket Management Area', () => {
  test('should navigate to the project', async ({ page }) => {
    // Login steps
    await login(page);

    // Navigate to the project
    await page.getByText('Ugrás projekthez...').click();
    await page.getByRole('link', { name: projectName }).first().click();
    await expect(page.getByRole('link', { name: 'Feladatok' })).toBeVisible();
  });

  test('should create a new ticket', async ({ page }) => {
    // Login and navigate to the project
    await login(page);
    
    await page.getByText('Ugrás projekthez...').click();
    await page.getByRole('link', { name: projectName }).first().click();
    await page.getByRole('link', { name: 'Feladatok' }).click();
    await page.getByRole('link', { name: 'Új feladat' }).click();

    // Véletlenszerű, de mégis a tesztre és a futtatásra jellemző tárgy
    const subject = 'E2E_' + new Date(Date.now()).toISOString() + '_TC01';
    await page.getByLabel('Tárgy *').fill(subject);
    await page.getByLabel('Leírás').fill('Ez az első feladat leírásom.');
    await page.getByLabel('Felelős').selectOption('76');
    // Dinamikus dátum kitöltés, ami megfelel a validációs szabályoknak
    await page.getByLabel('Befejezés dátuma').fill(new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().slice(0, 10));
    // Véletlen valid érték
    await page.getByLabel('Becsült időigény').fill((Math.floor(Math.random() * 8) + 1).toString());

    // Submit the ticket
    await page.getByRole('button', { name: 'Létrehoz', exact: true }).click();

    // Verify the ticket is created
    await expect(page.getByText(subject)).toBeVisible();
  });
});
