# Resume Tests

This a set of helper tests for grading the resume project

## Getting Started

These instructions assume that you have a working directory with a current resume project you are grading. These are the steps required to set up the tests:

* Copy jasmine.zip from the repo to the resume project folder
  * Majority of the files are coming from the [current Jasmine stand-alone test files - 2.7.0](https://github.com/jasmine/jasmine/releases)
  * One custom file is jasmine/spec/ResumeSpec.js which verifies that the required objects are defined, that the required object properties are defined and that the property value data types match the schema
* Unzip jasmine.zip
* Edit the resume project's index.html file, adding the following lines:

```
  <!-- adding the css and first 3 js script links to the head section -->
  <link rel="stylesheet" href="jasmine/lib/jasmine-2.7.0/jasmine.css">

  <script src="jasmine/lib/jasmine-2.7.0/jasmine.js"></script>
  <script src="jasmine/lib/jasmine-2.7.0/jasmine-html.js"></script>
  <script src="jasmine/lib/jasmine-2.7.0/boot.js"></script>

  <!-- adding the last script link to the end of the body section -->
  <script src="jasmine/spec/ResumeSpec.js"></script>
```

## Running the tests

Open index.html in a browser, after 30sec the bottom of the page should refresh with the test results (similar to the view for the Feedreader project).

### Debugging

Currently the test suites are not super granular so if there is a test failure, you would need to look up the error line number in jasmine/spec/ResumeSpec.js to determine which object/property/value is giving the current error.

### What this project does not cover

* If there is an issue with a parent object, then the tests for the object's properties will not give errors and those properties need to be checked manually

```
For ex. if the student defined the bio.contacts property like:

var bio = {
  contact: {
    mobileNum: '8888'
  }
}
```

In the case above, `contact` will give an error because the expected property is not defined. However the test needs `contacts` to exist in order to run the check for `bio.contacts.mobile` property and value data type. So the grader will need to check all the properties within `contact` manually.

* This project checks that object display() functions are defined. However the grader needs to check that that contents of the display() functions are correct (like correct array iteration, correct use of helper.js HTML strings, modular functions, encapsulated functions, etc).

## Built With

* [Jasmine 2.7.0](https://github.com/jasmine/jasmine/releases) - The web framework used
* Love <3, Sweat, Tears (no, not really...)

## Contributing

* TBD, this project could probably be enhanced but I've never created a multi person project so this is new...
Please read [CONTRIBUTING.md]

## Authors


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* This README template came from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2
* Inspiration: The test suite from the FeedReader project solution
