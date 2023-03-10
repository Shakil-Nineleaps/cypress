describe('select file', () => {
    it('test case1', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').selectFile('/home/nineleaps/Desktop/js/cypress automation/cypress/inetrgration/example/demo.html')
        cy.get('#file-submit').click()
    });
});