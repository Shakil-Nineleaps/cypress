// window switch 
describe('window swtich', () => {
    it('test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click()
    });
    it.only('', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.contains('Click Here').invoke('removeAttr','target').click()
    });
});