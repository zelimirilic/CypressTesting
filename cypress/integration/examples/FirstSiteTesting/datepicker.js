

describe("Test datepicker", () => {
    it('Select date from datepicker', () => {
        
        //cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get("#contact-us").click()
        cy.visit("http://webdriveruniversity.com");
        cy.get("#datepicker").invoke('removeAttr', 'target').click({force:true});

       
       
    });
    
});