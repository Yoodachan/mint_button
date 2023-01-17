
import { Route,Routes,Link } from "react-router-dom"


import Home from './Home';

//main

// user
import UserLogin from './UserLogin';
import UserJoin from './UserJoin';

// community
import CommunityHome from './CommunityHome';
import CommunityList from './CommunityList';


// title
import TitleList from './TitleList';
import TitleInfo from './TitleInfo';

import TodoList from './TodoList';
import PostList from './PostList';
import PostCreate from './PostCreate';
import PostUpdate from './PostUpdate';

// store
import Store from './Store';

import '../css/Main.css';



// 공용 변수

// 요일 년도 시간 분 초 구하기
let load_date = new Date();
const now_year = load_date.getFullYear();
const now_month = load_date.getMonth()+1;
const now_day = load_date.getDate();
//1. 오늘의 요일 구하기 함수


// 요일 배열
let week_kor = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"]
// 요일 배열 순서 설정
let week_arr = [0,1,2,3,4,5,6];
// 요일 배열 순서 매칭
week_arr = week_kor;


// 오늘의 요일
const now_week = week_arr[load_date.getDay()];



//2. n주차 계산

const getWeek = (date) => {
  const currentDate = date.getDate()
  const firstDay = new Date(date.setDate(1)).getDay();
  return Math.ceil((currentDate + firstDay) / 7);
}
const now_weeks = getWeek(new Date());

const now_date = now_year + "년 " + now_month + "월 " + now_day  + "일 " + now_week + " " + now_weeks + "주차 " ;


function Main () {

  // let react_week = week_arr[startDate.getDay()];

  // let react_weeks = getWeek(startDate);

  // console.log(days.value)
  return (
    
    <main id="main">
      <Routes>
        {/* 메인 */}
        <Route path="/" element={ <Home/> } />
        {/* 유저 */}
        <Route path="/user_login" element={ <UserLogin/> } />
        <Route path="/user_join" element={ <UserJoin/> } />
        {/* 스토어 */}
        <Route path="/store" element={ <Store/> } />
        {/* 타이틀 */}
        {/* 커뮤니티 */}
        <Route path="/community_home" element={ <CommunityHome/> } />
        <Route path="/community_list" element={ <CommunityList/> } />
        <Route path="/todo_list" element={ <TodoList/> } />
        <Route path="/post_list" element={ <PostList/> } />
        <Route path="/post_create" element={ <PostCreate/> } />
        <Route path="/post_update" element={ <PostUpdate/> } />
      </Routes>
    </main>
  
  )
}

export default Main;