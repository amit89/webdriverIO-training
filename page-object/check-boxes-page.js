import BasePage from "./base-page.js";

const checkboxURL = "checkbox-demo";

class CheckBoxPage extends BasePage {
  open() {
    return super.open(checkboxURL);
  }

  get singleCheckBoc() {
    return $("#isAgeSelected");
  }

  async selectSingleCheckbox() {
    const ageSelected = await this.singleCheckBoc.isSelected();
    // console.log(ageSelected);
    if (!ageSelected) {
      await this.singleCheckBoc.click();
    } else console.log("Checkbox is selected");
  }
}

export default new CheckBoxPage();
