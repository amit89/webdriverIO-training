import { expect, browser, $ } from "@wdio/globals";

describe("My Login application", () => {
  it("Test_01: User should able to login with valid credentials", async () => {
    await browser.url(
      `https://ecommerce-playground.lambdatest.io/index.php?route=account/login`
    );
    await $("#input-email").setValue("johndoe7071@gmail.com");
    await $("#input-password").setValue("P@ssw0rd");
    await $(`input[type='submit']`).click();
    await expect($(`//h2[contains(text(),'My Account')]`)).toHaveTextContaining(
      `My Account`
    );
  });

  it("Test_02: User should able to edit account info", async () => {
    await $(`//a[contains(text(), ' Edit Account')]`).click();
    await (await $(`#input-telephone`)).setValue(`7814260451`);
    await (await $(`input[type='submit']`)).click();
    await expect($(`div[class*='alert-success']`)).toHaveTextContaining(
      "Success: Your account has been successfully updated."
    );
  });
});
