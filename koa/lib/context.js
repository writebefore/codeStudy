/*
 * @Author: LHN
 * @Date: 2020-10-20 10:49:05
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-21 11:41:34
 * @description: In User Settings Edit
 * @FilePath: \koa\lib\context.js
 */
let proto = {}

function defineGetter(prop, name) { // prop 代表对象, name代表对象上的属性
    proto.__defineGetter__(name,function callback(){
        return this[prop][name]
    })
}

function defineSetter(prop, name){
    proto.__defineSetter__(name,function callback(val){
        return this[prop][name] = val;
    })
}


defineGetter('request', 'url')
defineGetter('request', 'path')
defineGetter('response', 'body')
defineSetter('response','body')

module.exports = proto