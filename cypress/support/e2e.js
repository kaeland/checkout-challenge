// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import "cypress-iframe";

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on("uncaught:exception", (err, runnable) => {
  // Without this callback, using Cypress to visit `www.samaritanspurse.org` generates
  // an `Uncaught exception` when running the tests. Cypress detects uncaught excepts in the application by default
  // and I needed to turn this off in order to get the tests to run. As a caveat, I've mimicked logging
  // any exceptions to a log console/file below.

  // Log the error to the console
  console.error("Uncaught exception:", err);

  // returning false here prevents Cypress from
  // failing the test when an uncaught exception is encountered
  return false;
});
