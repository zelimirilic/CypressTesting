

class Autostore_Homepage_PO {

    accesHomepage() {
        cy.visit("https://automationteststore.com/");
    }

    clickOnHairCareLink() {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    }
   
}

export default Autostore_Homepage_PO;