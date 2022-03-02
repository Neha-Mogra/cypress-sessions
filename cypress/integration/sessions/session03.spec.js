import  * as session03CC from  "../../fixtures/pageClasses/session03CC";


describe('Session03 Example', function () {

    before(() => {
        cy.visit('https://next-staging-ae.almosafer.com/en/flights/DXB-JED/2022-05-22/2022-05-25/Economy/1Adult');
      })
    
    it('Check Stop Filter Radio Button', function () {
        session03CC.selectDirectFlights();
    });

    it('Click Show All Button', function () {
        session03CC.selectShowAllButton();        
    });

    it('Check Airline Filter Checkbox', function () {
        session03CC.selectAirlineCheckbox();        
    });

    it('Select the first Flight button from Filtered result', function () {
        session03CC.selectFlightButton();   
    });


});