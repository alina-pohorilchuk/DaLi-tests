const testData = require("./testData.json");

const AdminPeopleActions = require("./admin_people/actions");
const LoginActions = require("./log_in/actions");
const AdminGroupsActions = require("./admin_groups/actions");

const loginActions = new LoginActions();
const adminPeopleActions = new AdminPeopleActions();
const adminGroupsActions = new AdminGroupsActions();

describe("Tests for create and remove groups", () => {
  beforeEach(() => {
    browser.url(testData.signUpPageURL);
    loginActions.userLogIn(testData.validEmail, testData.validPassword);
  });
  afterEach(() => {
    browser.reloadSession();
  });
  xit("Creating new group witn unique name should be successful", () => {
    adminPeopleActions.navigateToAdminPage();
    adminGroupsActions.navigateToSideBarGroups();
    adminGroupsActions.navigateToCreateGroupButton();
    adminGroupsActions.addGroupName(testData.groupName);
    adminGroupsActions.clickAddGroupButton();
    browser.pause(10000);
  });

  xit("Creating new group witn not unique name shouldn't be successful", () => {});

  xit("Adding member to the group should be successful", () => {});

  xit("Removing members from the group should be successful", () => {});
});
