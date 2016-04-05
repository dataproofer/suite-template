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
var myTest = new DataprooferTest();
/*
A set of handy utilities.
Read the fulls documentation here:
https://github.com/dataproofer/dataproofertest-js/blob/master/DOCUMENTATION.md#utilkk j
*/
var util = require("dataproofertest-js/util");

/**
 * Tests contain documentation in the style of jsDoc.
 * If you're new to jsDoc, use this space to describe your test.
 *
 * @param  {Array} rows - an array of objects representing rows in the spreadsheet
 * @param  {Array} columnHeads - an array of strings for column names of the spreadsheet
 * @return {Object} result an object describing the result
 */
myTest.name("Does spreadsheet contain rows?")
  .description("Test if a spreadsheet contains more than one row.")
  .conclusion("Test requires more than one row in your dataset. Please add a row of data for this test to pass.")
  .methodology(function(rows, columnHeads) {
    /* summary is a string describing the result of the test
     * you can use HTML if you'd like to style your results
     * read more about templates here:
     * https://lodash.com/docs#template
     * we also use multi-line strings to help with code readability
     * you can use them too.
     * just add opening and closing backticks ``
     */

    // passed is either true or false
    var didPass = rows.length > 0;

    var result = {
      passed: didPass
    };

    return result;
  });

module.exports = myTest;
