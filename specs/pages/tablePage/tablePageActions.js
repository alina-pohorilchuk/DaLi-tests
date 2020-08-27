const TablePage = require("./tablePage/tablePageObj");

const tablePage = new TablePage();

class TablePageActions {

  openBrowseData() {
    tablePage.table.click();
  }

}

module.exports = TablePageActions;