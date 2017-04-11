import { BarbaricAngularFrontendPage } from './app.po';

describe('barbaric-angular-frontend App', function() {
  let page: BarbaricAngularFrontendPage;

  beforeEach(() => {
    page = new BarbaricAngularFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
