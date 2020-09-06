const AdminGroupsElements = require("./elements");
const assert = require("assert");
const adminGroupsElements = new AdminGroupsElements();

class Actions {
  navigateToSideBarGroups() {
    adminGroupsElements.sideBarGroups.waitForDisplayed(10000);
    adminGroupsElements.sideBarGroups.click();
  }
  navigateToCreateGroupButton() {
    adminGroupsElements.createGroupButton.waitForDisplayed(10000);
    adminGroupsElements.createGroupButton.click();
    adminGroupsElements.createGroupButton.waitForDisplayed(10000);
  }
  addGroupName(groupName) {
    adminGroupsElements.groupNameField.waitForDisplayed(10000);
    adminGroupsElements.groupNameField.setValue(groupName);
  }
  clickAddGroupButton() {
    adminGroupsElements.AddGroupButton.waitForEnabled(10000);
    adminGroupsElements.AddGroupButton.click();
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
}

module.exports = Actions;
