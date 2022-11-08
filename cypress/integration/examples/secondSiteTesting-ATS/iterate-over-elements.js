

describe("Iterate over elements", () => {
  it("Log informations - hare cara products", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']")
      .contains("Hair Care")
      .click();

      cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {

        cy.log("Index: " + index + " : " + $el.text())    
        
        });
    
  });

  it("Add specific product to basket", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Fragrance").click();
    
    // cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {

    //     if($el.text().includes('Gucci Guilty')) {

    //         cy.wrap($el).click();

    //    }

    cy.selectProduct('Gucci Guilty');
        
    });

    it.only("Add another specific product to basket", () => {
      cy.visit("https://automationteststore.com/");
      cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
      
      
      cy.selectProduct('Eau Parfumee au The Vert Shampoo');
          
      });
    

});