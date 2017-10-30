describe('BrowserStack Local Testing', function() {
  it('can check tunnel working', function() {
    browser.driver.get('http://localhost:4200/').then(function() {
      expect(browser.driver.getPageSource()).toMatch(/Welcome to app!/i);
    });
  });
});

