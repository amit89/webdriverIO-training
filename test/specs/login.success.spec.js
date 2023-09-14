import { expect, browser, $ } from "@wdio/globals";
import testData from "../../test-data/user-info.json" assert { type: "json" };
import LoginPage from "../../page-object/login-page.js";
import CheckBoxPage from "../../page-object/check-boxes-page.js";
import DropDownPage from "../../page-object/drop-down-page.js";

describe("My Login application", () => {
  it.skip("Test_01: User should able to login with valid credentials", async () => {
    await LoginPage.open();
    await LoginPage.performLogin(testData.USERNAME, testData.PASSWORD);
    console.log("User has loggedin successfully");
    await expect($(`//h2[contains(text(),'My Account')]`)).toHaveTextContaining(
      `My Account`
    );
  });

  it.skip("Test_02: User should able to edit account info", async () => {
    await $(`//a[contains(text(), ' Edit Account')]`).click();
    await (await $(`#input-telephone`)).setValue(testData.PHONE);
    await (await $(`input[type='submit']`)).click();
    await expect($(`div[class*='alert-success']`)).toHaveTextContaining(
      "Success: Your account has been successfully updated."
    );
  });

  it("Checkbox functionality", async () => {
    await CheckBoxPage.open();
    await CheckBoxPage.selectSingleCheckbox();
    console.log("Test has passed");
  });

  it("Dropdown functionality", async () => {
    await DropDownPage.open();
    await DropDownPage.selectWeekDay("Wednesday");
    console.log("Test has passed");
  });
});
