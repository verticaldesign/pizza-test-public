# Challenge Overview

In order to successfully complete this exam, you will need to have node v8 or greater installed on your machine.

When scaffolding your project, please choose one of the following 3 methods:

1. Creating a build using a [`webpack.config.js`](https://webpack.js.org/) file.

1. Using [Parcel](https://parceljs.org/) to bundle your assets

1. Using [`create-react-app`](https://github.com/facebook/create-react-app)

## Expectations

We expect that you will complete this test in an honest fashion. You should not copy and paste code from stack overflow or blogs in order to complete it and you should implement it without the aid of anyone else. Successful completion will include an implementation for each of the following requirements. Extra credit will be given for tests (which use [jest](https://jestjs.io/), [code](https://www.npmjs.com/package/code), and [enzyme](http://airbnb.io/enzyme/)), refactoring, documentation, and styles.

## Requirements

### Scenario

* Given a list of pizzas available at `https://aquent-pizza-api.herokuapp.com/pizzas`
* When the server returns a response
* Then the list of pizzas should be shown
* And a filter input is shown
* And a sort button is shown

### Scenario

* Given the user has loaded the page
* When the page waits for data to load
* Then the text "Loading" should be shown
* And no other elements should be shown

### Scenario

* Given the page is shown with a list of pizzas
* When the user enters filter text
* Then only the pizzas that include the filter text should be shown

### Scenario

* Given the page is shown with a list of pizzas
* When the user enters filter text
* Then the list of pizzas should be filtered in a case insensitive way

### Scenario

* Given the page is shown with a list of pizzas
* When the user clicks the sort button
* Then the list of pizzas will be sorted in reverse alphabetic order

### Scenario

* Given the user has entered text into the filter input
* When the user clicks the sort button
* The the sorted list of pizzas should also be filtered according to the input
