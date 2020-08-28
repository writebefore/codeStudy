// 入口文件
import React from "react"; // es6 import 全面使用es6
import ReactDOM from "react-dom";
import "./styles.css"; // xss WXSS global.css
import { MyComponent } from "./demo"

// react 语法  小程序的结合点

function App(){
    // WXML JSX
    return (
        <div className="App">
            App
            <MyComponent/>
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>,rootElement)

