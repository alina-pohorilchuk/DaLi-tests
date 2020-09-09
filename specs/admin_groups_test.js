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
    adminGroupsActions.navigateToCreateGroupButton();
    adminGroupsActions.addGroupName(groupName);
    adminGroupsActions.clickAddGroupButton();
    browser.pause(10000);
    const groupDots = $();
    `//tr/td[1]/a[contains(text(), "${groupName}")]/ancestor::tr[contains(@class, 'MuiTableRow-root')]/td[3]//*[name()="svg"]`;
    groupDots.waitForDisplayed(10000);
    groupDots.scrollIntoView(10000);
    groupDots.click();
  });

  xit("Creating new group witn not unique name shouldn't be successful", () => {
    adminPeopleActions.navigateToAdminPage();
    adminGroupsActions.navigateToSideBarGroups();
    adminGroupsActions.navigateToCreateGroupButton();
    adminGroupsActions.addGroupName(testData.existingGroupName);
    adminGroupsActions.clickAddGroupButton();
    adminGroupsActions.checkNotificationNonUniqueGroupName();
  });

  xit("Adding member to the group should be successful", () => {});

  xit("Removing members from the group should be successful", () => {});
  xit("Changing the name of the group should be successful", () => {});
  xit("Removing group should be successful", () => {});
});
