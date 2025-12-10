import { test, expect } from '@playwright/test';

test('Verify Client Work page visibility', async ({ page }) => {
  // Step 1: Navigate to EPAM homepage
  await page.goto('https://www.epam.com/');

  // Step 2: Click on "Services" from the header menu
  const servicesLink = page.getByRole('link', { name: 'Services' });
  await servicesLink.click({ force: true });

  // Step 3: Click on "Explore Our Client Work" link
  const clientWorkLink = page.getByRole('link', { name: 'Explore Our Client Work' });
  await clientWorkLink.click();

  // Step 4: Verify "Client Work" text is visible on the page
  const clientWorkText = page.getByText('Client Work');
  await expect(clientWorkText).toBeVisible();
});