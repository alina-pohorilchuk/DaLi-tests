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
}

module.exports = Elements;
