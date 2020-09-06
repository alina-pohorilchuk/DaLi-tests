const testData = require("./testData.json");

const AdminPeopleActions = require("./admin_people/actions");
const LoginActions = require("./log_in/actions");

const loginActions = new LoginActions();
const adminPeopleActions = new AdminPeopleActions();

describe("Tests for create and inactivate user", () => {
  beforeEach(() => {
    browser.url(testData.signUpPageURL);
    loginActions.userLogIn(testData.validEmail, testData.validPassword);
  });
  afterEach(() => {
    browser.reloadSession();
  });

  xit("Creating new user should be successful with valid data", () => {
    const email = "user" + new Date().getTime() + "@gmail.com";
    adminPeopleActions.navigateToAdminPage();
    adminPeopleActions.openCreateUserModal();
    adminPeopleActions.setFirstName(testData.firstNameField);
    adminPeopleActions.setLastName(testData.lastNameField);
    adminPeopleActions.setEmail(email);
    adminPeopleActions.submitForm();

    const password = adminPeopleActions.getPassword();
    adminPeopleActions.closeModalWindow();
    adminPeopleActions.navigateToSignOut();

    loginActions.userLogIn(email, password);
    adminPeopleActions.checkThatBrowseDataButtonExist();
  });

  it("Deactivation of the user should make it impossible for him to log in", () => {
    const email = "user" + new Date().getTime() + "@gmail.com";
    console.log(email);
    adminPeopleActions.navigateToAdminPage();
    adminPeopleActions.openCreateUserModal();
    adminPeopleActions.setFirstName(email);
    adminPeopleActions.setLastName(testData.lastNameField);
    adminPeopleActions.setEmail(email);
    adminPeopleActions.submitForm();
    //console.log("1");
    // const password = adminPeopleActions.getPassword();
    // console.log("2");
    // adminPeopleActions.closeModalWindow();
    //doesn't work now, because new changes delete this step

    console.log("waiting");
    const dots = $(
      `/html/body/div[1]/main/div/div[2]/div[2]/table/tbody/tr/td[2][contains(text(), "${email}")]/parent::tr/td[5]`
    );

    dots.waitForDisplayed(10000);
    dots.scrollIntoView(10000);
    dots.click();
    console.log("clicked");
    $("#admin-people-deactivateUser").waitForDisplayed(10000);
    $("#admin-people-deactivateUser").click();
    browser.pause(10000);

    // dots.waitUntil(() => {
    //   if (!$("#admin-people-deactivateUser").isDisplayed()) {
    //     console.log("clicked");
    //     dots.click();
    //     return false;
    //   }
    //   return true;
    // });
    // $("#admin-people-deactivateUser").waitForDisplayed(1000);
    // $("#admin-people-deactivateUser").click();
    // browser.pause(10000);

    //const spinner = $('//*[@id="root"]/main/div/div[2]/div/svg');

    adminPeopleActions.confirmDeactivatingUser();
  });

  xit("After reactivation, the user should be able to log in", () => {});
});
