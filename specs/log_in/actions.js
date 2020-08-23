const LoginElements = require("./elements");

const loginElements = new LoginElements();

class Actions {
  setEmail(email) {
    loginElements.fieldEmail.setValue(email);
  }
  setPassword(password) {
    loginElements.fieldPassword.setValue(password);
  }
  clickButton() {
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
    this.clickButton();
  }

  userLogInWithCheckbox(email, password) {
    this.setEmail(email);
    this.setPassword(password);
    this.clickCheckbox();
    this.clickButton();
  }

  getNotficationDangerText() {
    return loginElements.notificationDangerText.getText();
  }
  getModalText() {
    return loginElements.notificationOfForgotPassword.getText();
  }
}

module.exports = Actions;
