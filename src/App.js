import react, { useState,useEffect } from 'react';

import { Router,Route,Routes,Link,useNavigate,Outlet } from "react-router-dom"
import ResetStyles from './components/style/Reset';
import { authService,storeService,firestore } from 'Mybase';

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
import GameView from './components/pages/GameView';
import GameUpload from './components/GameUpload';
import GameUpdate from './components/GameUpdate';
import GameSuccess from './components/GameUploadSuccess';

//상점 CRUD
import Store from './components/Store';
import StoreHome from './components/StoreHome';
import StoreDetail from './components/pages/StoreDetail';
import TitleData from './data/TitleData';

import './css/App.css';

function App() {
  const [title,setTitle] = useState(TitleData);
  const [init,setInit] = useState(false);
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [userObj,setUserObj] = useState(null);



  // 게임 타이틀 보관
  const [Games,setGames] = useState([]);
  useEffect( ()=>{
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
        console.log ("로그인"+user)
      }
      else {
        setIsLoggedIn(false);
        console.log ("로그아웃"+user);
      }
      //로딩창
      setInit(true);
    });
         storeService.collection("games").onSnapshot( (snapshot) => {
         const useArray = snapshot.docs.map( (doc) => ({ id : doc.id, ...doc.data(), }));
         setGames(useArray);


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
                <Route path="login" element={ <UserLogin/> } />
                <Route path="join" element={<UserJoin/>} /> 
                <Route path="joinSuccess" element={ <UserJoinSuccess/>} />
                { userObj && <Route path="info" element={ <UserInfo userObj={userObj} /> } /> }
                {/* <Route path="upload" element={ <UserUpload/> } />
                <Route path="uploadSuccess" element={ <UserUploadSuccess/> } /> */}
              </Route>


              <Route path="/game" element={ <Game/> }>
                <Route path="home" element={ <GameHome isLoggedIn={isLoggedIn} Games={ Games } userObj={userObj} /> } />
                { Games && <Route path="view/:idx" element={ <GameView Games={ Games } /> } />} 
                {isLoggedIn ? <Route path="upload" element={<GameUpload userObj={userObj} isLoggedIn={isLoggedIn} />} /> : <Route path="upload" element={ <div>404</div> } /> }
                {isLoggedIn ? <Route path="update" element={<GameUpdate userObj={userObj} isLoggedIn={isLoggedIn} />} /> : <Route path="update" element={ <div>404</div> } /> }
                <Route path="success" element={ <GameSuccess isLoggedIn={isLoggedIn} />} />
              </Route>

              <Route path="/store" element={ <Store /> } >
                <Route path="home" element={ <StoreHome  /> } />
                <Route path={`detail/:idx`} element={ <StoreDetail Games={ Games } title={ title } /> } /> 
              </Route>

              <Route path="*" element={ <div>404</div> } />

            </Routes>
          <Footer/>
    </div>
  );
}

export default App;
