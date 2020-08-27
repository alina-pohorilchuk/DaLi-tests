const DataSourcePage = require("../pages/dataSourcePage/dataSourcePageObj");

const dataSourcePage = new DataSourcePage();

class DataSourcePageActions {

  openBrowseData() {
    dataSourcePage.dataBaseTable.click();
  }

}

module.exports = DataSourcePageActions;