
// in a simple js Promises
let promise=new Promise((resolve,reject)=>{
    let a=2+1
    if(a===3){
        resolve('promise fullfilled')
    }
    else {
        reject('promise not fullfilled')
    }
})
promise.then((message)=>{
    console.log(message+" "+'promise has passed')
}).catch((message)=>{
    console.log(message+" "+'promise has failled')
})
