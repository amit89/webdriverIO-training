import BasePage from "./base-page.js";

const dropDownURL = "select-dropdown-demo";

class DropDownPage extends BasePage {
  open() {
    return super.open(dropDownURL);
  }

  get weekDay() {
    return $("#select-demo");
  }

  async selectWeekDay(value) {
    await this.weekDay.selectByVisibleText(value);
  }
}

export default new DropDownPage();
