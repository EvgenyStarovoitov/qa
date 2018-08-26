browser.url('https://www.copaair.com/en/web/us');

describe('testing copaair.com', () => {

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

    it('should show alert notification when input wrong departure city', () => {
      $('.nav-tabs-booking').$$('li')[0].click();
      $('#flightItem_T2').click();
      browser.setValue('#originSearchString', 'test');
      $('#flightBooking_search').click();
      expect(browser.getText('*=no valid destination')).is.be.include('no valid destination');
    });

});

