// browser navigaiton command
// go back

// go forward,refresh.url()
describe('browser navigtaion commands', () => {
    it('', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.xpath('//a[contains("href$","admin")]').click()
        // cy.contains('Admin').click()
        cy.url().should('include','admin')
        cy.go('back')
        cy.go('forward')
        // its like a refresh but cache will not remove.
        cy.reload()
        //cache memory
        cy.reload(true)
        cy.title().should('include',"OrangeHRM")
        cy.document().should('have.property','charset','UTF-8')

        // url, document, title are reference command
        // back,forward and refresh are the browser naviagtion command
        
    });
});