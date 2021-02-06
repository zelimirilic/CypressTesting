describe("Test number One", function () {
  it("Verify Title Of The Page", function () {
    cy.visit("https://demo.nopcommerce.com/");
    cy.title().should("eq", "nopCommerce demo store");
  });
});
