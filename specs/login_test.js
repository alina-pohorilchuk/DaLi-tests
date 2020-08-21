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
  it("Log in to the system of a reviously registered user with valid email and invalid password", () => {
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
});
