const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    //pageLoadTimeout: 60000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
