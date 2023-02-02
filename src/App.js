import { Router,Route,Routes,Link,useNavigate,Outlet } from "react-router-dom"
import ResetStyles from './components/style/Reset';
import { useState } from 'react';


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
  let [title,setTitle] = useState(TitleData);
  // let test = '날짜';
  return (
    <div className="App">
        <ResetStyles/>
          <Header/>
            <Routes>
              
              <Route path="/" element={ <Main/> } />

              <Route path="/user" element={ <User/> }>
                <Route path="login" element={ <UserLogin/> } />
                <Route path="join" element={ <UserJoin/> } />
                <Route path="joinSuccess" element={ <UserJoinSuccess/>} />
                <Route path="info" element={ <UserInfo/> } />
                <Route path="upload" element={ <UserUpload/> } />
                <Route path="uploadSuccess" element={ <UserUploadSuccess/> } />
              </Route>


              <Route path="/game" element={ <Game/> }>
                <Route path="home" element={ <GameHome/>} />
                <Route path='detail/:id' element={ <GameDetail title={ title } /> } /> 
                <Route path="upload" element={ <GameUpload/>} />
                <Route path="success" element={ <GameSuccess/>} />
              </Route>

              <Route path="/store" element={ <Store title={ title }/> } >
                <Route path="home" element={ <StoreHome title={ title } /> } />
                <Route path='detail/:id' element={ <StoreDetail title={ title } /> } /> 
              </Route>

              <Route path="*" element={ <div>404</div> } />

            </Routes>
          <Footer/>
    </div>
  );
}

export default App;
