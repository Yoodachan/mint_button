import { Route,Routes,Link,useNavigate,Outlet } from "react-router-dom"
import { useState } from 'react';

import Header from './components/Header';
import Home from './components/Home';
import Game from './components/Game';
import GameHome from './components/GameHome';
import GameUpload from './components/GameUpload';
import Store from './components/Store';
import StoreHome from './components/StoreHome';
import Detail from './components/pages/StoreDetail';
import Footer from './components/Footer';

import './css/Reset.css';
import TitleData from './data/TitleData';


function App() {
  let [title,setTitle] = useState(TitleData);
  
  // let test = '날짜';
  return (
    
    <div className="App">
      
      <Header/>
      
      <Routes>
        <Route path="/" element={ <Home/> } />

        <Route path="/game" element={ <Game/> }>
          <Route path="home" element={ <GameHome/>} />
          <Route path="upload" element={ <GameUpload/>} />
        </Route>

        <Route path="/store" element={ <Store/> } >
          <Route path="home" element={ <StoreHome/> } />
          <Route path="detail" element={ <Detail title={ title }/> } /> 
        </Route>
               
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
