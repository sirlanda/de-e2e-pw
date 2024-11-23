import { test, expect } from '@playwright/test';

test('bejelentkezes', async ({ page }) => {
  await page.goto(''); // TODO: URL kiszervezése
  await page.getByLabel('Login').click();
  await page.getByLabel('Login').fill(''); // TODO: Felhasználónév kiszervezése
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill(''); // TODO: Jelszó kiszervezése
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'Kijelentkezés' })).toBeVisible();
});