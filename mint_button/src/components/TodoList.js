
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";

// 날짜 선택
import { ko } from 'date-fns/esm/locale';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/TodoList.css';

import { useState } from 'react';

function TodoList () {
    let [startDate, setStartDate] = useState(new Date());
    let [leftDate, setLeftDate] = useState(new Date());
    let [rightDate, setRightDate] = useState(new Date());

    let [TodoContent, setTodoContent ] = useState(['호엥','호에엥','호에에엥']);

    return (
        <section className="content">

            {/* <div className='date_wrap'>

            <DatePicker
            // 년도 월 일 순서로 정렬
            timeIntervals={10}
            dateFormat="yyyy년 MM월 dd일" 
            selected={startDate}
            onChange={(data) => setStartDate(data) }
            className="days"
            // 언어 설정
            locale={ko}
            />



            </div> */}

            {/* <div className="todo_form_box">
            <input className="todo_create" type="text" />
            <button className="todo_btn" type="button"> 
            <FontAwesomeIcon icon={ faPlus } />
            </button>
            </div> */}

            <div className="todo_list">
            {/* 풀 디자인 썸네일 + 시간설정 */}
            {/* <ul className="todo_box">
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
            </ul> */}

            {/* +썸네일만 */}
            {/* <ul className="todo_box">
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
            </ul> */}

            {/* +시간만 */}
            {/* <ul className="todo_box">
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
            </ul> */}

            {/* +내용만 */}
            {/* <ul className="todo_box">
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
            </ul> */}

            {
                TodoContent.map( function(item,index) {
                    return (
                        <ul className="todo_box" key={item}>
                            <li className="todo_thunbnaill_wrap thunbnaill_off">
                                <strong className="todo_text text_full">
                                    { TodoContent[item] }
                                </strong>
                            </li>
                        </ul>
                    )
                    
                })
            }

            </div>
        </section>
    )


}



export default TodoList;