/*
 * @Author: LHN
 * @Date: 2020-11-22 18:46:39
 * @LastEditors: LHN
 * @LastEditTime: 2020-11-22 19:04:24
 * @description: In User Settings Edit
 * @FilePath: \demo1\my-project\src\components\LikesButton.js
 */
import React from "react";

class LikesButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
    // this.increaseLikes = this.increaseLikes.bind(this)
  }
  increaseLikes = () => {
    this.setState({
        likes: this.state.likes + 1
    })
  }
  render() {
    return (
      <div className="likes-button-component">
        <button type="button" className="btn button-outline-primary btn-lg" onClick={this.increaseLikes}>
          点赞{this.state.likes}
        </button>
      </div>
    );
  }
}

export default LikesButton
