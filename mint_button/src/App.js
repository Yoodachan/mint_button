import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// import Header from './Header';
import { useState } from 'react';
import './css/Reset.css';
import './css/App.css';

// 공용 변수

// 요일 년도 시간 분 초 구하기
const load_date = new Date();
const now_year = load_date.getFullYear();
const now_month = load_date.getMonth()+1;
const now_day = load_date.getDay()+1;
//1. 오늘의 요일 구하기 함수

// 요일 배열
let week_kor = ["일요일","월요일","화요알","수요일","목요일","금요일","토요일"]
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


function App() {
  // let test = '날짜';
  let [ title_name, title_change ] = '제목';
  return (
    <div className="App">
      <header>
        <nav>
          <div className='content'>
            <h1 id="logo"><a href="./index.html">todoP</a></h1>
            <ul id="nav_list">
              <li className='menu_user'><button type="button"><FontAwesomeIcon icon={faUser}/></button></li>
              <li className='menu_list'><button type="button"><FontAwesomeIcon icon={faBars}/></button></li>
            </ul>
          </div>
        </nav>
      </header>
      <main id="main">
        <section id="top">
          <div className='content'>
            <div className='date_wrap'>
              <input class="cal" type="date"></input>
              <span className='now_date'> { now_date } </span>
              <h2> { title_name }</h2>
            </div>

          </div>
          

        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
