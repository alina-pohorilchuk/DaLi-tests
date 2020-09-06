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
    console.log(1);
    adminGroupsActions.navigateToCreateGroupButton();
    console.log(2);
    adminGroupsActions.addGroupName(groupName);
    console.log(3);
    adminGroupsActions.clickAddGroupButton();
    console.log(4);
    browser.pause(10000);
    const groupDots = $(
      `/html/body/div[1]/main/div/div[2]/div[2]/table/tbody/tr/td[1]/a[contains(text(), "${groupName}")]/ancestor::tr/td[3]`
    );
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
});
