/*
 * @Author: LHN
 * @Date: 2020-11-18 10:49:55
 * @LastEditors: LHN
 * @LastEditTime: 2020-11-19 11:08:57
 * @description: In User Settings Edit
 * @FilePath: \demo1\my-project\src\Welcome.js
 */
import React from "react";

class Welcome extends React.Component {
  render() {
    const todoList = ["Learn React", "Learn Redux"];
    return (
      <div>
        <h1>hello React</h1>
        <ul>
          {todoList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Welcome;
