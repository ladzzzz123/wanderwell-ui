import { WanderwellMapsPage } from './app.po';

describe('wanderwell-maps App', () => {
  let page: WanderwellMapsPage;

  beforeEach(() => {
    page = new WanderwellMapsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
