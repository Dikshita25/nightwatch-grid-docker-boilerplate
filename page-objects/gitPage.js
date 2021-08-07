const { browser } = require('nightwatch');
const nightwatchConfig = require('../nightwatch.conf.js');

module.exports = {
  elements: {
    email: '#user_email',
    heading: {
      selector:
        '//h1[@class="h1-mktg color-text-white mb-3 position-relative z-2"]',
      locateStrategy: 'xpath'
    }
  },
  commands: [
    {
      openUrl() {
        return this.api.url(nightwatchConfig.test_settings.default.launch_url);
      },
      setEmail(email) {
        return this.assert
          .visible('@email', 'Email field is displayed')
          .click('@email')
          .setValue('@email', email);
      },
      verifyHeading(expectedText) {
        return this.assert
          .visible('@heading', 'heading is displayed')
          .getText('@heading', function(result) {
            this.assert.equal(result.value, expectedText);
          });
      }
    }
  ]
};
