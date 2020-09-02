class Elements {
  get menuBar() {
    return $("header .MuiSvgIcon-root:nth-child(3)");
  }
  get menuBarAdminPage() {
    return $("svg.MuiSvgIcon-root.header-icons.MuiSvgIcon-fontSizeLarge");
  }

  get adminPage() {
    return $("#header-gear-admin");
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
    return $("#createUser-firstName");
  }
  get lastNameField() {
    return $("#createUser-lastName");
  }
  get emailField() {
    return $("#createUser-email");
  }
  get submitButton() {
    return $("#createUser-create");
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
    return $("#newPassword-done");
  }

  get passwordField() {
    return $("#newPassword-pass");
  }
}

module.exports = Elements;
