

class Homepage_PO {

    visitHomepage() {
        cy.visit(Cypress.env("homePage"));
    }

    clickOn_ContactUs_Button() {
        cy.get("#contact-us").invoke('removeAttr', 'target').click();
    }

}

export default Homepage_PO;