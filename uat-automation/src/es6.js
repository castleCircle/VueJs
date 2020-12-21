
let obj1 = {
  method1 : function(){
    console.log("method1 Called")
  },
  method2 : function(){
    console.log("method2 Called")
  }
}

obj1.method1()
obj1.method2()

let objA = {
  a:1,
  b:2
}

let objA_copy = {
  ...objA,c:3
}



var str1 = "문자열1"

const constant1 = "상수1";


var objArrow = {
    result : 0
  }

  var innerFunction

  objArrow.add = function(a,b){
    innerFunction = () => {
      this.result = a+b;
    }

    innerFunction();
  }

  objArrow.add(2,3);

  export {obj1,str1,constant1}
  export default objA_copy