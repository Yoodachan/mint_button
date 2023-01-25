import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faEllipsisVertical,faPersonRunning,
         faArrowUpFromBracket,faShareFromSquare,
         faStar,faHeart,faComment,faSortDown,faImage
       }
from "@fortawesome/free-solid-svg-icons";
import Editor from './EditorComponent';

import '../css/GameUpload.css';

// let DesktopContent = styled.div

let TextInput = styled.input
`

`;

let ImageUpload = styled.label
`
width: 1200px;
margin: 100px auto;
color: red;
`;



function TitleUpload () {
    return (
        <> 
           {/* 게임 이미지
           게임 아이디
           게임 이름
           게임 태그
           게임 정보
           게임 출시일 */}

           


           <label className='upload_wrap' htmlFor='u_img'>
                    <div className='upload_text'>
                    <FontAwesomeIcon icon={ faImage } />
                    <span>이미지 업로드 하기</span>
                    </div>
                    <input className="upload_btn" name='u_img' type="file" />
           </label>
           

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
                            <strong className='title_text'> dd </strong>
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
        </>
        

    )
}

export default TitleUpload;