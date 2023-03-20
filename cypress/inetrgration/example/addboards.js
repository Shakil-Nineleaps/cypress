describe('', () => {
    var api='23a7d50250764e65a59b0097fafcfdc3';
    var tok='ATTA5f58da895ab47c2d661d5ecd571b5fc979e93011ae2847d41f05452d06335703D572E5EE'
    it('', () => {
        cy.request({
            method:'POST',
            url:'https://api.trello.com/1/boards/?name=test&key='+api+'&token='+tok+''
        }).then((res)=>{
            expect(res.status).to.eq(200)
        })
    });
});