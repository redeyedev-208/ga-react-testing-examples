describe('My React Testing Demo App', () => {
  it('should look correct', () => {
    browser.url(`/`);
    browser.execute('@visual.init*/', 'My React Testing Demo App');
    browser.execute('/*@visual.snapshot*/', 'Home Page');
  });
});
