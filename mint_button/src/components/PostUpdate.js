import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faLink } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import { useState } from 'react';
import styled from 'styled-components';

let  = styled.ul
`
width: 1200px;
margin: 100px auto;
color: red;

`;


function PostUpdate() {
    return (
        <>
            <ul className='image_wrap'>
                상품 이미지
                상품 아이디
                상품 이름
                상품 태그
                상품 출시일


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
        </>
    )
}

export default PostUpdate;