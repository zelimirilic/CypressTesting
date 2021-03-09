

describe("Handling data", () => {
  
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    });
      it("Calculate and assert all user ages", () => {
        let userData = [];
        let numberAges = 0;
        cy.get('#thumbnail-1>table>tbody>tr>td').each(($el, index, $list) => {        //it works too : '#thumbnail-1 td' 

            userData[index] = $el.text();
            cy.log(userData[index]);
        }).then(() => {

        for(var i = 0; i < userData.length; i++) {
            if(Number(userData[i])) {
                numberAges += Number(userData[i])
            }

            
        }
        cy.log('Total age of user is equal: ' + numberAges);
        expect(numberAges).to.eq(322);

        });
        
      });

      it.only("Calculate and assert ages of user based on last name", () => {
          cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
            var text = $el.text()
            if(text.includes('Jones')) {
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function(age) {

                    var userAge = age.text();
                    expect(userAge).to.eq('27');

                })
            }
          });
       
        
      });
    
  });
    