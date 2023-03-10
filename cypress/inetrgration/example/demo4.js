describe('test', () => {
    it('', () => {
        cy.visit('https://automationteststore.com/')
        // cy.get('.info_links_footer > :nth-child(5) > a').click()
        
        // cy.get('.col-md-6 > .btn').click()
        // cy.get('a[href$="contact"]').click()
        cy.xpath('//a[contains(text(),"Contact")]').click()
        // cy.xpath('//a[contains(@href,"contact"]').click()
         cy.get('#ContactUsFrm_first_name').type("shakil")
        // cy.get('#ContactUsFrm_first_name').should('equal',"shakil")
        cy.get('#ContactUsFrm_email').type('sa1316332@gmail.com').should('have.attr','name','email')
        cy.get('#ContactUsFrm_enquiry').type('asdasdasdasda')
        cy.xpath('//*[@type="submit" and @class="btn btn-primary lock-on-click"]').click()
        cy.xpath("//*[contains(text(),'owner')]").should('have.text','Your enquiry has been successfully sent to the store owner!')
        // cy.get('input[title="Submit"]').click()
        // console.log("test compllete")
        cy.log("test complete")
    });
});