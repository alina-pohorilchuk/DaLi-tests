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
    adminPeopleActions.setFirstName(email);
    adminPeopleActions.setLastName(email);
    adminPeopleActions.setEmail(email);
    adminPeopleActions.submitForm();

    const password = adminPeopleActions.getPassword();
    adminPeopleActions.closeModalWindow();

    browser.reloadSession();
    browser.url(testData.signUpPageURL);
    console.log(3);
    loginActions.userLogIn(email, password);
    adminPeopleActions.checkThatAddDashboardButtonExists();
  });

  xit("Deactivation of the user should make it impossible for him to log in", () => {
    adminPeopleActions.navigateToAdminPage();
    const user = adminPeopleActions.createUser();

    adminPeopleActions.navigateToElipsisMenu(user.email);
    adminPeopleActions.navigateToDeactivateUser();
    adminPeopleActions.confirmDeactivatingUser();
    adminPeopleActions.waitForNotificationDisplayed();
    adminPeopleActions.waitWhenNotificationDissapears();
    browser.reloadSession();
    browser.url(testData.signUpPageURL);
    loginActions.userLogIn(user.email, user.password);
    adminPeopleActions.checkNotificationDeactivationAccount(
      testData.notificationOfDeactivatingAccount
    );
  });

  xit("After reactivation, the user should be able to log in", () => {
    adminPeopleActions.navigateToAdminPage();
    const user = adminPeopleActions.createUser();
    adminPeopleActions.deactivateUser(user);

    adminPeopleActions.waitWhenNotificationDissapears();
    adminPeopleActions.clickToDeactivatedTab();
    adminPeopleActions.clickReactivateUserButton(user.email);

    browser.reloadSession();
    browser.url(testData.signUpPageURL);
    loginActions.userLogIn(user.email, user.password);
    loginActions.checkThatBrowseDataButtonExist();
  });

  xit("After changing users data, the user should be able to log in", () => {
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
  });

  xit("After reset password, the user should be able to log in", () => {});
});
