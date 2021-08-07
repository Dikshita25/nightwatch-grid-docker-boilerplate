module.exports = {
  src_folders: ['tests'],
  page_objects_path: ['page-objects'],

  test_settings: {
    default: {
      launch_url: 'http://web',
      selenium_host: 'hub',
      desiredCapabilities: {
        browserName: 'chrome'
      },
      screenshots: {
        enabled: true,
        on_failure: true,
        path: 'tests_output/screenshots'
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome'
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox'
      }
    },
    chromeDebug: {
      desiredCapabilities: {
        browserName: 'chrome'
      }
    },
    firefoxDebug: {
      desiredCapabilities: {
        browserName: 'firefox'
      }
    }
  }
};
