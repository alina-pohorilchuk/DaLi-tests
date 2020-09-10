class Elements {
  get sideBarGroups() {
    return $("#admin-sideBar-groups");
  }
  get createGroupButton() {
    return $("//div[2]/div[1]/button/span[1]");
  }
  get groupNameField() {
    return $("//div/input");
  }

  get addGroupButton() {
    return $("//div[2]/button[2]");
  }

  getGroupNameButton(groupName) {
    return $(`//td[1]/a[contains(text(), "${groupName}")]`);
  }
  get addMembersButton() {
    return $("//div/div[1]/button");
  }
  get notificationDangerText() {
    return $("div.MuiAlert-message");
  }
}

module.exports = Elements;
