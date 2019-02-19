function Person() {
  // Person() 构造函数定义 `this`作为它自己的实例.
  this.age = 0;

  setInterval(function growUp() {
    // 在非严格模式, growUp()函数定义 `this`作为全局对象,
    // 与在 Person()构造函数中定义的 `this`并不相同.
    this.age++;
    console.log(this.age);
  }, 1000);
}

var p = new Person();
function Person1(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| 正确地指向 p 实例
    console.log(this.age);
  }, 1000);
}

var p1 = new Person1();
