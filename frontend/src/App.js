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

    </div>
  );
}

export default App;
