import react, { useState,useEffect } from 'react';

import { Router,Route,Routes,Link,useNavigate,Outlet } from "react-router-dom"
import ResetStyles from './components/style/Reset';
import { authService } from 'Mybase';

// 헤더 앤 푸터
import Header from './components/Header';
import Footer from './components/Footer';

//메인
import Main from './components/Main';

//회원 가입 및 로그인 CRUD
import User from './components/User';
import UserInfo from './components/UserInfo';
import UserUpload from './components/UserUpload';
import UserUploadSuccess from './components/UserUploadSuccess';
import UserLogin from './components/UserLogin';
import UserJoin from './components/UserJoin';
import UserJoinSuccess from './components/UserJoinSuccess';

//게임 CRUD
import Game from './components/Game';
import GameHome from './components/GameHome';
import GameDetail from './components/pages/GameDetail';
import GameUpload from './components/GameUpload';
import GameSuccess from './components/GameUploadSuccess';

//상점 CRUD
import Store from './components/Store';
import StoreHome from './components/StoreHome';
import StoreDetail from './components/pages/StoreDetail';
import TitleData from './data/TitleData';

import './css/App.css';

function App() {
  const [title,setTitle] = useState(TitleData);
  // const [init,setInit] = useState(false);
  // const [isLoggedIn,setIsLoggedIn] = useState(authService.currentUser);
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  useEffect( ()=>{
    authService.onAuthStateChanged((user) => {
      if (user) {
        console.log ("if",user)
        setIsLoggedIn(true);
      }
      else {
        console.log ("else", user )
        setIsLoggedIn(false);
      }
      // setInit(true);
      // console.log (user)
    });
  },[]);
  // setInterval( ()=> {
  //   console.log(authService.currentUser);
  // },1500);

  // let test = '날짜';
  return (
    <div className="App">
        <ResetStyles/>
            <Header isLoggedIn={isLoggedIn}/>
            <Routes>

              
              <Route path="/" element={ <Main/> } />

              <Route path="/user" element={ <User/> }>
                {/* <Route path="login" element={ <UserLogin/> } /> */}
                 <Route path="join" element={<UserJoin/>} /> 
                <Route path="joinSuccess" element={ <UserJoinSuccess/>} />
                <Route path="info" element={ <UserInfo/> } />
                {/* <Route path="upload" element={ <UserUpload/> } />
                <Route path="uploadSuccess" element={ <UserUploadSuccess/> } /> */}
              </Route>


              <Route path="/game" element={ <Game/> }>
                <Route path="home" element={ <GameHome/>} />
                <Route path='detail/:id' element={ <GameDetail title={ title } /> } /> 
                <Route path="upload" element={ <GameUpload/>} />
                <Route path="success" element={ <GameSuccess/>} />
              </Route>

              <Route path="/store" element={ <Store /> } >
                <Route path="home" element={ <StoreHome  /> } />
                <Route path='detail/:id' element={ <StoreDetail title={ title } /> } /> 
              </Route>

              <Route path="*" element={ <div>404</div> } />

            </Routes>
          <Footer/>
    </div>
  );
}

export default App;
