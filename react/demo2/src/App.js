/*
 * @Author: LHN
 * @Date: 2020-11-23 14:02:31
 * @LastEditors: LHN
 * @LastEditTime: 2020-11-23 15:13:00
 * @description: In User Settings Edit
 * @FilePath: \react\demo2\src\App.js
 */
import logo from './logo.svg';
import './App.css';
import ComponentLife from './ComponentLife'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ComponentLife/>
    </div>
  );
}

export default App;
