var  firstStr = 'ABCDE'
var  secondStr = 'ABCDfe'
var fundF = function (firstStr,secondStr){
    var b = firstStr.split('')
    var c = secondStr.split('')
     let  d = [];
     for(let i=0; i<b.length; i++){
         for (let j =0; j<c.length;j++){
             if(b[i] !== c[j]){
                 d.push(b[i]);
             }
         }
     }

     console.log(d)
}

fundF();