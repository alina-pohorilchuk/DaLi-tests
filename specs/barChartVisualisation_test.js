const assert = require("assert");
const testData = require("./testData.json");
const LoginActions = require("./log_in/actions");
const HomePageActions = require("./pages/homePage/homePageActions");
//const DataSourcePageActions = require("./pages/dataSourcePage/dataSourcePageActions");
//const TablePageActions = require("./pages/tablePage/tablePageActions");


const loginActions = new LoginActions();
const homePageActions = new HomePageActions();
//const dataSourcePageActions = new DataSourcePageActions();
//const tablePageActions = new TablePageActions();


describe("Tests for bar chart visualisation", () => {
    
    beforeEach(() => {
        browser.url(testData.signUpPageURL);
        loginActions.userLogIn(testData.validEmail, testData.validPassword);
  //      homePageActions.openBrowseData(); // уточняем именно этот момент
  //      browser.refresh();
  //      browser.pause(5000);
  //      dataSourcePageActions.openBrowseData(); // уточняем именно этот момент
  //      browser.pause(5000);
  //      tablePageActions.openBrowseData();
  //      browser.pause(5000);
      });
       
    afterEach(() => {
        browser.reloadSession();
      });
 

      it("CreateBarChartVisualisation", () => {
          
      });

});