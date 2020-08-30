const assert = require("assert");
const testData = require("./testData.json");

const Login = require("./pages/loginPageObject");
const login = new Login();

const Header = require("./pages/headerMoveTo");
const header = new Header();

const DataBase = require("./pages/dataBaseHelper");
const dataBase = new DataBase();

describe("Create bar chart visualisations", () => {
    
    beforeEach(() => {
        browser.url(testData.signUpPageURL); //open browser
        login.login();
        login.isLogedIn();
        header.moveToDataSource();
        dataBase.choiseDataBase();
        dataBase.choiseTable();
      });
       
    afterEach(() => {
        browser.reloadSession();
      });
 

      it("CreateBarChartVisualisation", () => {
        dataBase.choiseVisualisationBarType();
      });

});