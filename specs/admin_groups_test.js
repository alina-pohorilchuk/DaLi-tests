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

  xit("Adding member to the group should be successful", () => {
    const groupName = new Date().getTime();
    adminPeopleActions.navigateToAdminPage();
    adminGroupsActions.navigateToSideBarGroups();
    adminGroupsActions.clickCreateGroupButton();
    adminGroupsActions.addGroupName(groupName);
    adminGroupsActions.clickAddGroupButton();
    adminGroupsActions.clickToGroupNameButton(groupName);
    adminGroupsActions.clickAddMembersButton();
    $("//form/div[1]/div/div/div[1]").waitForDisplayed(4000);
    $("//form/div[1]/div/div/div[1]").scrollIntoView();
    $("//form/div[1]/div/div/div[1]").click();
    $("//form/div[1]/div/div/div[1]").addValue("Test User");
    browser.pause(4000);
    $("div.css-26l3qy-menu").getHTML();
  });

  xit("Removing members from the group should be successful", () => {});
  it("Changing the name of the group should be successful", () => {
    const groupName = new Date().getTime();
    adminPeopleActions.navigateToAdminPage();
    adminGroupsActions.navigateToSideBarGroups();
    adminGroupsActions.clickCreateGroupButton();
    adminGroupsActions.addGroupName(groupName);
    adminGroupsActions.clickAddGroupButton();

    adminGroupsActions.navigateToElipsisMenu(groupName);
    adminGroupsActions.clickEditNameButton();
    adminGroupsActions.editGroupName();
    adminGroupsActions.clickConfirmEditButton();

    adminGroupsActions.clickToGroupNameButton(groupName);
    adminGroupsActions.checkThatAddMembersButtonExists();
  });
  xit("Removing group should be successful", () => {});
  //const groupDots = $();
  //`//tr/td[1]/a[contains(text(), "${groupName}")]/ancestor::tr[contains(@class, 'MuiTableRow-root')]/td[3]//*[name()="svg"]`;
  //groupDots.waitForDisplayed(4000);
  //groupDots.scrollIntoView(4000);
  //groupDots.moveTo();
  //groupDots.click();
});
