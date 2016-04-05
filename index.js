// All test suites will have a name and a list
exports = module.exports = {
  name: "test-suite-template", // a hyphenated, unique name
  fullName: "Test Suite Template", // a full name used for display in the desktop app
  tests: [] // the list of main tests to be run in the suite
};

var myTest = require("./src/myTest");
var myAdvancedTest = require("./src/myAdvancedTest");

exports.tests.push(
  myTest,
  myAdvancedTest
);
