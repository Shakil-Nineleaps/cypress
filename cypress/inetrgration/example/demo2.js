//dfd
///<reference types="Cypress">
describe('THis is my first trest case', () => {
    it('this is my first tes', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        // cy.get('.oxd-button').click()
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        //check the login name
        // cy.get('.oxd-userdropdown-tab').should('have.text','ankita22cevtl6 46QPa')
        //Task For the day
        //this is called jlink
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
        cy.get('.oxd-dropdown-menu').find('.oxd-userdropdown-link').should('have.length',4)
        ////home work promises
        cy.get('.oxd-dropdown-menu').find('.oxd-userdropdown-link').eq(3).contains('Logout').then((lastlink)=>{
        const linkname=lastlink.test()
    cy.log(linkname)
    cy.wrap(lastlink).click()})
    }); 
});