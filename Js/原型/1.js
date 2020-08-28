// Person.prototype —— 显示原型

// Person.prototype.eat = function(){
//     console.log(`${this.name} like eat ${this.favoriteFood}`);
// }
// function Person(name,age,favoriteFood) {
//     this.name = name; 
//     this.age = age;
//     this.favoriteFood = favoriteFood;
// }

// let test1 = new Person("test1",18,"banana");
// let test2 = new Person("test2",18,"apple");
// console.log(test1.constructor);//让Person()构造出的所有的对象都能找到他自己的构造器

Person.prototype.name = 'test'
function Person() {
    
}
let person = new Person()
Person.prototype = {
    name:'aaa'
}
console.log(person);