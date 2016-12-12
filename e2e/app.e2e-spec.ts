import { SimpleAngularWebsitePage } from './app.po';

describe('simple-angular-website App', function() {
  let page: SimpleAngularWebsitePage;

  beforeEach(() => {
    page = new SimpleAngularWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
