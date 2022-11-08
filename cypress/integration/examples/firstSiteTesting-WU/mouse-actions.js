

describe("Test mouse actions", () => {
    it('Scroll element into view', () => {

        cy.visit("http://webdriveruniversity.com");
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({force:true});    

    });

    it('Drag&Drop certain item', () => {

        cy.visit("http://webdriveruniversity.com");
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({force:true});

        cy.get('#draggable').trigger('mousedown', {which: 1});
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true});

    });

    it('Double mouse click on certain item', () => {

        cy.visit("http://webdriveruniversity.com");
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({force:true});

        cy.get('#double-click').dblclick();

    });

    it.only('Hold down left mouse click on certain item', () => {

        cy.visit("http://webdriveruniversity.com");
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({force:true});

        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element) => {

            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')

        })

    });

});