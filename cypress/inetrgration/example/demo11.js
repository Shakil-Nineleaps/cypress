describe('drag and drop', () => {
    it('drag', () => {
        cy.visit('https://simple-drag-drop.glitch.me/')
        // cy.contains('A').trigger('mousedown')
        // cy.wait(set)
        // cy.contains("B").trigger('mousemove').trigger('mouseup')
        cy.get('.box').eq(0).trigger('mousedown')
        cy.get('.box').eq(1).trigger('mousemove').trigger('mouseup')
    })
});