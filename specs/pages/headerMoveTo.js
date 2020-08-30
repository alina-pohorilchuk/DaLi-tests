class Header{

    //разные базы данных уточнить
    //учтонить одни и теже классы рухнет
    get browseData() {return $("div.data-sources-btn");} 
    get dataBaseTable() {return $("div.MuiGrid-root:first-child");}    

    moveToDataSource () {
        this.browseData.click();
        this.dataBaseTable.waitForDisplayed(5000);
  }

}

module.exports = Header;