import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import ChatPage from './components/ChatPage';

function App() {
  return (
    <div className="App">
      {/* <NavBar></NavBar> */}
      <NavBar /> 
        <Routes> 
          <Route path="chat" component = {ChatPage}></Route>
          <Route path="home" component = {<LandingPage />}></Route>
          <Route path="/" exact component = {<LandingPage />}></Route>
        </Routes>

      {/* <header className="App-header">
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
        <div> */}
        {/* </div>

      </header> */}

          {/* ---------------- uncomment when needed -------------------------------- */}
    </div>
  );
}

export default App;
