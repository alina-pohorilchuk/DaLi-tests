class Elements {
  get menuBar() {
    return $("header .MuiSvgIcon-root:nth-child(3)");
  }
  get menuBarAdminPage() {
    return $("svg.MuiSvgIcon-root.header-icons.MuiSvgIcon-fontSizeLarge");
  }

  get adminPage() {
    return $(
      "#simple-menu > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(2)"
    );
  }
  get signOut() {
    return $(
      "#simple-menu > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(3)"
    );
  }
  get signOutAdminPage() {
    return $(
      "#simple-menu > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(3)"
    );
  }

  get buttonAddSomeone() {
    return $("button.MuiButtonBase-root.MuiButton-root.MuiButton-contained");
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
  get browseDataButton() {
    return $("#root > header:nth-child(1) > div.header-controls > div");
  }

  get modalWindow() {
    return $(
      "body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div"
    );
  }

  get closeModalWindow() {
    return $("button.MuiButtonBase-root.MuiButton-root.MuiButton-text");
  }

  get passwordField() {
    return $("/html/body/div[3]/div[3]/div[3]/input");
  }
}

module.exports = Elements;
