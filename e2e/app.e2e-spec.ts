import { Multiformangular2Page } from './app.po';

describe('multiformangular2 App', () => {
  let page: Multiformangular2Page;

  beforeEach(() => {
    page = new Multiformangular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
