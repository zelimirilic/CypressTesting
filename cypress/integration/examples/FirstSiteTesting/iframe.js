

describe("Handling IFrame and Modals", () => {
    it('Handle iframe on Webdriveruniversity.com', () => {
        
        //cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get("#contact-us").click()
        cy.visit("http://webdriveruniversity.com");
        cy.get("#iframe").invoke('removeAttr', 'target').click({force:true});

        cy.get('#frame').then($iframe => {
            const body = $iframe.contents().find('body');
            cy.wrap(body).as('iFrame');
        });

        cy.get('@iFrame').find('#button-find-out-more').click();

        cy.get('@iFrame').find('#myModal').as('modal');

        cy.get('@modal').then($expectedText => {
            const text = $expectedText.text();
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range');
        });

        cy.get('@modal').contains('Close');
       
    });
    
});