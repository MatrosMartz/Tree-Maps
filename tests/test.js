import { expect, test } from '@playwright/test';

test('basic test', async ({ page }) => {
	await page.goto('/');
	await expect(page.textContent('main')).toBe('estas en home');
});
