import { expect, browser, $ } from "@wdio/globals";
import testData from "../../test-data/user-info.json" assert { type: "json" };
import LoginPage from "../../page-object/login-page.js";

describe("My Login application", () => {
  it.only("Test_01: User should able to login with valid credentials", async () => {
    await LoginPage.open();
    await LoginPage.performLogin(testData.USERNAME, testData.PASSWORD);

    await expect($(`//h2[contains(text(),'My Account')]`)).toHaveTextContaining(
      `My Account`
    );
  });

  it("Test_02: User should able to edit account info", async () => {
    await $(`//a[contains(text(), ' Edit Account')]`).click();
    await (await $(`#input-telephone`)).setValue(testData.PHONE);
    await (await $(`input[type='submit']`)).click();
    await expect($(`div[class*='alert-success']`)).toHaveTextContaining(
      "Success: Your account has been successfully updated."
    );
  });
});
