/// <reference types="Cypress" />

describe("My test suite", function () {

    before(() => {
        // runs once before all tests in the block
        cy.log("**********This is SETUP block**********");
      });
    
      beforeEach(() => {
        // runs before each test in the block
        cy.log("**********This is LOGIN block**********");
      });
    
      afterEach(() => {
        // runs after each test in the block
        cy.log("**********This is LOGOUT block**********");
      });
    
      after(() => {
        // runs once after all tests in the block
        cy.log("**********This is TEAR DOWN block**********");
      });

  it("searching", function () {
    cy.log("**********This is Searching Test**********");
  });

  it("advanced searching", function () {
    cy.log("**********This is Advanced Searching Test**********");
  });

  it("listing products", function () {
    cy.log("**********This is Listing Product Test**********");
  });

});
