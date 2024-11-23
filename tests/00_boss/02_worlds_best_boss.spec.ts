import { test, expect } from '@playwright/test';

// Shared utility functions
async function navigateToGoogleAndDismissConsent(page) {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Az összes elutasítása' }).click();
}

async function performGoogleSearch(page, query) {
  await page.getByLabel('Keresés', { exact: true }).click();
  await page.getByLabel('Keresés', { exact: true }).fill(query);
  await page.getByLabel('Google-keresés').first().click();
}

// Tests
test.describe('Google Search Tests', () => {
  test('should search for "the office" and verify results', async ({ page }) => {
    // Step 1: Navigate to Google and dismiss consent
    await navigateToGoogleAndDismissConsent(page);

    // Step 2: Perform the search
    await performGoogleSearch(page, 'the office');

    // Step 3: Verify the expected result
    await expect(page.getByText('Michael Scott', { exact: true }).first()).toBeVisible();
  });
});