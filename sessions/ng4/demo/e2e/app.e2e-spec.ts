import { TestNg4Page } from './app.po';

describe('test-ng4 App', () => {
  let page: TestNg4Page;

  beforeEach(() => {
    page = new TestNg4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
