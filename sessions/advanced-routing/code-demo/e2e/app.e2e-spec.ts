import { Angular4AdvancedRoutingAppPage } from './app.po';

describe('angular4-advanced-routing-app App', () => {
  let page: Angular4AdvancedRoutingAppPage;

  beforeEach(() => {
    page = new Angular4AdvancedRoutingAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
