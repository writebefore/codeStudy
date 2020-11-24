/*
 * @Author: LHN
 * @Date: 2020-11-05 10:23:40
 * @LastEditors: LHN
 * @LastEditTime: 2020-11-05 11:28:59
 * @description: In User Settings Edit
 * @FilePath: \虚拟DOM及diff算法\dom-diff\src\element.js
 */
class Element {
    constructor(type, props, children){
        this.type = type;
        this.props = props;
        this.children = children;
    }
}

function createElement(type, props, children) {
    return new Element(type, props, children)
}

function setAttr(node, key, value){
    switch(key){
        case 'value': // node 是input 或者textarea
            if (node.tagName.toUpperCase() === 'INPUT' || node.tagName.toUpperCase === 'TEXTAREA'){
                node.value = value;
            } else {
                node.setAttribute(key, value);
            }
        break;
        case 'style':
            node.style.cssText = value;
        default:
            node.setAttribute(key, value)
            break;
    }
}

// render 方法将vnode转化为真实dom
function render(Object){
    let el = document.createElement(Object.type);
    for(let key in Object.props){
        // 设置属性的方法
        setAttr(el, key, Object.props[key]);
    }
    // 遍历儿子节点, 如果是虚拟dom, 就递归渲染, 不是就代表是文本节点
    Object.children.forEach(child => {
        child = (child instanceof Element) ? render(child) : document.createTextNode(child)
        el.appendChild(child)
    });

    return el;
}

// 将元素插入到页面内
function  renderDom(el, target){
    target.appendChild(el);
}

renderDom(el, window.app)

export { createElement, render };
