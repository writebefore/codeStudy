/*
 * @Author: LHN
 * @Date: 2020-11-22 22:29:21
 * @LastEditors: LHN
 * @LastEditTime: 2020-11-22 22:55:22
 * @description: In User Settings Edit
 * @FilePath: \demo1\my-project\src\components\CommentBox.js
 */
import React from "react";

// 受控组件
// class CommentBox extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: "",
//     };
//   }
//   handleChange = (event) => {
//     this.setState({
//       value: event.target.value,
//     });
//     console.log(this.state.value);
//   };
//   handleSubmit = (event) => {
//     alert(this.state.value);
//     event.preventDefault();
//   };
//   render() {
//     return (
//       <form className="p-5" onSubmit={this.handleSubmit}>
//         <div className="form-group">
//           <label>留言内容</label>
//           <input type="text" className="form-control" placeholder="请输入内容" value={this.state.value} onChange={this.handleChange}></input>
//         </div>
//         <button type="submit" className="btn btn-primary">
//           添加
//         </button>
//       </form>
//     );
//   }
// }

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        
    }
  }

  handleSubmit = (event) => {
    alert(this.textInput.value)
    event.preventDefault();
  }

  render() {
    return (
      <form className="p-5" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>留言内容</label>
          <input type="text" className="form-control" placeholder="请输入内容" ref={(textInput) => {this.textInput = textInput}}></input>
        </div>
        <button type="submit" className="btn btn-primary">
          添加
        </button>
      </form>
    );
  }
}

export default CommentBox;
