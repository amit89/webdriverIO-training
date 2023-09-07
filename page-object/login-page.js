import { $, expect } from "@wdio/globals";
import BasePage from "./base-page.js";

const loginURL = "login";

class LoginPage extends BasePage {
  open(path) {
    return super.open(loginURL);
  }
  get userName() {
    return $("#input-email");
  }

  get password() {
    return $("#input-password");
  }

  async clickOnLoginButton() {
    await $("input[type='submit']").click();
  }

  async performLogin(userName, password) {
    await (await this.userName).setValue(userName);
    await this.password.setValue(password);
    await this.clickOnLoginButton();
  }
}
export default new LoginPage();
