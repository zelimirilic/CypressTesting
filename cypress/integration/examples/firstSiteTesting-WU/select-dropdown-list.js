

describe("Interact with dropdown list", () => {
    it('Select specific value in dropdown list', () => {

        cy.visit("http://webdriveruniversity.com");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({force:true});

        cy.get('#dropdowm-menu-1').select('python').should('have.value', 'python');
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven');
        cy.get('#dropdowm-menu-3').select('JavaScript').contains('JavaScript');

        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG');

    });

   
       
       

    
});