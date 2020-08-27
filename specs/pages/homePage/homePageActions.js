const HomePage = require("../homePage/homePageObj");

const homePage = new HomePage();

class HomePageActions {

  openBrowseData () {
    homePage.browseData.click();
    //browser.waitUntil(function () {
    //    return browser.getUrl() == testData.dataSoursePageExpected;
  //    }, 1000); 
    //browser.pause(5000);
  }

}

module.exports = HomePageActions;