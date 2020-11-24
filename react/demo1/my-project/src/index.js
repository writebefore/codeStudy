/*
 * @Author: LHN
 * @Date: 2020-11-18 10:43:11
 * @LastEditors: LHN
 * @LastEditTime: 2020-11-22 14:11:14
 * @description: In User Settings Edit
 * @FilePath: \demo1\my-project\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Welcome from './Welcome'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  // <React.StrictMode>
  //   <Welcome />
  // </React.StrictMode>
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
