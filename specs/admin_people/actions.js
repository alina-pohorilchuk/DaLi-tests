const AdminPeopleElements = require("./elements");
const adminPeopleElements = new AdminPeopleElements();

class Actions {
  openMenu() {
    admin_peopleElements.menuBar.click();
  }

  navigateToAdminPage() {
    adminPeopleElements.menuBar.waitForDisplayed(10000);
    adminPeopleElements.menuBar.click();
    adminPeopleElements.adminPage.waitForDisplayed(10000);
    adminPeopleElements.adminPage.click();
  }
  callCreateUserModal() {
    adminPeopleElements.buttonAddSomeone.waitForDisplayed(10000);
    adminPeopleElements.buttonAddSomeone.click();
    adminPeopleElements.modalWindow.waitForDisplayed(10000);
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
    return adminPeopleElements.passwordField.getAttribute("value");
  }

  navigateToNewPasswordWindow() {}
}

module.exports = Actions;
