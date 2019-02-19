var global = 1;
function outer(){
  var outer_local = 2;
  function inner() {
    var inner_local = 3;
    return inner_local + outer_local + global;
  }
  return inner();
}
// 现在让我们来测试一下 inner()是否真的可以访问所有变量：
console.log( outer()) //6

var a = "global variable";
var F = function () {
  var b = "local variable";
  var N = function () {
    var c = "inner local";
    console.log("aaaa")
    return b; //这里返回的B作用域包含var c 赋值到N上
  }
  return N;
}
var inner = F();
console.log(inner())//local variable
//函数 N 有自己的私有空间，同时也可以访问 f()的空间和全局空间，所以 b 对它来说
// 是可见的。因为 F()是可以在全局空间中被调用的（它是一个全局函数），所以我们可以将
// 它的返回值赋值给另一个全局变量，从而生成一个可以访问 F()私有空间的新全局函数。

var inner;//placeholder
var F = function () {
  var b = "local variable"
  var N = function () {
    return b;
  }
  inner = N;
}
console.log(inner);//[Function: N]
console.log(inner());//local variable
//我们在 F()中定义了一个新的函数 N()，并且将它赋值给了全局变量 inner。由于
// N()是在 F()内部定义的，它可以访问 F()的作用域，所以即使该函数后来升级成了全局
// 函数，但它依然可以保留对 F()作用域的访问权。

function F1 (param) {
  var N = function () {
    return param;
  }
  param++;
  return N;
}
console.log(F1(123)()); //124
// N 被赋值时函数并没有被调用，调用是在 N 被求值，也就是执行 return N;语句时发生的。函数所绑定的是作用域本身，而不是
// 在函数定义时该作用域中的变量或变量当前所返回的值。——译者注
// 请注意，当我们的返回函数被调用时
// ② ，param++已经执行过一次递增操作了。所以
// inner()返回的是更新后的值。由此我们可以看出，


function F3() {
  var arr = [], i;
  for (i = 0; i < 3; i++) {
    arr[i] = function () {
      return i;
    };
  }
  return arr;
}
var arr1 = F3();

console.log(arr1[0]()); //3
console.log(arr1[1]()); //3
console.log(arr1[2]()); //3

