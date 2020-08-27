class Elements {
  get fieldEmail() {
    return $("#email");
  }
  get fieldPassword() {
    return $("input[type = password]");
  }
  get signInButton() {
    return $("button.btn");
  }
  get notificationDangerText() {
    return $(".MuiAlert-message");
  }
  get checkbox() {
    return $("input[type = checkbox]");
  }
  get forgotPassword() {
    return $("button.forgot-pswd");
  }
  get notificationOfForgotPassword() {
    return $(".modal-body");
  }
  get closeModalButton() {
    return $("button.close-btn");
  }
}

module.exports = Elements;
