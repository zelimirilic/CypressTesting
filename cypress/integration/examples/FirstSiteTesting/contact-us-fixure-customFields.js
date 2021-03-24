import Homepage_PO from '../../PageObjects/firstSite/Homepage-PO';
import Contact_Us_PO from '../../PageObjects/firstSite/Contact-Us-PO';


describe("Test - Contact Us Form - Site One", () => {
    Cypress.config('defaultCommandTimeout', 20000)            //overidedefault command timeout

    const homepage_PO = new Homepage_PO();
    const contact_Us_PO = new Contact_Us_PO();

    before(() => {
        cy.fixture("example").then(function(data) {
            //this.data = data;
            globalThis.data = data;
        });
    });

    beforeEach(function() {
        homepage_PO.visitHomepage();
        homepage_PO.clickOn_ContactUs_Button();
    });

    it('Should be able to submit', () => {
     
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
      
        contact_Us_PO.contactFormSubmission(Cypress.env('firstName'), data.lastName, data.email, data.textArea, "h1", "Thank You for your Message!");
        
        cy.title().should('be.equal', 'Gianni Bruno - Designer');
        cy.title().should('include', 'Gianni Bruno');
        cy.url().should('include', 'contact-form-thank-you');

    });
    
    it('Should not be able to submit', () => {

        
        contact_Us_PO.contactFormSubmission(data.firstName, data.lastName, " ", data.textArea, "body", "Invalid email address");
        

        cy.title().should('be.equal', 'Contact form handler');
        

    });
});