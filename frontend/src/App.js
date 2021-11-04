import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <LandingPage></LandingPage>

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
          {/* <Switch> */}
            {/* <Route path="products" component = {Products}></Route> */}
            {/* <Route path="products" component = {Products}></Route> */}
            {/* <Route path="products" component = {Products}></Route> */}
          {/* </Switch> */}
    </div>
  );
}

export default App;
