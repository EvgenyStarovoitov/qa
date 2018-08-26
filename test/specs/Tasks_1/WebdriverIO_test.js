browser.url('https://www.copaair.com/en/web/us');

describe('testing copaair.com', () => {
    // it('should hide/show fullform onClick', () => {
    //   let loginForm = $('#login-box');
    //   expect(browser.element('.login-connectmiles > div').getAttribute('class')).to.contain('ng-hide');
    //   // loginForm.click();
    //   loginForm.click();
    //   // browser.isVisible('.login-connectmiles > div');
    //   expect('.login-connectmiles > div').to.be.visible();
    // });

    // it('should show a dropdown menu on mousemove', ()=> {
    //   let navbar = $('.nav').$$('dropdown');
    //   navbar.forEach((el,i) => {
    //     // browser.moveTo(`.nav:nth-child(${i})`)
    //     expect(el.getAttribute('class')).is.to.contain('hover open');
    //   });
    // });

    it('booking tabs should change a class on "Active" onClick', () => {
        $('.nav-tabs-booking').$$('li').forEach(el => {
            el.click();
            expect(el.getAttribute('class')).to.contain('active');
        });
    });

    it('should hide the "return input" when "one way" is selected', () => {
        $('.nav-tabs-booking').$$('li')[0].click();
        $('#flightItem_T2').click();
        expect('#flightBooking_returnDate').is.be.visible();
        $('.nav-date .radio-items #flightBooking_tripType_OW').click();
        expect('#flightBooking_returnDate').is.be.not.visible();
    });

    it('should show the datapicker onClick departure input', () => {
        $('.nav-tabs-booking').$$('li')[0].click();
        $('#flightItem_T2').click();
        expect('.ng-daterangepicker').is.not.be.visible();
        browser.element('#flightBooking_departureDate').click();
        expect('.ng-daterangepicker').is.be.visible();
    });

});

