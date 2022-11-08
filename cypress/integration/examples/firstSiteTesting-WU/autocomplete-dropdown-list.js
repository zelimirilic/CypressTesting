describe("Verify autocomplete dropdown list", () => {
  it("Select specific product in autocomplete list", () => {
    cy.visit("http://webdriveruniversity.com");
    cy.get("#autocomplete-textfield")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#myInput").type("A");
    cy.get("#myInputautocomplete-list >*")
      .each(($el, index, $list) => {
        const product = $el.text();
        const productForSelect = "Artichoke";

        if (product === productForSelect) {
          $el.trigger("click");
          cy.get("#submit-button").click();
          cy.url().should("include", productForSelect);
        }
      })
      .then(() => {
        cy.get("#myInput").type("G");
        cy.get("#myInputautocomplete-list >*").each(($el, index, $list) => {
          const product = $el.text();
          const productForSelect = "Grapes";

          if (product === productForSelect) {
            $el.trigger("click");
            cy.get("#submit-button").click();
            cy.url().should("include", productForSelect);
          }
        });
      });
  });
});
