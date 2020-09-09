class Elements {
  get menuBar() {
    return $("#header-gear");
  }
  get menuBarAdminPage() {
    return $("#header-gear-admin");
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
    return $("span.MuiButton-label");
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
  get addDashboardButton() {
    return $("#header-addMenu");
  }

  get modalWindow() {
    return $(
      "body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div"
    );
  }

  get deactivateUserButton() {
    return $("#admin-people-deactivateUser");
  }

  get confirmDeactivateButton() {
    return $("#deactivateUser-deactivate");
  }

  get closeModalWindow() {
    return $("#newPassword-done");
  }

  get passwordField() {
    return $("#newPassword-pass");
  }

  get notificationDangerText() {
    return $("div.MuiAlert-message");
  }

  getElipsisByEmail(email) {
    return $(
      `//td[text()='${email}']/ancestor::tr[contains(@class, 'MuiTableRow-root')]/td[5]//*[name()="svg"]`
    );
  }

  getReactivateButton(email) {
    return $(
      `//td[text()='${email}']/ancestor::tr[contains(@class, 'MuiTableRow-root')]/td[5]//*[name()="svg"]`
    );
  }

  get deactivatedTab() {
    return $("//div/button[2]");
  }
  getReactivateUserByEmail(email) {
    return $(
      `//td[text()='${email}']/ancestor::tr[contains(@class, 'MuiTableRow-root')]/td[5]//*[name()="svg"]`
    );
  }
}

module.exports = Elements;
