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

  userLogIn(email, password) {
    this.setEmail(email);
    this.setPassword(password);
    this.clickButton();
  }

  getNotficationDangerText() {
    return loginElements.notificationDangerText.getText();
  }
}

module.exports = Actions;
