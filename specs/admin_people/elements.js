class Elements {
  get menuBar() {
    return $("header .MuiSvgIcon-root:nth-child(3)");
  }
  get adminPage() {
    return $(
      "#simple-menu > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(2)"
    );
  }

  get buttonAddSomeone() {
    return $('//*[@id="root"]/main/div/div[2]/div/div[1]/button/span[1]');
  }
  get firstNameField() {
    return $("input[name = firstName]");
  }
  get lastNameField() {
    return $("input[name = lastName]");
  }
  get emailField() {
    return $("input[name = email]");
  }
  get submitButton() {
    return $(
      "div.MuiDialogActions-root.addUserModalFooter.MuiDialogActions-spacing > button:nth-child(2)"
    );
  }
  get generatedPassword() {}

  get modalWindow() {
    return $(
      "body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div"
    );
  }

  get passwordField() {
    return $("/html/body/div[3]/div[3]/div[3]/input");
  }
}

module.exports = Elements;
