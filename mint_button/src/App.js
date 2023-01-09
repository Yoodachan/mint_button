/* eslint-disable */

import React, { Component } from 'react';
import { Route,Routes,Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faPlus,faUser,faLink,faEllipsisVertical,faPersonRunning,faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faHeart,faImage } from "@fortawesome/free-regular-svg-icons";

import Editor from './components/EditorComponent';

import { useState } from 'react';

import './css/Reset.css';
import './css/App.css';
import './css/Post_create.css';
// 공용 변수

// 요일 년도 시간 분 초 구하기
const load_date = new Date();
const now_year = load_date.getFullYear();
const now_month = load_date.getMonth()+1;
const now_day = load_date.getDate();
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
  let [ title_name, title_change ] = useState('제목');
  return (
    <div className="App">
       <header>
        <nav>
          <div className='content'>
            <h1 id="logo"> <Link to="/">todoP</Link> </h1>
            <ul id="nav_list">
              <li className='menu_user'><button type="button"><FontAwesomeIcon icon={faUser}/></button></li>
              <li className='menu_list'><button type="button"><FontAwesomeIcon icon={faBars}/></button></li>
            </ul>
          </div>
        </nav>
        <Link to="/post_create"></Link>
      </header>

      <Routes>
        <Route path="/" element={
          <main id="main">
          <section id="top">
            <div className='content'>
              <div className='date_wrap'>
                <span className='now_date'> { now_date } </span>
              </div>

            </div>
            

          </section>
          </main>
        } />

        <Route path="/post_create" element={

          <main>
          <div className="content">
            <div className='post_header'>
              <ul className='post_title_box'>
                
                <li className='post_thumbnaill_wrap'>
                  <button type="button">
                    <FontAwesomeIcon icon={ faPlus } />
                  </button>
                </li>

                <li className='post_box'>
                    <div className='post_title_wrap'>
                        <span className='title_link'> @내집 </span>
                        <strong className='title_text'> { title_name } </strong>
                    </div>
                    <div className='post_ico_wrap'>

                      <button type="button" className="post_like_btn">
                        <FontAwesomeIcon icon={ faEllipsisVertical } />
                      </button>

                    </div>
                </li>

              </ul>
            </div>

            <div className='post_body'>
              <div className='post_content_box'>

                {/* <label className='upload_wrap' htmlFor='u_img'>
                  <div className='upload_text'>
                    <FontAwesomeIcon icon={ faImage } />
                    <span>이미지 업로드 하기</span>
                  </div>
                  <input className="upload_btn" name='u_img' type="file" />
                </label> */}

                <Editor/>




              </div>


            </div>

            <div className='post_btn_wrap'>
              <button className="back_btn" type="button">
                뒤로가기
                <FontAwesomeIcon icon={ faPersonRunning } />
              </button>
              <button className="create_btn" type="button">
                작성
                <FontAwesomeIcon icon={ faArrowUpFromBracket } />
                </button>
            </div>

          </div>
          </main>


        } />

        <Route path="/post_read" element={

        <main>
          <div className="content">
            <div className='post_header'>
              <ul className='post_title_box'>
                
                <li className='post_thumbnaill_wrap'>
                  <button type="button">
                    <FontAwesomeIcon icon={ faPlus } />
                  </button>
                </li>

                <li className='post_box'>
                    <div className='post_title_wrap'>
                        <span className='title_link'> @내집 </span>
                        <strong className='title_text'> { title_name } </strong>
                    </div>
                    <div className='post_ico_wrap'>

                      <button type="button" className="post_like_btn">
                        <FontAwesomeIcon icon={ faHeart } />
                      </button>

                      <button type="button" className="post_link_btn">
                        <FontAwesomeIcon icon={ faLink } />
                      </button>

                    </div>
                </li>

              </ul>
            </div>

            <div className='post_body'>
              <div className='post_content_box'>

                {/* <label className='upload_wrap' htmlFor='u_img'>
                  <div className='upload_text'>
                    <FontAwesomeIcon icon={ faImage } />
                    <span>이미지 업로드 하기</span>
                  </div>
                  <input className="upload_btn" name='u_img' type="file" />
                </label> */}

                <div className='post_container'>
                                  

                </div>




              </div>


            </div>

              <div className='post_btn_wrap'>
                <button type='button'>
                  목록 보기
                </button>
              </div>

          </div>
        </main>


        } />



      </Routes>


      <footer></footer>



    </div>
  );
}

export default App;
