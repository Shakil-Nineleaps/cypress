///<reference types="Cypress"/>
describe('Alias and Invoke', () => {
    it('validate the first product', () => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke("text").as("productname1")
        cy.get('@productname1').its('length').should('be.greaterThan',5)
        //using alias click is not applicable
        cy.get('@productname1').should('includes',"Seaweed Conditioner")
        
    });
    it('validate how many pproducts are there', () => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()
        cy.get('.thumbnail').should('have.length',8)
    });
});