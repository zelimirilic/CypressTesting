/// <reference types="Cypress" />

describe('MyTestSuite', function() {
    it('Table test', function () 
    {

    cy.visit("https://testautomationpractice.blogspot.com/");

    // 1) Check value anywhere in the table
    cy.get("table[name=BookTable]").contains('td', 'Learn Selenium');

    // 2) Check values in row and column
    cy.get("table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)").contains('Selenium').should('be.visible');

    // 3) Verify the book name "Master in JS" whose author is Amit
    cy.get("table[name=BookTable] > tbody > tr td:nth-child(2)").each(($e, index, $list) =>
    {
        const text = $e.text();
        if(text.includes('Amod'))
        {
            cy.get("table[name=BookTable] > tbody > tr td:nth-child(1)").eq(index).then(function(bname)
            {
                const bookName = bname.text();
                expect(bookName).to.equal('Master In Java');
            });
        }

    });


    });
});