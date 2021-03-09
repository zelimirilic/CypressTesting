

describe("Verify checkboxes on first site - webdriveruniversity.com", () => {
    it('Check and validate checkbox on Webdriveruniversity.com', () => {
        
        //cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get("#contact-us").click()
        cy.visit("http://webdriveruniversity.com");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({force:true});

        //cy.get('#checkboxes > :nth-child(1) > input').check();
        //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked');
        
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1');
        cy.get('@option-1').check();
        cy.get('@option-1').check().should('be.checked');

    });

    it('Uncheck and validate checkbox on Webdriveruniversity.com', () => {
        
        //cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get("#contact-us").click()
        cy.visit("http://webdriveruniversity.com");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({force:true});

        //cy.get(':nth-child(5) > input').uncheck();
        //cy.get(':nth-child(5) > input').uncheck().should('not.be.checked');
        
        cy.get(':nth-child(5) > input').as('option-3');
        //cy.get('@option-3').uncheck();
        cy.get('@option-3').uncheck().should('not.be.checked');

    });

    it('Check and validate multiple checkboxes on Webdriveruniversity.com', () => {
        
        //cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get("#contact-us").click()
        cy.visit("http://webdriveruniversity.com");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({force:true});

        cy.get("input[type='checkbox']").check(['option-1', 'option-2', 'option-3', 'option-4']).should('be.checked');

    });
    
});