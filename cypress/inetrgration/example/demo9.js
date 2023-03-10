describe('', () => {
    it('', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.xpath('//*[@type="search" and @class="search-keyword"]').type('ca')
        cy.get('.product:visible').should('have.length',4)
        cy.get('.product').as('citems')
        // cy.get('@citems').eq('2').contains("ADD TO CART").click()
        cy.get('@citems').each(($el,index,$list)=>{
        //    cy.log($el.find('h4.product-name').text())
          const name=$el.find('h4.product-name').text()
          if(name.includes('Cashews')){
            cy.wrap($el.find('button')).click()
          }

        })
        cy.title().should('include','GreenKart')
        //print the title
        cy.get('.brand').then((naam)=>{
            cy.log(naam.text())
        })
        //checkout
        cy.get('.cart-icon').click()
        cy.contains("PROCEED TO CHECKOUT").click()
        cy.contains('Place Order').click()
        cy.get('.chkAgree').click()
        cy.contains('Proceed').click()
    });
});
