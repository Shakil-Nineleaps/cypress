/// <reference types="cypress"/>

// const { post } = require("cypress/types/jquery");

// const { method } = require("cypress/types/bluebird");
// const { get } = require("cypress/types/lodash");

describe('trillio opration', () => {
    
  

    var APIToken="ATTA5f58da895ab47c2d661d5ecd571b5fc979e93011ae2847d41f05452d06335703D572E5EE";
    var APIKey="23a7d50250764e65a59b0097fafcfdc3";
    var iD;
   
    
    it('create a board', () => {
        
     cy.request({
        method:"POST",
        url:'https://api.trello.com/1/boards/?name={name}&key='+ APIKey +'&token='+ APIToken +'',
       
    body:{
        "name":"tested930"
    },

     }).then((response)=>{

        expect(response.status).to.eql(200);
        let res=JSON.parse(JSON.stringify(response.body))
        iD=res.id
     })


    });

    it('update a board',()=>{

        cy.request({
                 
            method:"PUT",
            url:'https://api.trello.com/1/boards/'+ iD +'?key='+ APIKey +'&token='+ APIToken +'&name=changed',

            body:{
                //"ID":iD,
                "name":"oh yah yah"

               

            }

        }).then((response)=>{

            expect(response.status).to.eql(200);
        })
        })

        it('get the board',()=>{

            cy.request({

            method:"get",

            url:'https://api.trello.com/1/boards/'+ iD +'?key='+ APIKey +'&token='+ APIToken +'&name=changed',


            }).then((response)=>{

                expect(response.status).to.eql(200);
            })
            })

        it('delete the board',()=>{

            cy.request({
           
                method:"delete",

                url:'https://api.trello.com/1/boards/'+iD+'?key='+APIKey+'&token='+APIToken+''


            }).then((response)=>{
                expect(response.status).to.eql(200);  
            })


        })
});