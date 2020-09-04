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
    adminPeopleActions.navigateToAdminPage();
    adminPeopleActions.openCreateUserModal();
    adminPeopleActions.setFirstName(testData.firstNameField);

    adminPeopleActions.setLastName(testData.lastNameField);
    adminPeopleActions.setEmail(email);
    adminPeopleActions.submitForm();

    const password = adminPeopleActions.getPassword();
    adminPeopleActions.closeModalWindow();

    $(".MuiTableRow-root").waitForDisplayed(10000);

    let dots = null;
    const elements = $$(".MuiTableRow-root");
    for (let i = 1; i < elements.length; i++) {
      const element = elements[i];
      const sameUser = element.getHTML().includes(email);
      if (sameUser) {
        dots = element.$("td:nth-child(5)");
        break;
      }
    }
    // dots = elements[elements.length - 1].$("td:nth-child(5)");
    // const dots = $(
    //   `/html/body/div[1]/main/div/div[2]/div/div[2]/div/div/table/tbody/tr/td[2][contains(text(), "${email}")]/parent::tr/td[5]`
    // );

    dots.click();
    $("#admin-people-deactivateUser").waitForDisplayed(1000);
    $("#admin-people-deactivateUser").click();
    browser.pause(10000);
  });

  xit("After reactivation, the user should be able to log in", () => {});
});
