import { test, expect } from '@playwright/test';

test('login and verify', async ({ page }) => {
  // Navigate to the login page
  await page.goto(''); // TODO: URL kiszervezése

  // Fill in the username and password fields
  await page.fill('#username', ''); // TODO: Felhasználónév kiszervezése
  await page.fill('#password', ''); // TODO: Jelszó kiszervezése

  // Click the login button
  await page.click('#login-submit');

  // Assert that the logout link is visible
  await expect(page.locator('a.logout')).toBeVisible();
});