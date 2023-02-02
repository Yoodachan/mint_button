import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faCamera } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from 'react';

import base from '../css/Base.module.css';
import user from '../css/User.module.css';

function GameSuccess  () {
    return (
        <>

            <div className={ base.top_wrap }>
                    <strong className={ base.bar_title }> 🎮 <span className={ `${ base.color_light }` }> 회원가입 </span> 완료 </strong>  
            </div>

            <div className={ base.content_small }> 

                <p className={ `${ base.title_text_wrap } ${ base.title_text }` }>
                    <span className={ base.color_light }> 회원가입 </span>
                     이 완료 되었습니다.
                </p>

                <Link className={base.profille_wrap}>
                    <FontAwesomeIcon className={base.user_ico} icon={faUser} />
                    <div className={ base.photo_wrap}>
                        <FontAwesomeIcon className={base.photo_ico}icon={ faCamera } />
                    </div>
                </Link>

                <p className={ base.confirm_wrap } >

                    <strong className={base.text_confirm_title}> 회원 정보 </strong>

                    <span className={ `${ user.u_id_text } ${ base.text_confirm }` }>
                        아이디
                    </span>

                    <span className={ `${ user.u_name_text } ${ base.text_confirm }` }>
                        이름 
                    </span>
                    
                </p>

                <Link className={` ${ base.btn_style_first } ${ base.btn_size_small } `} to="/"> 확인 </Link>
            </div>
        </>
        

    )
}

export default GameSuccess;