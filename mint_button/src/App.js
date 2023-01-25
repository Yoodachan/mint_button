import { Router,Route,Routes,Link,useNavigate,Outlet } from "react-router-dom"
import { useState } from 'react';

import Header from './components/Header';
import Main from './components/Main';

import Game from './components/Game';
import GameHome from './components/GameHome';
import GameDetail from './components/pages/GameDetail';
import GameUpload from './components/GameUpload';

import Store from './components/Store';
import StoreHome from './components/StoreHome';
import StoreDetail from './components/pages/StoreDetail';

import Footer from './components/Footer';
import TitleData from './data/TitleData';

import ResetStyles from './components/style/Reset';


function App() {
  let [title,setTitle] = useState(TitleData);
  // let test = '날짜';
  return (
    <div className="App">
        <ResetStyles/>
          <Header/>
            <Routes>
              <Route path="/" element={ <Main/> } />
              <Route path="*" element={ <div>404</div> } />
              <Route path="/game" element={ <Game/> }>
                <Route path="home" element={ <GameHome/>} />
                <Route path='detail/:id' element={ <GameDetail title={ title } /> } /> 
                <Route path="upload" element={ <GameUpload/>} />
              </Route>
              <Route path="/store" element={ <Store title={ title }/> } >
                <Route path="home" element={ <StoreHome title={ title } /> } />
                <Route path='detail/:id' element={ <StoreDetail title={ title } /> } /> 
              </Route>
            </Routes>
          <Footer/>
    </div>
  );
}

export default App;
