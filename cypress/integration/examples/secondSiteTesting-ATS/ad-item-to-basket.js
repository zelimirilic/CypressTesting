import Autostore_Homepage_PO from '../../PageObjects/secondSite-ATS/Autostore-Homepage-PO';
import Autostore_Haircare_PO from '../../PageObjects/secondSite-ATS/Autostore-Haircare-PO';

describe("Add multiple items to basket", () => {
  const autostore_homepage_PO = new Autostore_Homepage_PO();
  const autostore_haircare_PO = new Autostore_Haircare_PO();

    before(() => {
        cy.fixture("product").then(function(data) {
            globalThis.data = data;
        })
    });

  beforeEach(function () {

    autostore_homepage_PO.accesHomepage();
    autostore_homepage_PO.clickOnHairCareLink();

  });

  it("Add specific items to basket", () => {

    autostore_haircare_PO.addHaircareProductToBasket();

  });
});
