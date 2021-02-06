/// <reference types="Cypress" />

describe("UI Elements", function () {
  it("Verify inputbox, radio buttons and all other required fields", () => {
    cy.visit("http://demo.automationtesting.in/Register.html");
    cy.url().should("include", "automationtesting");
    cy.title().should("eq", "Register");

    //cy.wait(10000);
    //Full name
    cy.get("input[ng-model=FirstName]")
      .should("be.visible")
      .should("be.enabled")
      .type("Zelimir");
    cy.get("input[ng-model=LastName]")
      .should("be.visible")
      .should("be.enabled")
      .type("Ilic");
    //Text Area
    cy.get("textarea[ng-model=Adress]").type("Tralala and blablabla");
    //Email address
    cy.get("input[type=email]").type("zelimir.ilic@gmail.com");
    //Telephine number
    cy.get("input[type=tel]").type("+38162250130");

    //Radio
    cy.get("input[value=Male]")
      .should("be.visible")
      .should("not.be.checked")
      .click();
    cy.get("input[value=FeMale]").should("be.visible").should("not.be.checked");

    //Checkboxes
    cy.get("input[type=checkbox]").check(["Movies"]);

    //Dropdown
    cy.get("#Skills").select("Javascript").should("have.value", "Javascript");
    //Languages
    cy.get("#msdd").click();
    cy.get(".ui-corner-all").contains("Turkish").click();
    cy.get(".ui-corner-all").contains("Slovak").click();
    //Country
    
    cy.get("[role=combobox]").click({ force: true });
    cy.get("#countries").select("Serbia").should("have.value", "Serbia");
    //Select Country
    cy.get("[role=combobox]").click({ force: true });
    cy.get(".select2-search__field").type("den");
    cy.get(".select2-search__field").type("{enter}");
    //Dropdown-date of birth
    /*
    cy.get("[role=combobox]").click({ force: true });
    cy.get('#yearbox').select("1972").should("have.value", "1972");
    cy.get('select[placeholder=Month]').contains("June");
    cy.get('#daybox').contains("10");
    cy.get('#submitbtn').click();
    cy.title().should('eq', 'Register');
    */
  });
});
