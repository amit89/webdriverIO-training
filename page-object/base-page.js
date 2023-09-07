import { browser } from "@wdio/globals";

export default class BasePage {
  open(path) {
    return browser.url(
      `https://ecommerce-playground.lambdatest.io/index.php?route=account/${path}`
    );
  }
}
