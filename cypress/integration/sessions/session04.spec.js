import  * as session04CC from  "../../fixtures/pageClasses/session04CC";


describe('Session04 Example', function () {

    
    it('Verify request payload for Sign in', function () {

        let email = "neha.mogra@seera.sa";
        let password = "Seera@2025";
        let firstName = "Nehamogra";


        cy.visit('https://next-staging-ae.almosafer.com/en');
        session04CC.clickSignInButton();
        cy.get('[name=email]').type(email);
        cy.get('[name=password]').type(password);



        cy.intercept('POST','api/account/v2/auth/local').as('signInAPI');
        session04CC.clickSignInSubmitButton();     
        cy.wait('@signInAPI').then(($login) => {
            let payload1 = $login.request.body;
            expect(payload1.email,'email matched').to.eq(email); 
            expect(payload1.password,'password matched').to.eq(password); 
        });
        
        cy.get('span').contains('My account').click();
        session04CC.clickProfileButton();
        
        cy.get('[data-testid=myaccount-traveller-firstName]').type(firstName);
        
        cy.intercept('PUT','api/account/v2/user/*').as('profileAPI');
        session04CC.clickSaveButton();     
        cy.wait('@profileAPI').then(($profile) => {
            cy.log($profile);
            let payload2 = $profile.request.body;
            let payload = $profile.response.body;
            expect(payload2.FirstName,'FirstName matched').to.eq(firstName); 
            expect(payload.FirstName,'FirstName matched').to.eq(firstName); 

        });





    });

    

 

})