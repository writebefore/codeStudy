/*
 * @Author: LHN
 * @Date: 2020-11-22 19:09:16
 * @LastEditors: LHN
 * @LastEditTime: 2020-11-22 22:27:30
 * @description: In User Settings Edit
 * @FilePath: \demo1\my-project\src\components\DigitalClock.js
 */
import React from 'react'

class DigitalClock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }
    }
    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        },1000)
    }
    
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        return (
            <div className="digital-clock-component jumbotron">
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default DigitalClock