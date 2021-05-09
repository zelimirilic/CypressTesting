

describe("Test - Contact Us Form - Site One", () => {

    before(() => {
        cy.fixture("example").then(function(data) {
            //this.data = data;
            globalThis.data = data;
        });
    });
    it.only('Should be able to submit', () => {
        //Cypress.currentTest.retries(1);
        
        //cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get("#contact-us").click()
        cy.visit("http://webdriveruniversity.com");
        cy.get("#contact-us").invoke('removeAttr', 'target').click({force:true});   
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.get('[name="first_name"]').type(data.firstName);
        cy.get('[name="last_name"]').type(data.lastName);
        cy.get('[name="email"]').type(data.email);
        cy.get('textarea.feedback-input').type(data.textArea);
        cy.get('[type="submit"]').click();
        cy.title().should('be.equal', 'Gianni Bruno - Designer');
        cy.get("h1").should('have.text', 'Thank You for your Message!');
        cy.title().should('include', 'Gianni Bruno');
        cy.url().should('include', 'contact-form-thank-you');

    });
    
    it('Should not be able to submit', () => {
        
        //cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://webdriveruniversity.com");
        cy.get("#contact-us").invoke('removeAttr', 'target').click();
        cy.get('[name="last_name"]').type(data.lastName);
        cy.get('[name="email"]').type(data.email);
        cy.get('textarea.feedback-input').type(data.textArea);
        cy.get('[type="submit"]').click();
        cy.title().should('be.equal', 'Contact form handler');
        cy.get('body').contains('Error: all fields');

    });
});