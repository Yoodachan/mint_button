import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faEllipsisVertical,faPersonRunning,faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

// 게시판 에디터
import Editor from './EditorComponent';
import { useState } from 'react';

import '../css/PostList.css';



function PostList () {
    let [ title_name, title_change ] = useState('제목');
    return (
        <section id="main_content">
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

        </section>
    )
}


export default PostList;