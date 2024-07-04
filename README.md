# SpriteCloud automation

## Introduction

Cypress automation project to automate UI tests for https://www.saucedemo.com and API tests for

https://reqres.in.

There are 3 test suites for cart, checkout and login functionalities for UI tests and 1 test suite for api test.

###### UI test suite

* SignIn test suite : Validates login for a valid user, login for a user with incorrect password and login check for locked out user.
* Cart test suite : Validates the cart add and remove functionality.
* Checkout test suite:
  * Validates happy path for checkout:
    * Checks add to cart
    * Checks cart count
    * Checks cart price and price during checkout is same.
  * Test case to validate order cancellation functionality.

###### API test suite

Includes the following test cases:

1. To get a list of users
2. To get a single user detail by id
3. Add a new user to users list to test the Users API POST request
4. Add a new user to users list and update detail to test the users API PUT request
5. Add a new user to users list and delete the user to test the users API DELETE request

## Requirements

* Operating System required should be:
  * macOS 10.15 and above (Intel or Apple Silicon 64-bit (x64 or arm64)) or
  * Linux Ubuntu 20.04 and above, Fedora 38 and above, and Debian 10 and above (x64 or arm64) or
  * Windows 10 and above (64-bit only)
* Node.js 18.x, 20.x, 22.x and above need to be installed.

## Installation

Install Cypress via npm:

    cd /your/project/path

    npm install cypress --save-dev

## Steps to run

* Open Cypress folder from project root

  npm run test
