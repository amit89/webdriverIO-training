import { browser } from "@wdio/globals";

export default class BasePage {
  open(path) {
    return browser.url(
      `https://www.lambdatest.com/selenium-playground/${path}`
    );
  }
}
