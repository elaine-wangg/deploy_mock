import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:8000/');
})

test('on page load, i see an input bar', async ({ page }) => {
    await expect(page.getByLabel('Command input')).toBeVisible()
})

test('after I type into the input box, its text changes', async ({ page }) => {
    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('Awesome command');
    const mock_input = `Awesome command`
    await expect(page.getByLabel('Command input')).toHaveValue(mock_input)
});

test('on page load, i see a button', async ({ page }) => {
    await expect(page.getByRole('button')).toBeVisible()
});

test('on page load, i see a header', async ({ page }) => {
    await expect(page.getByRole('heading')).toBeVisible()
});

test('on page load, i see the output area', async ({ page }) => {
    await expect(page.getByLabel('output')).toBeVisible()
});