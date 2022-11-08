



describe("Verify checkboxes on first site - webdriveruniversity.com", () => {
    beforeEach(function() {

        cy.log(Cypress.env("name"));

        cy.visit("http://webdriveruniversity.com");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({force:true});
    });
    it('Check and validate checkbox on Webdriveruniversity.com', () => {
             
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1');
        cy.get('@option-1').check();
        cy.get('@option-1').check().should('be.checked');

    });

    it('Uncheck and validate checkbox on Webdriveruniversity.com', () => {
                
        cy.get(':nth-child(5) > input').as('option-3');
        //cy.get('@option-3').uncheck();
        cy.get('@option-3').uncheck().should('not.be.checked');

    });

    it('Check and validate multiple checkboxes on Webdriveruniversity.com', () => {
        
        cy.get("input[type='checkbox']").check(['option-1', 'option-2', 'option-3', 'option-4']).should('be.checked');

    });

    /* === Test Created with Cypress Studio === */
    it('Click on certain Radio Buttons', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[value="green"]').check();
        cy.get('[value="yellow"]').check();
        cy.get('[value="purple"]').check();
        /* ==== End Cypress Studio ==== */
    });
});