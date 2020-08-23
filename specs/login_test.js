const assert = require("assert");
const testData = require("./testData.json");
const LoginActions = require("./log_in/actions");

const loginActions = new LoginActions();

describe("Tests for login page", () => {
  afterEach(() => {
    browser.reloadSession();
  });

  it("Log in to the system of a previously registered user with valid credentials", () => {
    browser.url(testData.signUpPageURL);
    loginActions.userLogIn(testData.validEmail, testData.validPassword);
    browser.waitUntil(function () {
      return browser.getUrl() == testData.expectedRedirectUrl;
    }, 5000);
  });
  it("Log in to the system of a previously registered user with valid email and invalid password", () => {
    browser.url(testData.signUpPageURL);
    loginActions.userLogIn(testData.validEmail, testData.invalidPassword);
    browser.waitUntil(function () {
      return browser.getUrl() == testData.signUpPageURL;
    }, 5000);

    assert.equal(
      loginActions.getNotficationDangerText(),
      testData.notificationOfInvalidPassword
    );
  });
  it("Log in to the system of a user with invalid credentials", () => {
    browser.url(testData.signUpPageURL);
    loginActions.userLogIn(testData.invalidEmail, testData.invalidPassword);
    browser.waitUntil(function () {
      return browser.getUrl() == testData.signUpPageURL;
    }, 5000);
    assert.equal(
      loginActions.getNotficationDangerText(),
      testData.notificationOfNotFoundUser
    );
  });
  // does not work yet, as the functionality is not ready yet. the test will be finalized later
  xit("Log in, using 'remember me' checkbox", () => {
    browser.url(testData.signUpPageURL);
    loginActions.userLogInWithCheckbox(
      testData.validEmail,
      testData.validPassword
    );
    browser.pause(1000);
    browser.reloadSession();
    browser.url(testData.expectedRedirectUrl);
    browser.waitUntil(function () {
      return browser.getUrl() == testData.expectedRedirectUrl;
    }, 5000);
  });

  it("Try to log in, using button 'forgot password'", () => {
    browser.url(testData.signUpPageURL);
    loginActions.clickForgotPassword();
    assert.equal(
      loginActions.getModalText(),
      testData.notificationOfForgotPassword
    );
    loginActions.clickCloseModalButton();
    browser.waitUntil(function () {
      return browser.getUrl() == testData.signUpPageURL;
    }, 5000);
  });
});
