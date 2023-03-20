describe('data driven testing HOOKS', () => {
    before(function(){
        cy.fixture('example.json').then(function(data){
            globalThis.data=data
        })
    })
    it('first', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type(data.name)
        cy.get('input[name="password"]').type(data.password)
        cy.get('button[type="submit"]').click()
        // cy.get('.oxd-button').click()
        // cy.get('.oxd-dropdown-menu').click()
        // cy.contains('Logout').click()



        // do it for multiple data.
    });
});