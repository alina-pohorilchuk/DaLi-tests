const assert = require("assert");
const testData = require("./testData.json");
const LoginActions = require("./log_in/actions");

const loginActions = new LoginActions();

describe("Tests for login page", () => {
  beforeEach(() => {
    browser.url(testData.signUpPageURL);
  });

  afterEach(() => {
    browser.reloadSession();
  });

  xit("Log in of a previously registered user with valid credentials should be successful", () => {
    loginActions.setEmail(testData.validEmail);
    loginActions.setPassword(testData.validPassword);
    loginActions.clickButtonSignIn();
    loginActions.checkThatAddDashboardButtonExists();
  });
  xit("Log in to of a previously registered user with valid email and invalid password should be failed", () => {
    loginActions.setEmail(testData.validEmail);
    loginActions.setPassword(testData.invalidPassword);
    loginActions.clickButtonSignIn();
    loginActions.checkThatSignInButtonExist();
    loginActions.checkNotificationWrongPassword(
      testData.notificationOfInvalidPassword
    );
  });

  xit("Log in to the system of a user with invalid credentials should be failed", () => {
    loginActions.setEmail(testData.invalidEmail);
    loginActions.setPassword(testData.invalidPassword);
    loginActions.clickButtonSignIn();
    loginActions.checkThatSignInButtonExist();
    loginActions.checkNotificationUserNotFound(
      testData.notificationOfNotFoundUser
    );
  });
  xit("Try to log in, using button 'forgot password should show message with instructions'", () => {
    loginActions.clickForgotPassword();
    loginActions.checkForgotPasswordMessage(
      testData.notificationOfForgotPassword
    );
    loginActions.clickCloseModalButton();
    loginActions.checkThatAddDashboardButtonExists();
  });

  // does not work yet, as the functionality is not ready yet. the test will be finalized later
  it("Log in, using 'remember me' checkbox", () => {
    loginActions.userLogInWithCheckbox(
      testData.validEmail,
      testData.validPassword
    );
    browser.reloadSession();
    browser.url(testData.expectedRedirectUrl);
    browser.waitUntil(function () {
      return browser.getUrl() == testData.expectedRedirectUrl;
    }, 5000);
  });
});
