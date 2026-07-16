import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.aalto.fi/en");
  await page.getByRole("button", { name: "Allow all" }).click();
});

test("Aalto site has title Aalto University.", async ({ page }) => {
  await expect(page).toHaveTitle("Aalto University");
});

test("Clicking Apply to Aalto and verifying page title", async ({ page }) => {
  await page.getByRole("link", { name: "Apply to Aalto" }).click();
  await expect(page).toHaveTitle("Study at Aalto | Aalto University");
});

test("Clicking Donate and verifying page title", async ({ page }) => {
  await page.getByRole("link", { name: "Donate", exact: true }).click();
  await expect(page).toHaveTitle("A! Sign of Change | Aalto University");
});

test("Clicking News page and verifying page title", async ({ page }) => {
  await page.getByRole("link", { name: "See all Aalto University news", exact: true }).click();
  await expect(page).toHaveTitle("News | Aalto University");
});

test("Click on search and find some info", async ({ page }) => {
  await page.getByRole("button", { name: "Search", exact: true }).click();

  await page.locator("input[type=search]").fill("Data Science");
  await page.locator("input[type=search]").press("Enter");

  await expect(page.locator("#search-results-header"))
    .toContainText('Results for "Data Science"');
});
