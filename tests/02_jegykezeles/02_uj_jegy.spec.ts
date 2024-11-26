import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

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

// Test Area: Ticket Management
test.describe('Ticket Management Area', () => {
  test('should navigate to the project', async ({ page }) => {
    // Login steps
    await page.goto('');
    await page.getByLabel('Login').fill(process.env.USERNAME ?? '');
    await page.getByLabel('Password').fill(process.env.PASSWORD ?? '');
    await page.getByRole('button', { name: 'Login' }).click();

    // Navigate to the project
    await page.getByText('Ugrás projekthez...').click();
    await page.getByRole('link', { name: 'Debreceni Egyetem 2024' }).first().click();
    await expect(page.getByRole('link', { name: 'Feladatok' })).toBeVisible();
  });

  test('should create a new ticket', async ({ page }) => {
    // Login and navigate to the project
    await page.goto('');
    await page.getByLabel('Login').fill(process.env.USERNAME ?? '');
    await page.getByLabel('Password').fill(process.env.PASSWORD ?? '');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByText('Ugrás projekthez...').click();
    await page.getByRole('link', { name: 'Debreceni Egyetem 2024' }).first().click();
    await page.getByRole('link', { name: 'Feladatok' }).click();
    await page.getByRole('link', { name: 'Új feladat' }).click();

    // Fill ticket form
    await page.getByLabel('Tárgy *').fill('Ez az első feladatom');
    await page.getByLabel('Leírás').fill('Ez az első feladat leírásom.');
    await page.getByLabel('Felelős').selectOption('76');
    await page.getByLabel('Befejezés dátuma').fill('2024-11-20');
    await page.getByLabel('Becsült időigény').fill('0.5');

    // Submit the ticket
    await page.getByRole('button', { name: 'Létrehoz', exact: true }).click();

    // Verify the ticket is created
    await expect(page.getByText('Ez az első feladatom')).toBeVisible();
  });
});
