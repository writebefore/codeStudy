/*
 * @Author: LHN
 * @Date: 2020-11-22 14:00:30
 * @LastEditors: LHN
 * @LastEditTime: 2020-11-22 14:17:52
 * @description: In User Settings Edit
 * @FilePath: \demo1\my-project\src\components\NameCar.js
 */
import React from "react";

class NameCard extends React.Component {
  render() {
    const {name, number, isHuman = true, tags=[1,2]} = this.props
    return (
        <div className='alert alert-success'>
            <h4 className='alert-heading'>{name}</h4>
            <ul>
                <li>电话:{number}</li>
                <li>{ isHuman ? '人类' : '外星生物' }</li>
                <hr/>
                <p>
                    {tags.map((tag, index) => (
                        <span className='badge badge-pill badge-primary' key={index}>{tag}</span>
                    ))}
                </p>
            </ul>
        </div>
    )
  }
}

export default NameCard