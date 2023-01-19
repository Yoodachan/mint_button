import { Route,Routes,Link } from "react-router-dom"

import Header from './components/Header';
import Home from './components/Home';
import Game from './components/Game';
import Store from './components/Store';
import Detail from './components/pages/StoreDetail';
import Footer from './components/Footer';

import './css/Reset.css';


function App() {
  // let test = '날짜';
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/game" element={ <Game/> } />
        <Route path="/store" element={ <Store/> } />
        
        <Route path="/detail" element={ <Detail/> } />        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
