import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';

import base from '../css/Base.module.css';
import game from '../css/Game.module.css';

function GameUploadSuccess  () {
    return (
        <>

            <div className={ base.top_wrap }>
                    <strong className={ base.bar_title }> 🎮 <span className={ `${ base.color_light }` }> 타이틀 </span> 등록 완료 </strong>  
            </div>

            <div className={ base.content_middle }> 

                <p className={ `${ base.title_text_wrap } ${ base.title_text }` }>
                    <span className={ base.color_light }> 타이틀 등록 </span>
                     이 완료 되었습니다.
                </p>

                <img className={ `${ game.g_thumbnail }` } src="https://miro.medium.com/proxy/1*p0OGaNEm_F9uWaGmN517TA.jpeg" />

                <p className={ base.confirm_wrap } >

                    <strong className={base.text_confirm_title}> 등록 정보 </strong>

                    <span className={ `${ game.g_id_text } ${ base.text_confirm }` }>
                        등록번호
                    </span>

                    <span className={ `${ game.g_name_text } ${ base.text_confirm }` }>
                        타이틀명 
                    </span>

                    <span className={ `${ game.g_info_text } ${ base.text_confirm }` }>
                        설명 
                    </span>

                    <span className={ `${ game.g_date_text } ${ base.text_confirm }` }>
                        출시일 
                    </span>

                    <span className={ `${ game.g_tag_text } ${ base.text_confirm }` }>
                        태그 
                    </span>

                    
                </p>

                <Link className={` ${ base.btn_style_first } ${ base.btn_size_long } `} to="../home"> 확인 </Link>
            </div>
        </>
        

    )
}

export default GameUploadSuccess;