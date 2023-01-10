
import { Route,Routes,Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faLink,faEllipsisVertical,faPersonRunning,faArrowUpFromBracket,faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart,faCalendar } from "@fortawesome/free-regular-svg-icons";


// 게시판 에디터
import Editor from './EditorComponent';
// 날짜 선택
import { ko } from 'date-fns/esm/locale';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import '../css/Main.css';
import '../css/Post_create.css';

import { useState } from 'react';



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

  let [startDate, setStartDate] = useState(new Date());

  let [leftDate, setLeftDate] = useState(new Date());
  let [rightDate, setRightDate] = useState(new Date());

  // let react_week = week_arr[startDate.getDay()];

  // let react_weeks = getWeek(startDate);

  // console.log(days.value)
  
  let [ title_name, title_change ] = useState('제목');
  return (

    

    <Routes>

      <Route path="/" element={
        <main id="main">
          <section id="main_content">

            <div className='todo_wrap'>
              <div className='date_wrap'>

              <DatePicker
              // 년도 월 일 순서로 정렬
              showTimeSelect
              timeFormat="HH시mm분"
              timeIntervals={10}
              dateFormat="yyyy년 MM월 dd일 HH시mm분" 
              selected={startDate}
              onChange={(data) => setStartDate(data) }
              className="days"
              // 언어 설정
              locale={ko}
              />
              


              </div>

              <div className="todo_form_box">
                <input className="todo_create" type="text" />
                <button className="todo_btn" type="button"> 
                <FontAwesomeIcon icon={ faPlus } />
                </button>
              </div>

              <div className="todo_list">


                {/* 풀 디자인 썸네일 + 시간설정 */}
                <ul className="todo_box">
                  <li className="todo_thunbnaill_wrap thunbnaill_on">
                    <label htmlFor="thunbnaill" className="todo_thunbnaill">
                      <input type="file" />
                      <FontAwesomeIcon icon={ faPlus } />
                    </label>
                  </li>
                  <li className="todo_content_wrap">
                    <strong className="todo_text text_schedule">
                      내용
                    </strong>
                    <span className="todo_schedule">
                    <DatePicker
                      showTimeSelect
                      showTimeSelectOnly
                      timeFormat="HH시mm분"
                      timeIntervals={10}
                      selected={leftDate}
                      onChange={(date) => setLeftDate(date)}

                      startDate={leftDate}
                      endDate={rightDate}
                      dateFormat="HH시mm분" 
                    />
                    <DatePicker
                      showTimeSelect
                      showTimeSelectOnly
                      timeFormat="HH시mm분"
                      timeIntervals={10}
                      selected={rightDate}
                      onChange={(date) => setRightDate(date)}

                      startDate={leftDate}
                      endDate={rightDate}
                      dateFormat="HH시mm분" 
                    />

                    </span>
                  </li>

                  <li className="todo_btn_wrap">
                    <button className="more_btn" type="button">
                      <FontAwesomeIcon icon={ faEllipsisVertical } />
                    </button>
                  </li>
                </ul>

                {/* +썸네일만 */}
                <ul className="todo_box">
                  <li className="todo_thunbnaill_wrap thunbnaill_on">
                    <label htmlFor="thunbnaill" className="todo_thunbnaill">
                      <input type="file" />
                      <FontAwesomeIcon icon={ faPlus } />
                    </label>
                  </li>
                  <li className="todo_content_wrap">
                    <strong className="todo_text text_full">
                      내용
                    </strong>
                  </li>

                  <li className="todo_btn_wrap">
                    <button className="more_btn" type="button">
                      <FontAwesomeIcon icon={ faEllipsisVertical } />
                    </button>
                  </li>
                </ul>

                {/* +시간만 */}
                <ul className="todo_box">
                  <li className="todo_thunbnaill_wrap thunbnaill_off">
                    <label htmlFor="thunbnaill" className="todo_thunbnaill">
                      <input type="file" />
                      <FontAwesomeIcon icon={ faPlus } />
                    </label>
                  </li>
                  <li className="todo_content_wrap">
                    <strong className="todo_text text_schedule">
                      내용
                    </strong>
                    <span className="todo_schedule">
                    <DatePicker
                      showTimeSelect
                      showTimeSelectOnly
                      timeFormat="HH시mm분"
                      timeIntervals={10}
                      selected={leftDate}
                      onChange={(date) => setLeftDate(date)}

                      startDate={leftDate}
                      endDate={rightDate}
                      dateFormat="HH시mm분" 
                    />
                    <DatePicker
                      showTimeSelect
                      showTimeSelectOnly
                      timeFormat="HH시mm분"
                      timeIntervals={10}
                      selected={rightDate}
                      onChange={(date) => setRightDate(date)}

                      startDate={leftDate}
                      endDate={rightDate}
                      dateFormat="HH시mm분" 
                    />

                    </span>


                  </li>

                  <li className="todo_btn_wrap">
                    <button className="more_btn" type="button">
                      <FontAwesomeIcon icon={ faEllipsisVertical } />
                    </button>
                  </li>
                </ul>

                {/* +내용만 */}
                <ul className="todo_box">
                  <li className="todo_thunbnaill_wrap thunbnaill_off">
                    <label htmlFor="thunbnaill" className="todo_thunbnaill">
                      <input type="file" />
                      <FontAwesomeIcon icon={ faPlus } />
                    </label>
                  </li>
                  <li className="todo_content_wrap">
                    <strong className="todo_text text_full">
                      내용
                    </strong>
                  </li>

                  <li className="todo_btn_wrap">
                    <button className="more_btn" type="button">
                      <FontAwesomeIcon icon={ faEllipsisVertical } />
                    </button>
                  </li>
                </ul>

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
              <span>뒤로가기</span>
              <FontAwesomeIcon icon={ faPersonRunning } />
            </button>
            <button className="create_btn" type="button">
              <span>작성</span>
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
  
  )
  

}





export default Main;