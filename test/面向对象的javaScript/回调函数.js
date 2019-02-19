function invokeAdd (a,b) {
  return a()+b();
}

function one () {
  return 1
}
function two () {
  return 2
}
invokeAdd(one,two)
console.log(invokeAdd(one,two))


function multiplyByTwo(a, b, c) {
  var i,ar =[];
  for (i=0;i<3;i++){
    ar[i] = arguments[i]*2
  }
  return ar;
}

function addOne (a) {
  return a+1;
}
console.log(multiplyByTwo(1,2,3))

function multiplyByThree(a, b, c, callback) {
  var i, ar = [];
  for(i = 0; i < 3; i++) {
    ar[i] = callback(arguments[i] * 2);
  }
  return ar;
}
//调用时候addone不能带（）带（）表示返回有值，不带表示是一个函数 （）表示函数调用 没括号表示函数引用
console.log(multiplyByThree(1,2,3,addOne))
var a = (function () {
  function someSetup () {
    var setup = 'done';
    console.log(setup);
  }
  function actualWork() {
    console.log('Worky-worky');
  }
  someSetup();
  return actualWork;
}() );
console.log(a)
