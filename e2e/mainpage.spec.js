import { expect, test } from '@playwright/test';

test.skip('mainpage', async ({ page, baseURL }) => {
    await page.goto(baseURL);
    await expect(
        page.getByRole('heading', { name: 'React App' })
    ).toBeVisible();
    await expect(page).toHaveTitle('JS Frontend Starter / React');
    await expect(page.getByTestId('counter')).toHaveText('Count: 0');
    await page.getByRole('button', { name: 'Increment' }).click();
    await expect(page.getByTestId('counter')).toHaveText('Count: 1');
    await page.getByRole('button', { name: 'Increment' }).click();
    await expect(page.getByTestId('counter')).toHaveText('Count: 2');
});
