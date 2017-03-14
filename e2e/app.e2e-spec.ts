import { Ng2materialPage } from './app.po';

describe('ng2material App', () => {
  let page: Ng2materialPage;

  beforeEach(() => {
    page = new Ng2materialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
