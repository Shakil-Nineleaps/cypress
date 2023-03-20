describe('REST API testing', () => {
    var result;
    it('Simple get request', () => {
        result=cy.request('https://reqres.in/api/users/2');
        result.its("status").should('equal',200)
    });
    it('validate the response of the request', () => {
        cy.request({
            method :"GET",
            url : "https://reqres.in/api/users/2",
            headers:{
                accept:"application/json"
                // Authorization:"bearer token"
            }
        }).then((response)=>{
            //to ocnvert the response to json we use json.parse
            let body = JSON.parse(JSON.stringify(response.body))
            cy.log(body.data.email)
            // for assertion
            expect(body.data).has.property("email","janet.weaver@reqres.in")
            cy.log(body.data.id)
            // body.data.forEach((element) => {
            //     expect(element).to.have.all.keys("id","email","first_name","last_name")
            //     cy.log("id"+" " +element["id"]+"email:" + " " +element["email"])
            // });
        })
    });
});