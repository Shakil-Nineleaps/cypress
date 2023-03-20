describe('left part', () => {
    it('check box', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('input[type="checkbox"]').check().should('be.checked')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        // for perticular checkbox
        cy.get('input[type="checkbox"]').check('option1','option2')
    });
    it('dropdown', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select('Option1').should('have.value','option1')
    });
    it('autocomplete/dynamic drop down', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('Ind')
        cy.get('.ui-menu-item').each(($el,index,$list)=>{
            expect($list).to.have.length(3)
            if($el.text()=="Indonesia")
            cy.wrap($el).click()
        })
    });
    it('hide and show', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
    });
    it('alert', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#name').type('shakil')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        //assertion on alert
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello shakil, share this practice page and share your knowledge')
        })
    });
    it('radio button', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[value="radio1"]').check()
        // cy.get('input[value="radio1"]').uncheck()
    });
    it.only('mouse hover', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // cy.get('#mousehover').trigger('mouseover')
        // cy.contains('Top').click({force :  true})
        // cy.url().should('include','top')
        // cy.get('#mousehover').invoke('show')
        // cy.contains('Top').click({force:true})
        // cy.contains('Top').click({force:true})
        // cy.contains('Language')
    cy.get('.tableFixHead').find('tr td:nth-child(1)').each(($el,index,$list)=>{
        const data=$el.text()
            if(data.includes('Alex')){
                cy.get('.tableFixHead').find('tr td:nth-child(2)').eq(index).next().then((cost)=>{
                    const data1=cost.text()
                    cy.log(data1) 
                })
            }
        })
     });
    // preceding sibling and following siblings(padhna hai)  
});