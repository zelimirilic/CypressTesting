/// <reference types="Cypress" />



describe("My Test Suite", function () {
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

    it("Fixture Demo Test", function() {

    cy.visit("https://admin-demo.nopcommerce.com/login");
    cy.get("input[name=Email]").clear().type(this.data.email);
    cy.get("input[name=Password]").clear().type(this.data.password);
    cy.get("button[type=submit]").click();

  });
});
