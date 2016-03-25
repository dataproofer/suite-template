# suite-template
A template to write data checks for the Dataproofer desktop app or any JavaScript application.

* [Documentation](https://github.com/dataproofer/suite-template/blob/master/README.md)
* [Repository](https://github.com/dataproofer/suite-template/)
* [Issues](https://github.com/dataproofer/suite-template/issues)

## What's in here
A clone-able repository to give you a bare bones Dataproofer test suite.

Within the `src` folder, you'll find two example tests to help you get started.

### myTest.js

A basic true/false test to see if a spreadsheet contains any rows

### myAdvancedTest.js

A larger test which demonstrates how to make comments appear in the Dataproofer desktop app.

## Development

### Getting started

```
git clone git@github.com:dataproofer/dataproofertest-js.git
cd dataproofertest-js
npm install
```
### Documentation

We use [documentation.js](https://github.com/documentationjs/documentation), but have created a handy script for regenerating documentation.

```
npm run docs
```
```