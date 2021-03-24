/// <reference types="Cypress" />

import LoginPage from "../../PageObjects/zeroSite/LoginPage";

describe("Test suite", function () {
  it("Valid Login test", () => {

    const logPg = new LoginPage();

    logPg.visit();
    logPg.fillEmail("admin@yourstore.com");
    logPg.fillPassword("admin");
    logPg.submit();
    cy.title().should("be.equal", "Dashboard / nopCommerce administration");

  });
});
