describe('for put', () => {
    it('test', () => {
        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/2",
            header: {
                accept: "application/json"
            },
            body: {
                "name": "nineleaps",
                "job": "zion resident"
            }
        }).then((response) => {
            expect(response.status).to.eql(200)
        })
    });
});