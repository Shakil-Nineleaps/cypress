describe('post', () => {
    it('test 1', () => {
        cy.request({
            method : "POST",
            url :"https://reqres.in/api/users",
            headers :{
                accept :"application/json"
            },
            body :{
                
                    "name": "nineleaps",
                    "job": "tech indusrty"
                
            }
        }).then((response)=>{
            expect(response.status).to.eq(201);
        })
    });

});