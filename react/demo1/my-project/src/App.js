/*
 * @Author: LHN
 * @Date: 2020-11-18 10:43:11
 * @LastEditors: LHN
 * @LastEditTime: 2020-11-22 22:34:14
 * @description: In User Settings Edit
 * @FilePath: \demo1\my-project\src\App.js
 */
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCar'
import LikesButton from './components/LikesButton'
import DigitalClock from './components/DigitalClock'
import CommentBox from './components/CommentBox';
const tags = ['恐龙', '足球小子']

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
      <NameCard name="viking" number={1234567890} tags={tags}/>
      <LikesButton />
      <DigitalClock/>
      <CommentBox />
    </div>
  );
}

export default App;
