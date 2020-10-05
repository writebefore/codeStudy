/*
 * @Author: LHN
 * @Date: 2020-10-05 14:49:38
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-05 16:27:08
 * @description: In User Settings Edit
 * @FilePath: \手写浏览器\查找子串.js
 */
let response = `
<html>
    <head></head>
    <body>
        <div> << </div>
    </body>
</html>
`;

// 解析成 DOM 树
// 分词(词法分析)<有限状态机> -> 语法分析() -> AST(抽象语法树)
// 拿出所有的标签名 (开始标签 结束标签)
let currentToken = null;
let stack = [{type: 'document', children: []}]
function parseDom(response) {
  let state = data;
  for (let c of response) {
    state = state(c);
  }
}

function data(c) {
  if (c === "<") {
    return tagOpen;
  }
  return data;
}

function tagOpen(c) {
  if (c === "/") {
    currentToken = {
      type: "endTag",
      tagName: "",
    };
  } else {
    currentToken = {
      type: "startTag",
      tagName: c,
    };
  }
  return tagName;
}

function tagName(c) {
  if (c.match(/[a-z]/)) {
    currentToken.tagName += c;
    return tagName;
  } else if (c === ">") {
    console.log(currentToken);
    emitToken(currentToken);
    return data;
  }
  return data;
}

function emitToken(token){
    token = {
        ...token,
        children: [],
        nodeType: 'element'
    }
    let top = stack[stack.length - 1];
    if(token.type === 'startTag'){
        stack.push(token);
        top.children.push(token);
    } else{
        if(top.tagName === token.tagName){
            stack.pop();
        }
    }
}

parseDom(response);
console.log(stack[0]);