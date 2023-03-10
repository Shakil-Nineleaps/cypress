describe('orange', () => {
    it('test1', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.contains("Admin").click()
        cy.get('.oxd-autocomplete-text-input > input').type("Li")
        cy.get('.oxd-autocomplete-dropdown > * > span').each(($el,index,$list)=>{
            if($el.text()=='Lisa  Andrews')
            cy.wrap($el).click()
        })
    });
});