
function f(x,fn){
     console.log(x);
      console.log(fn);
      fn()

}

f(10,function exec(){
     console.log(" i am expression passed to  hof ");

})