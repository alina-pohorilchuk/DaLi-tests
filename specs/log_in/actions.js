const LoginElements = require("./elements");
const assert = require("assert");
const loginElements = new LoginElements();

class Actions {
  setEmail(email) {
    loginElements.fieldEmail.setValue(email);
  }
  setPassword(password) {
    loginElements.fieldPassword.setValue(password);
  }
  clickButtonSignIn() {
    loginElements.signInButton.click();
  }
  clickCheckbox() {
    loginElements.checkbox.click();
  }
  clickForgotPassword() {
    loginElements.forgotPassword.click();
  }
  clickCloseModalButton() {
    loginElements.closeModalButton.click();
  }

  userLogIn(email, password) {
    this.setEmail(email);
    this.setPassword(password);
    this.clickButtonSignIn();
  }

  userLogInWithCheckbox(email, password) {
    this.setEmail(email);
    this.setPassword(password);
    this.clickCheckbox();
    this.clickButtonSignIn();
  }

  getNotficationDangerText() {
    return loginElements.notificationDangerText.getText();
  }
  getModalText() {
    return loginElements.notificationOfForgotPassword.getText();
  }
  checkThatBrowseDataButtonExist() {
    loginElements.browseDataButton.waitForDisplayed(10000);
    assert.equal(loginElements.browseDataButton.isExisting(), true);
  }

  checkThatSignInButtonExist() {
    loginElements.signInButton.waitForDisplayed(10000);
    assert.equal(loginElements.signInButton.isExisting(), true);
  }

  checkNotificationWrongPassword(notificationOfInvalidPassword) {
    assert.equal(
      this.getNotficationDangerText(),
      notificationOfInvalidPassword
    );
  }

  checkNotificationUserNotFound(notificationOfNotFoundUser) {
    assert.equal(this.getNotficationDangerText(), notificationOfNotFoundUser);
  }

  checkForgotPasswordMessage(notificationOfForgotPassword) {
    assert.equal(this.getModalText(), notificationOfForgotPassword);
  }
}

module.exports = Actions;
