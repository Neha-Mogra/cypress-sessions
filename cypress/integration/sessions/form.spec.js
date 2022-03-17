import formCC from "../../fixtures/pageClasses/formCC";

describe('Session Example', function () {

    beforeEach(() => {
        cy.visit('http://10.72.4.107:5500/example/e.html');
      })
    
    it('Name and Credentials', function () {
        formCC.typeName('Neha Mogra')
    });
    

    it('Street', function () {
        formCC.typeStreetName('Happiness Street');        
    });

    it('Postal/Zip code', function () {
        formCC.typeZipCode('000000');   
    });

    it('Country', function () {
        cy.get('select').select('Russia').should('have.value','1');      
        cy.get('select').select('Germany').should('have.value','2');      
        cy.get('select').select('France').should('have.value','3');      
        cy.get('select').select('Armenia').should('have.value','4');      
        cy.get('select').select('USA').should('have.value','5');      
    });

    it('Test Email Field', function () {
        formCC.typeEmail('email@seera.com');        
    });

    it('Principle Investigator', function () {
        formCC.radioPrincipal('Yes',{force:true});    
    });
    
    it('Research Application Checklist', function () {
        formCC.checkResearch('Prpoposal',{force:true});
    });

    it('Click on Submit Button', function () {
        formCC.buttonsubmit();
             
    });
});