import React, { useState,useEffect } from 'react';

import { Route,Routes,Link,useNavigate } from "react-router-dom";
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
import GameUpload from './components/GameUpload';
import GameSuccess from './components/GameSuccess';
import GameView from './components/pages/GameView';
import GameUpdate from './components/pages/GameUpdate';

//상점 CRUD
import Store from './components/Store';
import StoreUpload from './components/StoreUpload';
import StoreHome from './components/StoreHome';
import StoreView from './components/pages/StoreView';

import StoresData from './data/Stores';
import StoresDataNew from './data/StoresNew';

import './css/App.css';

function App() {
  const [init,setInit] = useState(false);
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [userObj,setUserObj] = useState(null);


  
  // 게임 타이틀 보관
  const [Games,setGames] = useState([]);
  // const [Stores,setStores] = useState([]);
  const [Stores,setStores] = useState(StoresData);
  const [StoresNew,setStoresNew] = useState(StoresDataNew);
  useEffect( ()=>{
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
        console.log (user.email)
        console.log (user.uid)
      }
      else {
        setIsLoggedIn(false);
      }
      //로딩창
      setInit(true);
    });
    
         storeService.collection("games").orderBy("g_num","asc").onSnapshot( (snapshot) => {
         const useArray = snapshot.docs.map( (doc) => ({ id : doc.id, ...doc.data(), }));
         setGames(useArray);
    });
    //      storeService.collection("stores").orderBy("s_num","desc").onSnapshot( (snapshot) => {
    //      const storeArray = snapshot.docs.map( (doc) => ({ id : doc.id, ...doc.data(), }));
    //      setStores(storeArray);
    // });
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
                <Route path="join" element={<UserJoin userObj={userObj} /> } />
                <Route path="joinSuccess" element={ <UserJoinSuccess/>} />
                { userObj && <Route path="info" element={ <UserInfo userObj={userObj} /> } /> }
                <Route path="upload" element={ <UserUpload/> } />
                <Route path="uploadSuccess" element={ <UserUploadSuccess/> } />
              </Route>


              <Route path="/game" element={ <Game Games={ Games } /> }>
                 
                <Route path="home" element={ <GameHome isLoggedIn={isLoggedIn} Games={ Games } userObj={userObj} /> } />
                <Route path="success" element={ <GameSuccess isLoggedIn={isLoggedIn} />} />
                {isLoggedIn ? <Route path="upload" element={<GameUpload userObj={userObj} isLoggedIn={isLoggedIn} Games={ Games }/>} /> : <Route path="upload" element={ <div>404</div> } /> }
                {Games == ![] ? <Route path="view/:idx" element={ <div>로딩중</div> } /> : <Route path="view/:idx" element={ <GameView Games={ Games } /> } /> }
                {Games == ![] ? <Route path="update/:idx" element={ <div>로딩중</div> } /> : <Route path="update/:idx" element={<GameUpdate userObj={userObj} isLoggedIn={isLoggedIn} Games={ Games } />} /> }
                
              </Route>
              
              <Route path="/store" element={ <Store /> } >
                <Route path="home" element={ <StoreHome Stores={Stores} StoresNew={StoresNew} /> } />
                {isLoggedIn ? <Route path="upload" element={<StoreUpload userObj={userObj}  Store={ Store }/>} /> : <Route path="upload" element={ <div>404</div> } /> }
                <Route path={`view/:idx`} element={ <StoreView Stores={Stores} StoresNew={StoresNew}  /> } /> 
              </Route>

              <Route path="*" element={ <div>404</div> } />

            </Routes>
          <Footer/>
    </div>
  );
}

export default App;
