// import { test, expect } from '@playwright/test';

// test.beforeEach(async ({page}) => {
//     await page.goto('http://localhost:8000/');
// })

// test('has successfully loaded (brief)', async ({ page }) => {
//   await expect(page.getByLabel('Command input')).toBeVisible()
//   await page.getByLabel('Command input').click();
//   await page.getByLabel('Command input').fill('load_file mock/src/data/csv/BasicHeaderCSV.ts');
//   await page.getByLabel('submit-button').click();
//   const mock_input = `successfully loaded file: mock/src/data/csv/BasicHeaderCSV.ts`
//   await expect(page.getByLabel('Command input')).toHaveValue(mock_input)
// });

// test('has successfully loaded (verbose)', async ({ page }) => {
//   await page.getByLabel('Command input').fill('mode verbose');
//   await page.getByLabel('Command input').fill('load_file mock/src/data/csv/BasicHeaderCSV.ts');
//   const mock_input = `Output = successfully loaded file: mock/src/data/csv/BasicHeaderCSV.ts`
//   await expect(page.getByLabel('Command input')).toHaveValue(mock_input)
// });

// test('has failed to load file (brief)', async ({page}) => {
//   await page.getByLabel('Command input').fill('load_file random file loading');
//   const mock_input = `failture to load file: random file loading`
// });