const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 10000, // Timeout in milliseconds (e.g., 10 seconds)
    includeShadowDom: true, // Enable shadow DOM traversal
  },
});
