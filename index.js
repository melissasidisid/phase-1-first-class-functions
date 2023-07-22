function receivesAFunction (callback){
   callback();
}

receivesAFunction();

function returnsANamedFunction (){
   function Named(){

   }
 return Named;
}



 function returnsAnAnonymousFunction(){
    return function(){
      
    };
 }