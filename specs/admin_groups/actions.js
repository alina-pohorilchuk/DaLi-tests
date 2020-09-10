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
    adminGroupsElements.createGroupButton.moveTo();
    adminGroupsElements.createGroupButton.click();
    adminGroupsElements.groupNameField.isDisplayed();
  }

  addGroupName(groupName) {
    adminGroupsElements.groupNameField.waitForDisplayed(10000);
    adminGroupsElements.groupNameField.setValue(groupName);
    adminGroupsElements.addGroupButton.isDisplayed();
  }

  clickEditGroupNameButton() {
    adminGroupsElements.EditGroupNameButton.waitForDisplayed(4000);
    adminGroupsElements.EditGroupNameButton.click();
  }
  clickRemoveGroupButton() {
    adminGroupsElements.removeGroupButton.waitForDisplayed(4000);
    adminGroupsElements.removeGroupButton.click();
  }

  editGroupName() {
    adminGroupsElements.groupNameField.waitForDisplayed(10000);
    adminGroupsElements.groupNameField.setValue("a");
    adminGroupsElements.addGroupButton.isDisplayed();
  }

  clickConfirmEditButton() {
    adminGroupsElements.confirmEditButton.waitForDisplayed(4000);
    adminGroupsElements.confirmEditButton.click();
  }

  clickAddGroupButton() {
    adminGroupsElements.addGroupButton.waitForEnabled(10000);
    adminGroupsElements.addGroupButton.moveTo();
    adminGroupsElements.addGroupButton.click();
  }

  getNotficationDangerText() {
    adminGroupsElements.notificationDangerText.waitForDisplayed(4000);
    adminGroupsElements.notificationDangerText.getText();
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

  clickAddMembersButton() {
    adminGroupsElements.addMembersButton.waitForDisplayed(5000);
    adminGroupsElements.addMembersButton.click();
  }

  checkThatAddMembersButtonExists() {
    adminGroupsElements.addMembersButton.waitForDisplayed(5000);
    assert.equal(adminGroupsElements.addMembersButton.isExisting(), true);
  }

  navigateToElipsisMenu(groupName) {
    const elipsis = adminGroupsElements.getElipsisByName(groupName);
    elipsis.waitForDisplayed(2000);
    elipsis.scrollIntoView();
    elipsis.waitForClickable();
    elipsis.moveTo();
    elipsis.click();
    adminGroupsElements.groupEditNameButton.isDisplayed();
  }
}

module.exports = Actions;
