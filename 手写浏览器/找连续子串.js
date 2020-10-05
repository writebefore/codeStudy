/*
 * @Author: LHN
 * @Date: 2020-10-05 11:04:12
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-05 11:52:40
 * @description: In User Settings Edit
 * @FilePath: \手写浏览器\找连续子串.js
 */

// const findAB = (str) => {
//   let foundA = false,
//     foundB = false;
//   for (let c of str) {
//     if (c == "a") {
//       foundA = true;
//     } else if (foundA && c === "b") {
//       return true;
//     } else {
//       foundA = false;
//     }
//   }
//   return false;
// };

// 优化

function find(str){
    let state = start;
    for(let c of str ){
        state = state(c);
    }

    return state === end;
}


function start(c) {
    if(c === 'a') return foundA(c);
    return start;
}

function end(c) {
    return end
}

function foundA(c){
    if( c === 'a'){
        return foundB
    }
    return start(c)
}

function foundB(c){
    if(c === 'b'){
        return foundC;
    }
    return start(c);
}

function foundC(c){
    if(c === 'c') {
        return end;
    }
    return start(c);
}