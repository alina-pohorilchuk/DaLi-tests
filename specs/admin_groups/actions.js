const AdminGroupsElements = require("./elements");
const assert = require("assert");
const adminGroupsElements = new AdminGroupsElements();

class Actions {
  navigateToSideBarGroups() {
    adminGroupsElements.sideBarGroups.waitForDisplayed(10000);
    adminGroupsElements.sideBarGroups.click();
    adminGroupsElements.createGroupButton.isDisplayed();
  }
  clickCreateGroupButton() {
    adminGroupsElements.createGroupButton.waitForDisplayed(10000);
    adminGroupsElements.createGroupButton.click();
    adminGroupsElements.groupNameField.isDisplayed();
  }

  addGroupName(groupName) {
    adminGroupsElements.groupNameField.waitForDisplayed(10000);
    adminGroupsElements.groupNameField.setValue(groupName);
    adminGroupsElements.addGroupButton.isDisplayed();
  }
  clickAddGroupButton() {
    adminGroupsElements.addGroupButton.waitForEnabled(10000);
    adminGroupsElements.addGroupButton.moveTo();
    adminGroupsElements.addGroupButton.click();
  }

  getNotficationDangerText() {
    return adminGroupsElements.notificationDangerText.getText();
  }

  checkNotificationNonUniqueGroupName(notificationOfNonUniqueGroupName) {
    assert.equal(
      this.getNotficationDangerText(),
      notificationOfNonUniqueGroupName
    );
  }

  clickToGroupNameButton(groupName) {
    const groupNameButton = adminGroupsElements.getGroupNameButton(groupName);
    groupNameButton.waitForDisplayed(4000);
    groupNameButton.scrollIntoView();
    groupNameButton.moveTo();
    groupNameButton.click();
  }
}

module.exports = Actions;
