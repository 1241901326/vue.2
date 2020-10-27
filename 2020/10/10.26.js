// function add1(){
//     var i = 0;
//     function add2(){
//         return i++
//     }
//     return add2
// }

// var a = add1()
// console.log(a)
var i = 10 ;     
document.onclick =(function(){ 
    var i = 0; 
    return function() {       
        i++; 
        document.title =i; 
    } 
})();
console.log(i);