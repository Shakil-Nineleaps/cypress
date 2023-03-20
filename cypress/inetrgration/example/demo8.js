// go to goggle
// search NINleaps
// scroll to linkedin
// click

describe('task', () => {
    it('practice', () => {
        cy.visit('https://www.google.com/')
        cy.get('.gLFyf').type('nineleaps{enter}')
        // cy.contains('Google Search').click()
        // cy.scrollTo('0','400')
        cy.get('a[href$="nineleaps"]').eq(0).scrollIntoView().click()
        // cy.get('a[href$="nineleaps"]').eq(0).click()
    });
    it.skip('Drag and Drop', () => {
        cy.visit('https://demo.automationtesting.in/Static.html')
        cy.get('#angular').trigger('mousedown')
        cy.get('#msg').trigger('mouseover').trigger('mouseup',{force:true})
    });
    it.only('double click', () => {
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.xpath("//button[contains(text(),'Double')]").dblclick()
        // for right click 
        cy.get('.context-menu-one').rightclick()
        cy.get('.context-menu-icon-delete > span').click()

    });
    it('save', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click()
        cy.get('.orangehrm-action-header .oxd-button').click()
        cy.get('.oxd-file-button').selectFile('')
    });
});