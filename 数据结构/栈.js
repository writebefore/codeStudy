/*
 * @Author: LHN
 * @Date: 2020-09-17 14:52:14
 * @LastEditTime: 2020-09-17 15:02:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \数据结构\栈.js
 */
class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    return this.stack.push(item);
  }
  pop() {
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.getCount()-1]
  }
  getCount(){
    return this.stack.length;
  }
  isEmpty(){
    return !!this.getCount();
  }
}

let stack = new Stack();
