/*
 * @Author: LHN
 * @Date: 2020-11-05 10:22:18
 * @LastEditors: LHN
 * @LastEditTime: 2020-11-05 11:24:58
 * @description: In User Settings Edit
 * @FilePath: \虚拟DOM及diff算法\dom-diff\src\mian.js
 */
import { createElement, render } from "./element.js";

let virtualDom1 = createElement("ul", { class: "list" }, [createElement("li", { class: "item" }, ["2"])]);

let el = render(virtualDom1)

console.log(virtualDom1);
