import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faLink } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import { useState } from 'react';

import '../css/PostCreate.css';

function PostUpdate() {
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
        </section>
    )
}

export default PostUpdate;