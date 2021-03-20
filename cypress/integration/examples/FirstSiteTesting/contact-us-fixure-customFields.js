

describe("Test - Contact Us Form - Site One", () => {

    before(() => {
        cy.fixture("example").then(function(data) {
            //this.data = data;
            globalThis.data = data;
        });
    });

    beforeEach(function() {
        cy.visit(Cypress.env("homePage") + "/Contact-Us/contactus.html");   //Set dinamic url
    });

    it('Should be able to submit', () => {
        
        //cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get("#contact-us").click()
     
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        // cy.get('[name="first_name"]').type(data.firstName);
        // cy.get('[name="last_name"]').type(data.lastName);
        // cy.get('[name="email"]').type(data.email);
        // cy.get('textarea.feedback-input').type(data.textArea);

        cy.fill_Form_WebDrUni(Cypress.env('firstName'), data.lastName, data.email, data.textArea, "h1", "Thank You for your Message!");

        
        cy.title().should('be.equal', 'Gianni Bruno - Designer');
        cy.title().should('include', 'Gianni Bruno');
        cy.url().should('include', 'contact-form-thank-you');

    });
    
    it('Should not be able to submit', () => {
        
        //cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        
        
        cy.fill_Form_WebDrUni(data.firstName, data.lastName, " ", data.textArea, "body", "Invalid email address");

        cy.title().should('be.equal', 'Contact form handler');
        

    });
});