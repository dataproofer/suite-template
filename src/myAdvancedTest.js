/*
A handy bit of code for working with arrays and objects
https://lodash.com/docs
*/
var _ = require('lodash');
/*
The core of dataproofer tests
https://github.com/dataproofer/dataproofertest-js
*/
var DataprooferTest = require('dataproofertest-js');
var myTest = new DataprooferTest();
/*
A set of handy utilities.
Read the fulls documentation here:
https://github.com/dataproofer/dataproofertest-js/blob/master/DOCUMENTATION.md#util
*/
var util = require('dataproofertest-js/util');

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
myAdvancedTest.name('Leave a comment on the last row')
  .description('Last row')
  .methodology(function(rows, columnHeads) {
    /* summary is a string describing the result of the test
     * you can use HTML if you'd like to style your results
     * read more about templates here:
     * https://lodash.com/docs#template
     * we also use multi-line strings to help with code readability
     * you can use them too.
     * just add opening and closing backticks ``
     */
    var newSummary = _.template(`
      <span>This spreadsheet has <%= rows.length %> rows</span>
    `)({ rows: rows.length });

    // passed is either true or false
    var passed = rows.length > 0;

    /* in order to highlight cells in the desktop app
     * you'll need to read over all the rows in your spreadsheet
     * here's an example where we loop through each cell,
     * then memorize cells in the last row to be highlighted and commented.
    */

    // we will want to mark cells to be highlighted here
    var cellsToHighlight = []
    // look through each row
    rows.forEach(function(row) {
      // we make a row to keep track of cells we want to highlight
      var currentRow = {}
      columnHeads.forEach(function(columnHead) {
        var cell = row[columnHead];
        if(row === _.last(rows)) {
          currentRow[columnHead] = 1
        } else {
          currentRow[columnHead] = 0
        }
      })
      // push our marking row onto our cells array
      cellsToHighlight.push(currentRow)
    })

    var result = {
      passed: passed,
      summary: newSummary,
      highlightCells: cellsToHighlight
    };

    return result;
  })

module.exports = myAdvancedTest;
