

describe('Test - Contact Us Form - Site Two', () => {
    it('Should be able to submit', () => {

        cy.visit("https://automationteststore.com/");
        //cy.get('.info_links_footer > :nth-child(5) > a').click()
        //cy.xpath("//a[contains(@href,'contact')]").click()
        cy.get("a[href$='contact']").click().then(function(linkedText) {
            cy.log("This text is linkable: " + linkedText.text());
        });
        
        cy.get('#ContactUsFrm_first_name').type('Zexon');
        cy.get('#ContactUsFrm_email').type('zelimir.ilic@gmail.com');
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry').type("Some additional text for test");
        cy.get("button[title='Submit']").click();
        cy.title().should('eq','Contact Us');
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');


        

    });
});