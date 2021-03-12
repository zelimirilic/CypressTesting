describe("Test datepicker", () => {
  it("Select date from datepicker", () => {
    //cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
    //cy.get("#contact-us").click()
    cy.visit("http://webdriveruniversity.com");
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });

    cy.get("#datepicker").click();

    var date = new Date();
    date.setDate(date.getDate() + 365);

    var futureYear = date.getFullYear();
    var futureMonth = date.toLocaleString('default', {month: 'long'});
    var futureDay = date.getDate();

    cy.log("Future year to select " + futureYear);
    cy.log("Future month to select " + futureMonth);
    cy.log("Future day to select " + futureDay);

    function selectYearAndMonth() {
      cy.get(".datepicker-dropdown").find(".datepicker-switch").first()
        .then((currentDate) => {
          if (!currentDate.text().includes(futureYear)) {
            cy.get(".next").first().click();
            cy.log(currentDate.text());
            selectYearAndMonth();
          }
        })
        .then(() => {
          cy.get(".datepicker-dropdown").find(".datepicker-switch").first()
            .then((currentDate) => {
              if (!currentDate.text().includes(futureMonth)) {
                cy.get(".next").first().click();
                cy.log(currentDate.text());
                selectYearAndMonth();
              }
            });
        });
    }

    function selectDay() {
      cy.get(".day").contains(futureDay).click();
    }
    selectYearAndMonth();
    selectDay();
  });
});
