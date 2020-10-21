<!--
 * @Author: LHN
 * @Date: 2020-10-17 13:11:52
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-19 10:20:39
 * @description: In User Settings Edit
 * @FilePath: \设计模式\readme.md
-->

# 设计模式

## 工厂模式

- 意图：定义一个创建对象的接口，让其子类自己决定实例化哪一个工厂类，工厂模式使其创建过程延迟到子类进行。

- 主要解决：主要解决接口选择的问题。

- 何时使用：我们明确地计划不同条件下创建不同实例时。

- 如何解决：让其子类实现工厂接口，返回的也是一个抽象的产品。

- 关键代码：创建过程在其子类执行。

- 应用实例：您需要一辆汽车，可以直接从工厂里面提货，而不用去管这辆汽车是怎么做出来的，以及这个汽车里面的具体实现

- 代码

```js
// Person 构造函数
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  console.log(this.name);
};

// Car构造函数
function Car(model) {
  this.model = model;
}

Car.prototype.getModel = function () {
  console.log(this.model);
};

// 工厂模式体
function create(type, param) {
  if (this instanceof create) {
    return new this[type](param);
  } else {
    return new create(type, param);
  }
}

create.prototype = {
  person: Person,
  car: Car,
};
const person1 = new create("person", "test");
person1.getName();
const car1 = create("car", "BUGATTI");
car1.getModel();
```

## 单例模式

- 意图：保证一个类仅有一个实例，并提供一个访问它的全局访问点。

- 主要解决：一个全局使用的类频繁地创建与销毁。

- 何时使用：当您想控制实例数目，节省系统资源的时候。

- 如何解决：判断系统是否已经有这个单例，如果有则返回，如果没有则创建。

- 关键代码：构造函数是私有的。

- 应用实例：

1. 一个班级只有一个班主任。
2. Windows 是多进程多线程的，在操作一个文件的时候，就不可避免地出现多个进程或线程同时操作一个文件的现象，所以所有文件的处理必须通过唯一的实例来进行。
3. 一些设备管理器常常设计为单例模式，比如一个电脑有两台打印机，在输出的时候就要处理不能两台打印机打印同一个文件。

- 优点：

1. 在内存里只有一个实例，减少了内存的开销，尤其是频繁的创建和销毁实例（比如管理学院首页页面缓存）。
2. 避免对资源的多重占用（比如写文件操作）。
   缺点：没有接口，不能继承，与单一职责原则冲突，一个类应该只关心内部逻辑，而不关心外面怎么样来实例化。

- 使用场景：

1. 要求生产唯一序列号。
2. WEB 中的计数器，不用每次刷新都在数据库里加一次，用单例先缓存起来。
3. 创建的一个对象需要消耗的资源过多，比如 I/O 与数据库的连接等。
