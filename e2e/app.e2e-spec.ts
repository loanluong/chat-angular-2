import { ChatAngular2Page } from './app.po';

describe('chat-angular-2 App', function() {
  let page: ChatAngular2Page;

  beforeEach(() => {
    page = new ChatAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
