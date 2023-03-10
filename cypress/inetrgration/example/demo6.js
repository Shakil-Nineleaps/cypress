describe('iteration', () => {
    it('', () => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()
        //all the product name
        cy.get('.fixed_wrapper .prdocutname').each(($el,index,$list)=>{
            cy.log("index"+index+":  "+$el.text())
        })
    });

    // create test case and write a code which itrate and pick any one product and clck it
    it.only('itrate and pick any one product and clck it', () => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()
        // cy.get('.fixed_wrapper .prdocutname').eq(2).click()
        cy.get('.fixed_wrapper .prdocutname').each(($el,index,$list)=>{
            // if($el.text().includes('Pantene Pro-V Conditioner, Classic Care')){
            //     cy.wrap($el).click()
            // }

            if(index==2){
                cy.wrap($el).click()
            }
        })
    });
});