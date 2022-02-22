describe('Session Example', function () {

    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/template/e.html');
      })

    
    it('Name and Credentials', function () {
        cy.get('[name=namec]').type('Neha Mogra');        
    });

    it('Street', function () {
        cy.get('[name=street]').type('Happiness Street');        
    });

    it('Postal/Zip code', function () {
        cy.get('[name=zipcode]').type('000000');        
    });

    it('Country', function () {
        cy.get('select').select('Russia').should('have.value','1');      
        cy.get('select').select('Germany').should('have.value','2');      
        cy.get('select').select('France').should('have.value','3');      
        cy.get('select').select('Armenia').should('have.value','4');      
        cy.get('select').select('USA').should('have.value','5');      
    });

    it('Test Email Field', function () {
        cy.get('[name=email]').type('email@seera.com');        
    });

    it('Principle Investigator', function () {
        cy.get('[type="radio"]').check('Yes',{force:true});    
        cy.get('[type="radio"]').check('No',{force:true});       
    });
    
    it('Research Application Checklist', function () {
        cy.get('[type="checkbox"]').check('Prpoposal',{force:true});    
        cy.get('[type="checkbox"]').check('Abstract',{force:true});       
        cy.get('[type="checkbox"]').check('Narrative',{force:true});       

    });

    it('Click on Submit Button', function () {
        cy.get('button[type="submit"]').click();
             

    });
});