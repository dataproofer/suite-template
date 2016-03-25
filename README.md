# suite-template
A template to write data checks for the Dataproofer desktop app or any JavaScript application.

* [Documentation](https://github.com/dataproofer/suite-template/blob/master/README.md)
* [Repository](https://github.com/dataproofer/suite-template/)
* [Issues](https://github.com/dataproofer/suite-template/issues)

## Table of Contents

* [Development](https://github.com/dataproofer/suite-template-suite#development)
  * [Getting Started](https://github.com/dataproofer/stats-suite#getting-started)
  * [Writing Tests](https://github.com/dataproofer/stats-suite#writing-tests)
  * [Building Docs](https://github.com/dataproofer/suite-template#building-docs)

## Development

### Getting Started

```
git clone git@github.com:dataproofer/suite-template.git
cd suite-template
npm install
```

### Writing Tests

* [How To](https://github.com/dataproofer/Dataproofer#creating-a-new-test)
* [Helper Scripts](https://github.com/dataproofer/dataproofertest-js/blob/master/DOCUMENTATION.md#util)
* Templates
  * [Basic Test](https://github.com/dataproofer/suite-template/blob/master/src/myTest.js)
  * [Advanced Test](https://github.com/dataproofer/suite-template/blob/master/src/myAdvancedTest.js)

### Building Docs

We use [documentation.js](https://github.com/documentationjs/documentation), but have created a handy script for regenerating documentation.

```
npm run docs
```

Then open up and check your docs in [DOCUMENTATION.md](https://github.com/dataproofer/info-suite/blob/master/DOCUMENTATION.md)
