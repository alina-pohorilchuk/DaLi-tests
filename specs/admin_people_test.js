const testData = require("./testData.json");

const AdminPeopleActions = require("./admin_people/actions");
const LoginActions = require("./log_in/actions");

const loginActions = new LoginActions();
const adminPeopleActions = new AdminPeopleActions();

describe("Tests for create and inactivate user", () => {
  beforeEach(() => {
    browser.url(testData.signUpPageURL);
    loginActions.userLogIn(testData.validEmail, testData.validPassword);
  });
  afterEach(() => {
    browser.reloadSession();
  });

  xit("Creating new user should be successful with valid data", () => {
    const email = "user" + new Date().getTime() + "@gmail.com";
    adminPeopleActions.navigateToAdminPage();
    adminPeopleActions.openCreateUserModal();
    adminPeopleActions.setFirstName(testData.firstNameField);
    adminPeopleActions.setLastName(testData.lastNameField);
    adminPeopleActions.setEmail(email);
    adminPeopleActions.submitForm();

    const password = adminPeopleActions.getPassword();
    adminPeopleActions.closeModalWindow();
    adminPeopleActions.navigateToSignOut();

    loginActions.userLogIn(email, password);
    adminPeopleActions.checkThatBrowseDataButtonExist();
  });

  xit("Deactivation of the user should make it impossible for him to log in", () => {
    const email = "user" + new Date().getTime() + "@gmail.com";
    adminPeopleActions.navigateToAdminPage();
    adminPeopleActions.openCreateUserModal();
    adminPeopleActions.setFirstName(email);
    adminPeopleActions.setLastName(testData.lastNameField);
    adminPeopleActions.setEmail(email);
    adminPeopleActions.submitForm();

    const password = adminPeopleActions.getPassword();
    adminPeopleActions.closeModalWindow();

    adminPeopleActions.navigateToElipsisMenu(email);
    adminPeopleActions.navigateToDeactivateUser();
    adminPeopleActions.confirmDeactivatingUser();
    browser.reloadSession();
    browser.url(testData.signUpPageURL);
    loginActions.userLogIn(email, password);
    adminPeopleActions.checkNotificationDeactivationAccount(
      testData.notificationOfDeactivatingAccount
    );
  });

  it("After reactivation, the user should be able to log in", () => {
    const email = "user" + new Date().getTime() + "@gmail.com";
    adminPeopleActions.navigateToAdminPage();
    adminPeopleActions.openCreateUserModal();
    adminPeopleActions.setFirstName(email);
    adminPeopleActions.setLastName(testData.lastNameField);
    adminPeopleActions.setEmail(email);
    adminPeopleActions.submitForm();

    const password = adminPeopleActions.getPassword();
    adminPeopleActions.closeModalWindow();

    adminPeopleActions.navigateToElipsisMenu(email);
    adminPeopleActions.navigateToDeactivateUser();
    adminPeopleActions.confirmDeactivatingUser();

    adminPeopleActions.waitWhenNotificationDissapears();

    adminPeopleActions.clickToDeactivatedTab();
    adminPeopleActions.clickReactivateUserButton(email);

    browser.reloadSession();

    browser.url(testData.signUpPageURL);
    loginActions.userLogIn(email, password);
    loginActions.checkThatBrowseDataButtonExist();
  });
  xit("After changing users data, the user should be able to log in", () => {});
  xit("After reset password, the user should be able to log in", () => {});
});
