function b(){
    var result = new Array();
      for(var i = 0; i< 10; i++){
        result[i] = function(){
          return i;
        }
      }
      console.log (result);
    }
   b();
   