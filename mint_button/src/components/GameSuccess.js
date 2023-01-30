import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';

import base from '../css/Base.module.css';
import game from '../css/Game.module.css';

function GameSuccess  () {
    return (
        <>
            <div className={ base.top_wrap }>
                    <strong className={ base.bar_title }> 🎮 <span className={ `${ base.color_light } ${ base.bar_title_text }` }> 타이틀 </span> 등록 완료 </strong>  
            </div>

            <div className={ base.content_middle }> 

                <img className={ `${ game.g_thumbnail }` } src="https://miro.medium.com/proxy/1*p0OGaNEm_F9uWaGmN517TA.jpeg" />

                <div className={ game.confirm_wrap } >
                    <p className={ `${ game.g_id_text } ${ game.text_confirm }` }>
                        넘버 
                    </p>

                    <p className={ `${ game.g_name_text } ${ game.text_confirm }` }>
                        이름 
                    </p>

                    <p className={ `${ game.g_info_text } ${ game.text_confirm }` }>
                        설명 
                    </p>

                    <p className={ `${ game.g_date_text } ${ game.text_confirm }` }>
                        출시일 
                    </p>

                    <p className={ `${ game.g_tag_text } ${ game.text_confirm }` }>
                        태그 
                    </p>

                    
                </div>

                <Link to="../home">dd</Link>
            </div>
        </>
        

    )
}

export default GameSuccess;