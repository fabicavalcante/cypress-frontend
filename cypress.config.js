const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  "reporterOptions": {
    "charts": true,
    "html": true,
    "reportDir": "cypress/reports",
    "reportFilename": "report",
    "overwrite": true 
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
