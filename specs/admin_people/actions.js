const AdminPeopleElements = require("./elements");
const LoginElements = require("./elements");
const assert = require("assert");
const adminPeopleElements = new AdminPeopleElements();
const loginElements = new LoginElements();

class Actions {
  openMenu() {
    adminPeopleElements.menuBar.click();
  }

  navigateToAdminPage() {
    adminPeopleElements.menuBar.waitForDisplayed(10000);
    adminPeopleElements.menuBar.click();
    adminPeopleElements.adminPage.waitForDisplayed(10000);
    adminPeopleElements.adminPage.click();
  }
  openCreateUserModal() {
    adminPeopleElements.buttonAddSomeone.waitForDisplayed(10000);
    adminPeopleElements.buttonAddSomeone.click();
  }
  setFirstName(value) {
    adminPeopleElements.firstNameField.waitForDisplayed(10000);
    adminPeopleElements.firstNameField.setValue(value);
  }
  setLastName(value) {
    adminPeopleElements.lastNameField.waitForDisplayed(10000);
    adminPeopleElements.lastNameField.setValue(value);
  }
  setEmail(value) {
    adminPeopleElements.emailField.waitForDisplayed(10000);
    adminPeopleElements.emailField.setValue(value);
  }

  submitForm() {
    adminPeopleElements.submitButton.waitForDisplayed(10000);
    adminPeopleElements.submitButton.click();
  }

  getPassword() {
    adminPeopleElements.passwordField.waitForDisplayed(10000);
    console.log();
    browser.waitUntil(
      () => adminPeopleElements.passwordField.getAttribute("value") !== ""
    );
    return adminPeopleElements.passwordField.getAttribute("value");
  }

  navigateToSignOut() {
    adminPeopleElements.menuBarAdminPage.waitForDisplayed(10000);
    adminPeopleElements.menuBarAdminPage.click();
    adminPeopleElements.signOut.waitForDisplayed(10000);
    adminPeopleElements.signOut.click();
  }

  closeModalWindow() {
    adminPeopleElements.closeModalWindow.waitForDisplayed(10000);
    adminPeopleElements.closeModalWindow.click();
  }
  navigateToDeactivateUser() {
    adminPeopleElements.deactivateUserButton.waitForDisplayed(10000);
    adminPeopleElements.deactivateUserButton.waitForClickable();
    adminPeopleElements.deactivateUserButton.moveTo();
    adminPeopleElements.deactivateUserButton.click();
    adminPeopleElements.confirmDeactivateButton.isDisplayed();
  }

  confirmDeactivatingUser() {
    adminPeopleElements.confirmDeactivateButton.waitForDisplayed(10000);
    adminPeopleElements.confirmDeactivateButton.click();
  }

  checkThatBrowseDataButtonExist() {
    adminPeopleElements.browseDataButton.waitForDisplayed(10000);
    assert.equal(adminPeopleElements.browseDataButton.isExisting(), true);
  }

  navigateToElipsisMenu(email) {
    const elipsis = adminPeopleElements.getElipsisByEmail(email);
    elipsis.waitForDisplayed(2000);
    elipsis.scrollIntoView();
    elipsis.waitForClickable();
    elipsis.moveTo();
    elipsis.click();
    adminPeopleElements.deactivateUserButton.isDisplayed();
  }

  getNotficationDangerText() {
    return loginElements.notificationDangerText.getText();
  }

  checkNotificationDeactivationAccount(notificationOfDeactivatingAccount) {
    assert.equal(
      this.getNotficationDangerText(),
      notificationOfDeactivatingAccount
    );
  }

  clickToDeactivatedTab() {
    adminPeopleElements.deactivatedTab.scrollIntoView();
    adminPeopleElements.deactivatedTab.moveTo();
    adminPeopleElements.deactivatedTab.click();
  }

  clickReactivateUserButton(email) {
    const reactivate = adminPeopleElements.getReactivateButton(email);
    reactivate.waitForDisplayed(2000);
    reactivate.waitForClickable();
    reactivate.moveTo();
    reactivate.click();
  }

  waitWhenNotificationDissapears() {
    adminPeopleElements.notificationDangerText.waitForDisplayed({
      reverse: true,
    });
  }

  createUser() {
    const email = "user" + new Date().getTime() + "@gmail.com";

    this.openCreateUserModal();
    this.setFirstName(email);
    this.setLastName(email);
    this.setEmail(email);
    this.submitForm();

    const password = this.getPassword();
    this.closeModalWindow();

    return {
      email: email,
      password: password,
    };
  }

  deactivateUser(user) {
    this.navigateToElipsisMenu(user.email);
    this.navigateToDeactivateUser();
    this.confirmDeactivatingUser();
  }
}

module.exports = Actions;
