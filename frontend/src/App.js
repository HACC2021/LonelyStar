import logo from './logo.svg';
import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import ChatPage from './components/ChatPage';

function App() {
  return (
    <div className="App">
      <NavBar /> 
        <Routes> 
          {/* <Route path="/chat" exact component = {ChatPage}> <ChatPage/> </Route> */}
          <Route path="/chat" element = {<ChatPage/>}> <ChatPage/> </Route>
          <Route path="/" exact element = {<LandingPage/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
