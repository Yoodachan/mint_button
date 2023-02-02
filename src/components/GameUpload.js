import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown,faImage,faFilter,faXmark }
from "@fortawesome/free-solid-svg-icons";

import base from '../css/Base.module.css';
import game from '../css/Game.module.css';

// let DesktopContent = styled.div

function GameUpload () {
    return (
        <>
            <div className={ base.top_wrap }>
                    <strong className={ base.bar_title }> 🎮 <span className={ `${ base.color_light }` }> 타이틀 </span> 등록 </strong>  
            </div>

            <form className={ base.content_middle }>

                <label className={ `${game.g_img_wrap} ${base.style_set_first}` } htmlFor='g_img'>
                        <div className={ game.g_img_text }>
                            <FontAwesomeIcon icon={ faImage } />
                            <span>이미지 업로드</span>
                        </div>
                        <input className={ game.g_img_btn } name='g_img' type="file" />
                </label>

                <label className={ `${game.g_id_wrap} ${ base.input_wrap_normal }` } htmlFor='g_id'>
                    <input className={ ` ${game.g_id} ${ base.input_normal } ${ base.style_set_border } ` } name="g_id" type="text" placeholder="타이틀 넘버" />
                </label>

                <label className={ `${game.g_name_wrap} ${ base.input_wrap_normal }` } htmlFor='g_name'>
                    <input className={ ` ${game.g_name} ${ base.input_normal } ${ base.style_set_border } ` } name="g_name" type="text" placeholder="타이틀 제목" />
                </label>

                <label className={ `${game.g_info_wrap} ${ base.input_wrap_normal }` } htmlFor='g_info'>
                    <input className={ ` ${game.g_info} ${ base.input_normal } ${ base.style_set_border } ` } name="g_info" type="text" placeholder="타이틀 설명" />
                </label>

                <label className={ `${game.g_date_wrap} ${ base.input_wrap_normal }` } htmlFor='g_date'>
                    <input className={ ` ${game.g_date} ${ base.input_normal } ${ base.style_set_border } ` } name="g_date" type="date" placeholder="타이틀 출시일" />
                </label>

                <div className={ base.bar_small_wrap }>

                    <div className={ base.filter_small_icon }>
                            <FontAwesomeIcon icon={ faFilter } />
                    </div>

                    <ul className={ base.bar_small_wrap }>
                        <li className={ `${ base.bar_small_item }  ${ base.filter_on }` }>
                            <button type="button" className={ ` ${base.btn_style_second} ${base.bar_small_button} ` }>
                                <span>발매년도</span>
                                <FontAwesomeIcon icon={ faSortDown } className={ base.icon_layout_left_bottom } />
                            </button>
                        </li>

                        <li className={ `${ base.bar_small_item } ${ base.filter_off }` }>
                            <button type="button" className={ ` ${base.btn_style_second} ${base.bar_small_button} ` }>
                                    <span>인원수</span>
                                    <FontAwesomeIcon icon={ faSortDown } className={ base.icon_layout_left_bottom } />
                            </button>
                        </li>

                        <li className={ `${ base.bar_small_item } ${ base.filter_off }` }>
                            <button type="button" className={ ` ${base.btn_style_second} ${base.bar_small_button} ` }>
                                    <span>장르</span>
                                    <FontAwesomeIcon icon={ faSortDown } className={ base.icon_layout_left_bottom } />
                            </button>
                        </li>
                    </ul>

                </div>


                <div className={ base.bar_small_wrap }>
                    <ul className={ base.btn_small_wrap }>
                        <li className={ `${ base.btn_small_item }` }>
                            <button type="button" className={ `${base.btn_style_first} ${base.bar_small_button}` }>
                                <span>로컬협동</span>
                                <FontAwesomeIcon icon={ faXmark } className={ base.icon_layout_left }/>
                            </button>
                        </li>

                        <li className={ `${ base.btn_small_item }` }>
                            <button type="button" className={ `${base.btn_style_first} ${base.bar_small_button}` }>
                                <span>샌드박스</span>
                                <FontAwesomeIcon icon={ faXmark } className={ base.icon_layout_left } />
                            </button>
                        </li>

                        <li className={ `${ base.btn_small_item }` }>
                            <button type="button" className={ `${base.btn_style_first} ${base.bar_small_button}` }>
                                <span>2022년</span>
                                <FontAwesomeIcon icon={ faXmark } className={ base.icon_layout_left } />
                            </button>
                        </li>

                        <li className={ `${ base.btn_small_item }` }>
                            <button type="button" className={ `${base.btn_style_first} ${base.bar_small_button}` }>
                                <span>연령</span>
                                <FontAwesomeIcon icon={ faXmark } className={ base.icon_layout_left } />
                            </button>
                        </li>
                        
                    </ul>

                    <button type="button" className={ `${base.btn_style_second} ${ base.btn_right } ${base.bar_small_button}` }>
                        <span>모두 지우기</span>
                        <FontAwesomeIcon icon={ faXmark } className={ base.icon_layout_left } />
                    </button>
                </div>


                <Link to="../success" className={ `${base.btn_style_first} ${ base.btn_size_long }` }> 타이틀 등록 </Link>

            </form>
           
        </>
    )
}

export default GameUpload;