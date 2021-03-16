

describe("Verify radio buttons on first site - webdriveruniversity.com", () => {

    before(function() {
        cy.visit("http://webdriveruniversity.com");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({force:true});
    });

    it('Check specific radio buttons', () => {

        cy.get('#radio-buttons').find("[type='radio']").first().click();
        cy.get('#radio-buttons').find("[type='radio']").eq(1).click();
    
    });

    it('Validate specific radio buttons', () => {

        cy.get("[value='lettuce']").should('not.be.checked');
        cy.get("[value='pumpkin']").should('be.checked');
        cy.get("[value='cabbage']").should('be.disabled');

        cy.get("[value='lettuce']").click();

        cy.get("[value='lettuce']").should('be.checked');
        cy.get("[value='pumpkin']").should('not.be.checked');
        cy.get("[value='cabbage']").should('be.disabled');

    });
    
});