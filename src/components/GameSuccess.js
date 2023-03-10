import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';

import base from '../css/Base.module.css';
import game from '../css/Game.module.css';

function GameUploadSuccess  () {
    return (
        <>

            <div className={ base.top_wrap }>
                    <strong className={ base.bar_title }> ๐ฎ <span className={ `${ base.color_light }` }> ํ์ดํ </span> ๋ฑ๋ก ์๋ฃ </strong>  
            </div>

            <div className={ base.content_middle }> 

                <p className={ `${ base.title_text_wrap } ${ base.title_text }` }>
                    <span className={ base.color_light }> ํ์ดํ ๋ฑ๋ก </span>
                     ์ด ์๋ฃ ๋์์ต๋๋ค.
                </p>

                <img className={ `${ game.g_thumbnail }` } src="https://miro.medium.com/proxy/1*p0OGaNEm_F9uWaGmN517TA.jpeg" />

                <p className={ base.confirm_wrap } >

                    <strong className={base.text_confirm_title}> ๋ฑ๋ก ์ ๋ณด </strong>

                    <span className={ `${ game.g_id_text } ${ base.text_confirm }` }>
                        ๋ฑ๋ก๋ฒํธ
                    </span>

                    <span className={ `${ game.g_name_text } ${ base.text_confirm }` }>
                        ํ์ดํ๋ช 
                    </span>

                    <span className={ `${ game.g_info_text } ${ base.text_confirm }` }>
                        ์ค๋ช 
                    </span>

                    <span className={ `${ game.g_date_text } ${ base.text_confirm }` }>
                        ์ถ์์ผ 
                    </span>

                    <span className={ `${ game.g_tag_text } ${ base.text_confirm }` }>
                        ํ๊ทธ 
                    </span>

                    
                </p>

                <Link className={` ${ base.btn_style_first } ${ base.btn_size_long } `} to="../home"> ํ์ธ </Link>
            </div>
        </>
        

    )
}

export default GameUploadSuccess;