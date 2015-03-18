
## Getting Started

Fork this repository into your own GitHub account.  Be sure to commit all of your work!

Once you've cloned a copy to your machine, open up [index.html](index.html) in a browser.  This is your test runner, [mochajs](http://mochajs.org/).  Just reload that page to see updated test results.  Also don't hesitate to open up the inspector and set some breakpoints!

## Your tasks:  

### Write tests for existing code

[validators.js](src/validators.js) contains a simple little library with some validation functions.  You need to write unit tests for all of the functions in it, and make sure to exercise both the `true` and `false` cases for each validation function.  If you need a reference for how to write your test cases, be sure to refer to [simple-query-tests.js](src/simple-query-tests.js).

### Refactor a library that already has test coverage

Test suites are awesome for how they let us refactor code and not have to worry about things breaking.  I want to you refactor the [simple-query.js](src/simple-query.js) library so it doesn't use jQuery.  It should just use the raw API provided to you by the browser, checkout the [MDN docs on Element for pointers](https://developer.mozilla.org/en-US/docs/Web/API/Element), and the google of course.

I realize that the tests are still using jQuery, but if I wrote the tests to not use jQuery then you'd have the answers already :wink:.  In this hypothetical situation, we want a library of helper functions that aren't dependent on the jQuery library.
