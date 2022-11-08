/// <reference types="Cypress" />


describe('Custom Suite', function() {

    it('Login Test', function() {
        
        cy.login('admin@yourstore.com', 'admin');
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration');    //valid

        cy.login('admin@yourstore.com', 'admineeeeeeeeeee');
        cy.title().should('not.be.equal', 'Dashboard / nopCommerce administration');    //invalid

        cy.login('adminnnnnnnnnn@yourstore.com', 'admin');
        cy.title().should('be.equal', 'Your store. Login');    //invalid


    });

    it('Add Customer', function() {
        
        cy.login('admin@yourstore.com', 'admin');

        //Script for adding customer
        cy.log("Adding customer........................");


    });

    it('Edit Customer', function() {
        
        cy.login('admin@yourstore.com', 'admin');

        //Script for editing customer
        cy.log("Editing customer........................");


    });
});