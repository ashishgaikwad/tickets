import { TicketsPage } from './app.po';

describe('tickets App', () => {
  let page: TicketsPage;

  beforeEach(() => {
    page = new TicketsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
