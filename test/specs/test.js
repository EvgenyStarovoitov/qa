describe('testing copaair.com', () => {
  describe('testing login form', () => {
    it('should hide/show fullform onClick', () => {
      let loginForm = $('#login-box');
      loginForm.click();
    });
  });
  describe('testing navbar', () => {
    it('should show a dropdown menu on mousemove', ()=> {
      let navbar = $('.nav').$$('lfr-nav-item dropdown');
      navbar.forEach((el,i) => {
        // el.click();
        browser.moveTo(`.nav:nth-child(${i})`)
        expect(el.getAttribute('class')).to.contain('hover open');
      });
    });
  });
  describe('testing Booking navigation', () => {
    it('tabs should change a class on Active on click', () => {
        let navTabsBooking = $('.nav-tabs-booking').$$('li');
        navTabsBooking.forEach(el => {
            el.click();
            expect(el.getAttribute('class')).to.contain('active');
        });
    });
    it('tabs should have a logo', () => {
        let navTabsBooking = $('.nav-tabs-booking').$$('li');
        navTabsBooking.forEach(el => {
            el.$('a').getCssProperty('div','background');
        });
    });
  });
});

