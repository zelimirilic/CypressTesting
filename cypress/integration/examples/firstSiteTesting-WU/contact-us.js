

describe("Test - Contact Us Form - Site One", () => {
    it.only('Should be able to submit', () => {
        
        //cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get("#contact-us").click()
        cy.visit("http://webdriveruniversity.com");
        cy.get("#contact-us").invoke('removeAttr', 'target').click({force:true});   //radi i sa i bez - pog;edaj dole
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.get('[name="first_name"]').type('Zeljko');
        cy.get('[name="last_name"]').type('Ilic');
        cy.get('[name="email"]').type('zelimir.ilic@gmail.com');
        cy.get('textarea.feedback-input').type('This comment is connected with test case.');
        cy.get('[type="submit"]').click();
        cy.title().should('be.equal', 'Gianni Bruno - Designer');
        cy.get("h1").should('have.text', 'Thank You for your Message!');
        cy.title().should('include', 'Gianni Bruno');
        cy.url().should('include', 'contact-form-thank-you');

    });
    
    it('Should not be able to submit', () => {
        
        //cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://webdriveruniversity.com");
        cy.get("#contact-us").invoke('removeAttr', 'target').click();               //radi i sa i bez - pog;edaj gore
        cy.get('[name="last_name"]').type('Ilic')
        cy.get('[name="email"]').type('zelimir.ilic@gmail.com')
        cy.get('textarea.feedback-input').type('This comment is connected with test case.')
        cy.get('[type="submit"]').click()
        cy.title().should('be.equal', 'Contact form handler')
        cy.get('body').contains('Error: all fields')

    });
});