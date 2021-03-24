/// <reference types="Cypress" />


class LoginPage {

    visit() {

        cy.visit("https://admin-demo.nopcommerce.com/login");
        
    }

    fillEmail(value) {

        const field = cy.get("input[name=Email]");
        field.clear();
        field.type(value)
        return this;
    }

    fillPassword(value) {

        const field = cy.get("input[name=Password]");
        field.clear()
        field.type(value)
        return this;
    }

    submit() {

        const button = cy.get("button[type=submit]");
        button.click();
    }

}

export default LoginPage;