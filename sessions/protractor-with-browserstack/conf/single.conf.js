var credentials = require('./credentials');
exports.config = {
  'specs': [ '../specs/single.js' ],
  'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',

  'capabilities': {
    'browserstack.user': credentials.username,
    'browserstack.key': credentials.key,
    'build': 'protractor-browserstack',
    'name': 'single_test',
    'browserName': 'chrome',
    'resolution': '1024x768',
    'browserstack.debug': 'true'
  }
};
