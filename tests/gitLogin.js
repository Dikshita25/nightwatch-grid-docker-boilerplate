const { browser } = require('nightwatch');

module.exports = {
  'First test execution': function(browser) {
    const git = browser.page.gitPage();

    git
      .openUrl()
      .page.gitPage()
      .setEmail('hello');
  },

  'Second test execution': function(browser) {
    const git = browser.page.gitPage();

    git.verifyHeading('Where the world builds software');
  }
};
