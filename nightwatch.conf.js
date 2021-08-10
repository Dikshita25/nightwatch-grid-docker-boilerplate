module.exports = {
  src_folders: ['tests'],
  page_objects_path: ['page-objects'],
  test_settings: {
    default: {
      launch_url: 'https://github.com/',
      desiredCapabilities: {
        browserName: 'chrome'
      },
      selenium: {
        host: 'hub',
        port: 4444
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
    }
  }
};
