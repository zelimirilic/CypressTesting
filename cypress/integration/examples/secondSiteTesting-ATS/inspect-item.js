

describe('Automation using chain of commands', () => {
    it('Click on third item using item header', () => {

        cy.visit("https://automationteststore.com/");
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(3) > .fixed_wrapper > .fixed > .prdocutname').click();
    
    });

    it('Click on third item using item header', () => {

        cy.visit("https://automationteststore.com/");
        cy.get('.prdocutname').contains('Bamba').click();

    });

    it('Click on third item using item header', () => {

        cy.visit("https://automationteststore.com/");
        cy.get('.fixed_wrapper').find('.prdocutname').eq(2).click().then(function(textOfHeader) {
            console.log("This is text of the third item: " + textOfHeader.text())
        });

    });
});