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
  }
  addGroupName(groupName) {
    adminGroupsElements.groupNameField.waitForDisplayed(10000);
    adminGroupsElements.groupNameField.setValue(groupName);
  }
  clickAddGroupButton() {
    adminGroupsElements.AddGroupButton.waitForClickable(10000);
    adminGroupsElements.AddGroupButton.click();
  }
}

module.exports = Actions;
