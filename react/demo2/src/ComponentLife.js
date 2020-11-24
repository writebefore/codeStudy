/*
 * @Author: LHN
 * @Date: 2020-11-23 15:03:19
 * @LastEditors: LHN
 * @LastEditTime: 2020-11-23 20:01:21
 * @description: In User Settings Edit
 * @FilePath: \react\demo2\src\ComponentLife.js
 */
import React from 'react';

class ComponentLife extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps');
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    render(){
        return(
            <div>
                生命周期函数
            </div>
        )
    }
}

export default ComponentLife