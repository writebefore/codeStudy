function Person(name){
    this.name = name
}

let p = new Person('Tom')

// 1 p.__proto__ = ? Person.prototype 

// 2 Person.__proto__ Function.prototype

var foo = {}
var F = function(){}

Object.prototype.a = 'value a'
Function.prototype.b = 'value b'


