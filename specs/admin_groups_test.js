const testData = require("./testData.json");

const AdminPeopleActions = require("./admin_people/actions");
const AdminGroupsActions = require("./admin_groups/actions");
const LoginActions = require("./log_in/actions");

const adminPeopleActions = new AdminPeopleActions();
const adminGroupsActions = new AdminGroupsActions();
const loginActions = new LoginActions();

describe("Tests for create and remove groups", () => {
  beforeEach(() => {
    browser.url(testData.signUpPageURL);
    loginActions.userLogIn(testData.validEmail, testData.validPassword);
  });
  afterEach(() => {
    browser.reloadSession();
  });

  xit("Creating new group witn unique name should be successful", () => {
    const groupName = new Date().getTime();
    adminPeopleActions.navigateToAdminPage();
    adminGroupsActions.navigateToSideBarGroups();
    adminGroupsActions.clickCreateGroupButton();
    adminGroupsActions.addGroupName(groupName);
    adminGroupsActions.clickAddGroupButton();
    adminGroupsActions.clickToGroupNameButton(groupName);
    adminGroupsActions.checkThatAddMembersButtonExists();
  });

  xit("Creating new group witn not unique name shouldn't be successful", () => {
    adminPeopleActions.navigateToAdminPage();
    adminGroupsActions.navigateToSideBarGroups();
    adminGroupsActions.clickCreateGroupButton();
    adminGroupsActions.addGroupName(testData.existingGroupName);
    adminGroupsActions.clickAddGroupButton();
    adminGroupsActions.checkNotificationNonUniqueGroupName();
  });

  xit("Changing the name of the group should be successful", () => {
    const groupName = new Date().getTime();
    adminPeopleActions.navigateToAdminPage();
    adminGroupsActions.navigateToSideBarGroups();
    adminGroupsActions.clickCreateGroupButton();
    adminGroupsActions.addGroupName(groupName);
    adminGroupsActions.clickAddGroupButton();

    adminGroupsActions.navigateToElipsisMenu(groupName);
    adminGroupsActions.clickEditGroupNameButton();
    adminGroupsActions.editGroupName();
    adminGroupsActions.clickConfirmEditButton();

    adminGroupsActions.clickToGroupNameButton(groupName);
    adminGroupsActions.checkThatAddMembersButtonExists();
  });
  xit("Removing group should be successful", () => {
    const groupName = new Date().getTime();
    adminPeopleActions.navigateToAdminPage();
    adminGroupsActions.navigateToSideBarGroups();
    adminGroupsActions.clickCreateGroupButton();
    adminGroupsActions.addGroupName(groupName);
    adminGroupsActions.clickAddGroupButton();

    adminGroupsActions.navigateToElipsisMenu(groupName);
    adminGroupsActions.clickRemoveGroupButton();
  });
});
