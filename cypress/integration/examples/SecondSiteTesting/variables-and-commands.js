

describe('Verifying variables, cy and jq commands', () => {
    it('Navigate to a specific product page', () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains('Apparel & accessories').click();
        cy.get("a[href*='product/category&path=']").contains('Fragrance').click();

    });

    it('Navigate to another specific product page', () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains('Fragrance').click();
        cy.get("h1 .maintext").then(function($headerText) {
            const headerText = $headerText.text();
            cy.log("Header text is: " + headerText);
            expect(headerText).is.equal('Fragrance');
        });

    });

    it('Validate properties of the Contact Us page', () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name');
        
        
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(textOfForm => {
            const firstNameText = textOfForm.find('#field_11').text();
            expect(firstNameText).to.contain('First name');
        });

        cy.get('#field_11').then(nextText => {
            cy.log(nextText.text());

        });

    });



});