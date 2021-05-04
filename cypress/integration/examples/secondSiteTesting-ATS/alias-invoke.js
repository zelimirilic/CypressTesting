describe("Alias and invoke", () => {
  it("Validate a specific Fragrance product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Fragrance").click();

    cy.get(".fixed_wrapper .prdocutname")
      .eq(5)
      .invoke("text")
      .as("kindParfume");
    cy.get("@kindParfume").its("length").should("be.gt", 8);
    cy.get("@kindParfume").should("include", "Guilty");
  });

  it("Validate product thumbnail", () => {
    cy.visit("https://automationteststore.com/");
    cy.get('.thumbnail').as('productThumbnail');
    cy.get('@productThumbnail').should('have.length', 16);
    cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart');
  });

  it.only("Calculate product for sale and sold product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get('.thumbnail').as('productThumbnail');
   
    cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice');
    cy.get('.thumbnail').find('.pricenew').invoke('text').as('soldItemPrice');

    var itemsTotal = 0;
    cy.get("@itemPrice").then(($linkedPrice) => {
      var totalItemPrice = 0;
      var itemPrice = $linkedPrice.split('$');
      
      for(var i=0; i<itemPrice.length;i++) {
      cy.log(itemPrice[i]);
      totalItemPrice += Number(itemPrice[i]);
      }

      itemsTotal += totalItemPrice;
      cy.log('Product for sale items total: ' + totalItemPrice);
    });

    cy.get("@soldItemPrice").then(($linkedPrice) => {
      var totalSoldItemPrice = 0;
      var soldItemPrice = $linkedPrice.split('$');
      
      for(var i=0; i<soldItemPrice.length;i++) {
      cy.log(soldItemPrice[i]);
      totalSoldItemPrice += Number(soldItemPrice[i]);
      }

      itemsTotal += totalSoldItemPrice;
      cy.log('Product for sale items total: ' + totalSoldItemPrice);
    })
    .then(() => {
      cy.log('The total price of all products: ' + itemsTotal);
      expect(itemsTotal).to.equal(679.1);
    })
    

  });

});
