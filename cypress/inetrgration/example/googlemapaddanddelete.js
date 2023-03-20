describe('add and delte google map', () => {
    var id1
    it('', () => {
        cy.request({
            method: "POST",
            url: "http://216.10.245.166/maps/api/place/add/json?key= qaclick123",
            header: {
                accept: "application/json"
            },
            body: {
                "location": {
                    "lat": -38.383494,
                    "lng": 33.427362
                },
                "accuracy": 50,
                "name": "Frontline house",
                "phone_number": "(+91) 983 893 3937",
                "address": "29, side layout, cohen 09",
                "types": ["shoe park", "shop"],
                "website": "http://google.com",
                "language": "French-IN"
            },
        }).then((response)=>{
            let body=JSON.parse(JSON.stringify(response.body))
            cy.log(body)
            id1=body.place_id
        })
    });
    it('', () => {
        cy.request({
            method :"Delete",
            url:"http://216.10.245.166/maps/api/place/delete/json?key=qaclick123"
        }).then((response)=>{
            expect(response.status).to.eq(200)
            let body=JSON.parse(JSON.stringify(response.body))
            cy.log(body)
        })
    });
});