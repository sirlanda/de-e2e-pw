import { test, expect } from '@playwright/test';

test('bejelentkezes, uj jegy', async ({ page }) => {
  await page.goto(''); // TODO: URL kiszervezése
  await page.getByLabel('Login').click();
  await page.getByLabel('Login').fill(''); // TODO: Felhasználónév kiszervezése
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill(''); // TODO: Jelszó kiszervezése
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'Kijelentkezés' })).toBeVisible();

  await page.getByText('Ugrás projekthez...').click();
  await page.getByRole('link', { name: 'Debreceni Egyetem 2024' }).click();
  await page.getByRole('link', { name: 'Feladatok' }).click();
  await page.getByRole('link', { name: 'Új feladat' }).click();
  await page.getByLabel('Tárgy *').click();
  await page.getByLabel('Tárgy *').fill('Ez az első feladatom');
  await page.getByLabel('Leírás').click();
  await page.getByLabel('Leírás').fill('Ez az első feladat leírásom.');
  await page.getByLabel('Felelős').selectOption('76');
  await page.getByLabel('Befejezés dátuma').fill('2024-11-20');
  await page.getByLabel('Becsült időigény').click();
  await page.getByLabel('Becsült időigény').fill('0.5');
  await page.getByRole('button', { name: 'Létrehoz', exact: true }).click();
});