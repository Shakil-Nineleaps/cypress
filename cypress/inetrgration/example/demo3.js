// synchronus and asynchronous
let test1=function () {
    setTimeout(function(){
        
   
    console.log('code starts here')

alert('this is an alert')
console.log('code ends here')
},5000)

}
let test2=function () {
    console.log('lokk')
}
test1()
test2()