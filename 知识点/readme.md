<!--
 * @Author: LHN
 * @Date: 2020-10-10 14:47:19
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-13 16:08:55
 * @description: In User Settings Edit
 * @FilePath: \知识点\readme.md
-->
## 基本数据类型

```js
Number, String, Bool, null, Undefined, Symbol, BigInt;
// Number: 0b 0o 0x 123 0.123e9
// String: string unicode 编码 '\u0065'
// Bool: true false
// null
// Undefined
// Symbol
// BigInt

// 基本数据类型调用方法时会进行包装 如'123'.toString() new String('123').toString()

// 一个 dom 同时属于一个父节点
// document.getElementBy... 是动态获取
// document.querySelectAll 是静态获取

// 继承
```

## Object

```js
//delete get set hasOwnProperty 当前这个对象
Object.getPrototypeOf(obj);
// obj.__proto__
Object.setPrototypeOf(obj, {b,2})
console.log(obj);
for(let k in obj){
    console.log(k)
}
```

## Position

相对于这个元素的包含块来计算
<https://developer.mozilla.org/zh-CN/docs/Web/CSS/All_About_The_Containing_Block>

## z-index

不同的层叠上下文才能生效
怎么形成新的层叠上下文
<https://developer.mozilla.org/zh-CN/docs/Web/CSS/All_About_The_Containing_Block>

## js操作 -> 回流 -> 重绘 -> 合成

css 里面 transform opacity 两个属性,
如果处于一个独立的图层 引起的变化直接达到合成阶段

## padding百分比

相对于宽度来计算的

## 几次回流

```js
DomA.style.width = DomA.offsetWidth + 1 + 'px' // 没有回流
DomB.style.width = DomA.offsetWidth + 1 + 'px' // 一次回流
DomC.style.width = DomA.offsetWidth + 1 + 'px' // 两次回流

// 应用 三次回流
```

## 函数是一等公民

函数和其他类型(bool,string,number)一样

都可以函数参数传递也可以作为函数的返回值返回