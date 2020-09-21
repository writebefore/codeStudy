/*
 * @Author: your name
 * @Date: 2020-09-17 16:08:56
 * @LastEditTime: 2020-09-17 16:49:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \数据结构\循环队列.js
 */
class SqQueue {
    constructor(length){
        this.queue = new Array(length = 1);
        // 队头
        this.first = 0;
        // 队尾
        this.last = 0;
        // 当期队列的大小
        this.size = 0;
    }
    enQueue(item) {
        // 判断队尾 + 1 是否为队头
        // 如果是就要扩容数组
        // % this.queue.length 防止数组越界
        if(this.first === (this.last + 1) % this.queue.length) {
            this.resize();
        }
        this.queue[this.last] = item;
        this.size ++;
        this.last = (this.last + 1) % this.queue.length;
    }
    getLength() {
        return this.queue.length - 1
    }
    resize(length){
        let q = new Array(length);
        for(let i = 0; i < length; i++){
            q[i] = this.queue[(i + this.first) % this.queue.length]
        }
        this.queue = q;
        this.first = 0;
        this.last = this.size;
    }

    deQueue() {
        if(this,isEmpty()){
            throw Error('Queue is empty');
        }
        let r = this.queue[this.first];
        this.queue[this.first] = null;
        this.first = (this.first + 1) % this.queue.length;
        this.size --;
        
        return r;
    }

    isEmpty(){
        return this.first === this.last;
    }

}