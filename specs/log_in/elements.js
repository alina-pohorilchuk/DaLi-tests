class Elements {
  get fieldEmail() {
    return $("#login-email");
  }
  get fieldPassword() {
    return $("input[type = password]");
  }
  get signInButton() {
    return $("#login-signIn");
  }
  get notificationDangerText() {
    return $(".MuiAlert-message");
  }
  get checkbox() {
    return $("#login-rememberMe");
  }
  get forgotPassword() {
    return $("#login-forgot-pswd");
  }
  get notificationOfForgotPassword() {
    return $(".modal-body");
  }
  get closeModalButton() {
    return $("button.close-btn");
  }
  get browseDataButton() {
    return $("#header-browseData");
  }
}

module.exports = Elements;
