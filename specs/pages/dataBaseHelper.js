class DateBase{

    //разные базы данных уточнить
    //учтонить одни и теже классы рухнет?
    get dataBaseTable() {return $("div.MuiGrid-root:first-child");}  
    get table() {return $("div.MuiGrid-root.data-source-item:first-child");} 
    get barVisualisation() {return $("div a.visualization-container:nth-child(2)")}
   
    choiseDataBase () {
        this.dataBaseTable.click();
        this.table.waitForDisplayed(5000);
  }

    choiseTable() {
        this.table.click();
        this.barVisualisation.waitForDisplayed(5000);
  }

    choiseVisualisationBarType() {
        this.barVisualisation.click();
        browser.pause(5000)
  }


}

module.exports = DateBase;