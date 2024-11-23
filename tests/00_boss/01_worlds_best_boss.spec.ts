import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Az összes elutasítása' }).click();
  await page.getByLabel('Keresés', { exact: true }).click();
  await page.getByLabel('Keresés', { exact: true }).fill('the office');
  await page.getByLabel('Google-keresés').first().click();
  await expect(page.getByLabel('Michael Scott')).toBeVisible();
});