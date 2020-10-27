<!--
 * @Author: LHN
 * @Date: 2020-10-17 13:11:52
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-23 11:26:36
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

- 代码

```js
function StorageBase() {}
StorageBase.prototype.getItem = function (key) {
  return localStorage.getItem(key);
};
StorageBase.prototype.setItem = function (key, item) {
  return localStorage.setItem(key, item);
};

const Storage = (function () {
  let instance = null;
  return function () {
    if (!instance) {
      instance = new StorageBase();
    }
    return instance;
  };
})();
const storage1 = new Storage();
const storage2 = new Storage();

storage1.setItem("name", "test1");
storage2.setItem("name", "test2");

console.log(storage1.getItem("name"));
console.log(storage2.getItem("name"));
console.log(storage1 === storage2);
```

## 装饰器模式

- 意图：动态地给一个对象添加一些额外的职责。就增加功能来说，装饰器模式相比生成子类更为灵活。

- 主要解决：一般的，我们为了扩展一个类经常使用继承方式实现，由于继承为类引入静态特征，并且随着扩展功能的增多，子类会很膨胀。

- 何时使用：在不想增加很多子类的情况下扩展类。

- 如何解决：将具体功能职责划分，同时继承装饰者模式。

- 关键代码:

1. Component 类充当抽象角色，不应该具体实现。
2. 修饰类引用和继承 Component 类，具体扩展类重写父类方法。

- 应用实例:

1. 孙悟空有 72 变，当他变成"庙宇"后，他的根本还是一只猴子，但是他又有了庙宇的功能。
2. 不论一幅画有没有画框都可以挂在墙上，但是通常都是有画框的，并且实际上是画框被挂在墙上。在挂在墙上之前，画可以被蒙上玻璃，装到框子里；这时画、玻璃和画框形成了一个物体。

优点：装饰类和被装饰类可以独立发展，不会相互耦合，装饰模式是继承的一个替代模式，装饰模式可以动态扩展一个实现类的功能。

缺点：多层装饰比较复杂。

使用场景:

1. 扩展一个类的功能。
2. 动态增加功能，动态撤销。

- 注意事项：可代替继承。
