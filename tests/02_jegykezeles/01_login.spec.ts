import { test, expect, Page } from '@playwright/test';


test.describe('Login Area', () => {
  test('should successfully log in', async ({ page }) => {
    await test.step('Redmine megnyitása', async () => {
      await page.goto('');
    });

    await test.step('Bejelentkezési adatok kitöltése', async () => {
      await page.getByLabel('Login').fill(process.env.USERNAME ?? '');
      await page.getByLabel('Password').fill(process.env.PASSWORD ?? '');
    });

    await test.step('Bejelentkezés', async () => {
      await page.getByRole('button', { name: 'Login' }).click();

      await expect(page.getByRole('link', { name: 'Kijelentkezés' })).toBeVisible();
    });

  });
});
