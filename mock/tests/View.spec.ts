import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:8000/');
})

test('viewing without load gives error message (brief)', async ({ page }) => {
    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('view');
    await page.getByRole('button', {name: "Submit"}).click()
    await expect(page.getByLabel('output')).toContainText('failure to view file')
});

// test('viewing without load gives command and error message (verbose)', async ({ page }) => {
    
// });

// test('successful viewing after load gives table (brief)', async ({ page }) => {
    
// });

// test('successful viewing after load gives command and table (verbose)', async ({ page }) => {
    
// });

// test('viewing misformed file gives failure message (brief)', async ({ page }) => {
    
// });

// test('viewing misformed file gives command and failure message (verbose)', async ({ page }) => {
    
// });

// test('successful viewing empty csv (brief)', async ({ page }) => {
    
// });

// test('successful viewing empty csv (verbose)', async ({ page }) => {
    
// });

// test('successful viewing csv without header (brief)', async ({ page }) => {
    
// });

// test('successful viewing csv without header (verbose)', async ({ page }) => {
    
// });