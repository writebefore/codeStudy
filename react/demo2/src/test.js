/*
 * @Author: LHN
 * @Date: 2020-11-23 20:45:09
 * @LastEditors: LHN
 * @LastEditTime: 2020-11-23 21:52:44
 * @description: In User Settings Edit
 * @FilePath: \react\demo2\src\test.js
 */
import React, { Component } from "react";

class GetSnapshotBeforeUpdate extends Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
    this.state = {
      message: ["4", "3", "2", "1", "0"],
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState(
        () => {
          this.state.messages.unshift(this.state.messages.length);
        },
        () => {
          this.setState({
            messages: this.state.messages,
          });
        }
      );
    }, 1000);
  }

  render() {
    let style = {
      height: "100px",
      width: "200px",
      border: "1px solid red",
      overflow: "hidden",
    };
    return (
      <ul style={style} ref={this.wrapper}>
        {this.state.message.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    );
  }
}
export default GetSnapshotBeforeUpdate