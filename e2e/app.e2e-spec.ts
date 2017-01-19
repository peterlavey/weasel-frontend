import { WeaselPage } from './app.po';

describe('weasel App', function() {
  let page: WeaselPage;

  beforeEach(() => {
    page = new WeaselPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
