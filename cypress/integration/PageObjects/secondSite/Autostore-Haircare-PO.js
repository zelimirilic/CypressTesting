

class Autostore_Haircare_PO {
  addHaircareProductToBasket() {

    globalThis.data.productName.forEach((element) => {
      cy.addItemToBasket(element).then(() => {
        //debugger
      })
    });
    
    cy.get(".dropdown-toggle > .fa").click().debug();
  }
}

export default Autostore_Haircare_PO;
