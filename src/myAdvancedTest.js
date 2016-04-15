/*
A handy bit of code for working with arrays and objects
https://lodash.com/docs
*/
var _ = require("lodash");
/*
The core of dataproofer tests
https://github.com/dataproofer/dataproofertest-js
*/
var DataprooferTest = require("dataproofertest-js");
var myAdvancedTest = new DataprooferTest();
/*
A set of handy utilities.
Read the fulls documentation here:
https://github.com/dataproofer/dataproofertest-js/blob/master/DOCUMENTATION.md#utilkk j
*/
var util = require("dataproofertest-js/util");

/**
 * Leave a comment on the last row.
 * If you're new to jsDoc, use this space to describe your test.
 * If you want to try it out, here's some more info:
 * http://documentation.js.org/
 *
 * @param  {Array} rows - an array of objects representing rows in the spreadsheet
 * @param  {Array} columnHeads - an array of strings for column names of the spreadsheet
 * @return {Object} result an object describing the result
 */
myAdvancedTest.name("Identify last row")
  .description("Detects, highlights, and comments on the last row in a dataset")
  .conclusion(function(result) {
    /* conclusion can take a string or a function
     * the function takes the result object of the test
     * and allows us to change the conclusion message
     */
    if(result.testState === "passed") {
      return "Passed. You may use this dataset";
    } else {
      return "Failed. You may not use this dataset";
    }
  })
  .methodology(function(rows, columnHeads) {
    // testState can either be "passed", "failed", "warn", or "info"
    // since we just want to inform users which is the last row,
    // we note it with "info"
    var testState = "info";

    /* in order to highlight cells in the desktop app
     * you'll need to read over all the rows in your spreadsheet
     * here's an example where we loop through each cell,
     * then memorize cells in the last row to be highlighted and commented.
    */

    // we will want to mark cells to be highlighted here
    var cellsToHighlight = [];
    // look through each row
    rows.forEach(function(row) {
      // we make a row to keep track of cells we want to highlight
      var currentRow = {};
      columnHeads.forEach(function(columnHead) {
        if(row === _.last(rows)) {
          currentRow[columnHead] = 1;
        } else {
          currentRow[columnHead] = 0;
        }
      });
      // push our marking row onto our cells array
      cellsToHighlight.push(currentRow);
    });

    var result = {
      testState: testState,
      highlightCells: cellsToHighlight
    };

    return result;
  });

module.exports = myAdvancedTest;
