class Elements {
  get sideBarGroups() {
    return $("#admin-sideBar-groups");
  }
  get createGroupButton() {
    return $("//div[2]/div[1]/button/span[1]");
  }
  get groupNameField() {
    return $("//div/input"); //form/div[1]/div/input
  }

  get addGroupButton() {
    return $("//div[2]/button[2]");
  }

  get EditGroupNameButton() {
    return $("//div[3]/ul/li[1]");
  }

  get removeGroupButton() {
    return $("//div[3]/ul/li[2]");
  }

  get confirmEditButton() {
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

  getElipsisByName(groupName) {
    return $(
      `//tr/td[1]/a[contains(text(), "${groupName}")]/ancestor::tr[contains(@class, 'MuiTableRow-root')]/td[3]//*[name()="svg"]`
    );
  }
}

module.exports = Elements;
