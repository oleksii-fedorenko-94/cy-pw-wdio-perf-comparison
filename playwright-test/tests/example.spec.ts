import { test, expect } from "@playwright/test";

test.describe("Create user", () => {
  test("Should receive the error message if the user already exists", async ({
    page,
  }) => {
    await page.goto("https://sandbox.affirm-stage.com/");
    await page.getByText("Sign in").first().hover();
    await page.locator('a[href="/user/signup"]').click();
    await page.locator('input[type="tel"]').fill("2257682322");
    await page.locator('button[type="submit"]').click();
    await page.locator('input[data-testid="phone-pin-field"]').fill("123456");
    await page.locator('[data-testid="first-name-field"]').fill("Test");
    await page.locator('[data-testid="last-name-field"]').fill("Profile");
    await page
      .locator('[data-testid="email-field"]')
      .fill("testprofile@gmail.com");
    await page.locator('button[type="submit"]').click();
    await page.locator('[data-testid="dob-field"]').fill("02/12/2000");
    await page.locator('[data-testid="last-four-ssn-field"]').fill("7890");
    await page.locator('button[type="submit"]').click();
    const signUpError = page.locator('[data-testid="sign-up-error"]');
    await expect(signUpError).toHaveText(
      "There was an error with your signup. Your phone number may be invalid, or you may already have an account."
    );
    await page.pause();
  });
});
