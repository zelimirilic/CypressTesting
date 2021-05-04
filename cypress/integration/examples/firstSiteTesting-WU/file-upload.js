

describe("Test file upload", () => {
    it('Upload a file', () => {
        
        //cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get("#contact-us").click()
        cy.visit("http://webdriveruniversity.com");
        cy.get("#file-upload").invoke('removeAttr', 'target').click({force:true});

        cy.fixture("clown.png", 'base64').then(fileContent => {
            cy.get('#myFile').attachFile(

                {
                    fileContent,
                    fileName: 'clown.png',
                    mimeType:'image/png'
                },
                {
                    uploadType: 'input'
                }
            );
        });
        cy.get('#submit-button').click();
        
       
    });
    
    it('No upload a file', () => {
        
        //cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get("#contact-us").click()
        cy.visit("http://webdriveruniversity.com");
        cy.get("#file-upload").invoke('removeAttr', 'target').click({force:true});

        cy.get('#submit-button').click();
       
    });
});