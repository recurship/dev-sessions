describe('Google\'s Search Functionality', function() {
  it('can find search results', function() {
    browser.driver.get('https://www.browserstack.com').then(function() {
        expect(browser.driver.getPageSource()).toMatch(/BrowserStack/i);
    });
  });
});
