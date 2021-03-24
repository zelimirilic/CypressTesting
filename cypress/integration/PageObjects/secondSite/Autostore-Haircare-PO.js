

class Autostore_Haircare_PO {
  addHaircareProductToBasket() {

    globalThis.data.productName.forEach((element) => {
      cy.addItemToBasket(element);
    });
    
    cy.get(".dropdown-toggle > .fa").click();
  }
}

export default Autostore_Haircare_PO;
