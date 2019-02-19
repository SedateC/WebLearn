var hero = {}// 创建了一个空对象
var hero = {
  name: 'Rafaelo',
  sayName: function() {
    return this.name;
  }
};
 hero.sayName();
//也就是说，当我们引用 this 值时，实际上所引用的就是“这个对象”或者“当前
// 对象”。
var hero = {
  name: 'Rafaelo',
  sayName: function() {
    return this.name;
  }
};
 console.log(hero.sayName());
/*
* 通过 instanceof 操作符，我们可以测试一个对象是不是由某个指定的构造器函数所
创建的。*/
var o  = new Object();
console.log("--------------------");
console.log(o.constructor);
console.log(o.toString());
console.log(o.valueOf());
//valueOf()方法也是为所有对象共有的一个方法。对于简单对象（即以 Object()
// 为构造器的对象）来说，valueOf()方法所返回的就是对象自己

