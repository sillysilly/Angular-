import { HeroTestPage } from './app.po';

describe('hero-test App', () => {
  let page: HeroTestPage;

  beforeEach(() => {
    page = new HeroTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
