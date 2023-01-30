import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import GameItem from './GameItem';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSortDown, faXmark, faAngleLeft, faAnglesLeft, faAngleRight, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import TitleData from '../data/TitleData';


import base from '../css/Base.module.css';
import game from '../css/Game.module.css';


function GameHome () {
    let [title,setTitle] = useState(TitleData);
    return (
        <>
        
            <div className={ base.top_wrap }>
                    <strong className={ base.bar_title }> 😜 <span className={ `${ base.color_light } ${ base.bar_title_text }` }> 타이틀 </span> 목록 </strong> 
                    <Link to="../upload" className={ `${base.btn_style_first} ${ base.btn_right } ${ base.btn_size_small }` }> 등록하기 </Link> 
            </div>

            <div className={ base.bar_wrap }>
                    <div className={ base.filter_icon }>
                            <FontAwesomeIcon icon={ faFilter } />
                    </div>

                    <ul className={ base.btn_wrap }>
                        <li className={ `${ base.btn_item } ${ base.filter_on }` }>
                            <button type="button" className={ `${ base.btn_style_second } ${ base.bar_button }` }>
                                <span>발매년도</span>
                                <FontAwesomeIcon icon={ faSortDown } className={ base.icon_layout_left_bottom } />
                            </button>
                        </li>

                        <li className={ `${ base.btn_item } ${ base.filter_off }` }>
                            <button type="button" className={ `${ base.btn_style_second } ${ base.bar_button }` }>
                                    <span>인원수</span>
                                    <FontAwesomeIcon icon={ faSortDown } className={ base.icon_layout_left_bottom } />
                            </button>
                        </li>

                        <li className={ `${ base.btn_item } ${ base.filter_off }` }>
                            <button type="button" className={ `${ base.btn_style_second } ${ base.bar_button }` }>
                                    <span>장르</span>
                                    <FontAwesomeIcon icon={ faSortDown } className={ base.icon_layout_left_bottom } />
                            </button>
                        </li>
                    </ul>
            </div>

            <div className={ base.bar_wrap }>
                <ul className={ base.btn_wrap }>
                    <li className={ `${ base.btn_item }` }>
                        <button type="button" className={ `${ base.btn_style_first } ${ base.bar_button }` }>
                            <span>로컬협동</span>
                            <FontAwesomeIcon icon={ faXmark } className={ base.icon_layout_left }/>
                        </button>
                    </li>

                    <li className={ `${ base.btn_item }` }>
                        <button type="button" className={ `${ base.btn_style_first } ${ base.bar_button }` }>
                            <span>샌드박스</span>
                            <FontAwesomeIcon icon={ faXmark } className={ base.icon_layout_left } />
                        </button>
                    </li>
                    <li className={ `${ base.btn_item }` }>
                        <button type="button" className={ `${ base.btn_style_first } ${ base.bar_button }` }>
                            <span>2022년</span>
                            <FontAwesomeIcon icon={ faXmark } className={ base.icon_layout_left } />
                        </button>
                    </li>
                    <li className={ `${ base.btn_item }` }>
                        <button type="button" className={ `${ base.btn_style_first } ${ base.bar_button }` }>
                            <span>연령</span>
                            <FontAwesomeIcon icon={ faXmark } className={ base.icon_layout_left } />
                        </button>
                    </li>
                    <li className={ `${ base.btn_item }` }>
                        <button type="button" className={ `${ base.btn_style_first } ${ base.bar_button }` }>
                            <span>연령</span>
                            <FontAwesomeIcon icon={ faXmark } className={ base.icon_layout_left } />
                        </button>
                    </li>
                    
                </ul>

                <button type="button" className={ `${base.btn_style_second} ${ base.btn_right } ${ base.bar_button }` }>
                    <span>모두 지우기</span>
                    <FontAwesomeIcon icon={ faXmark } className={ base.icon_layout_left } />
                </button>
            </div>

            <div className={ base.bar_wrap }>
                    <span className={base.sort_cnt}> 검색결과: 0 개</span>

                    <ul className={base.sort_menu}>
                        <li className={base.sort_cost}>
                             <button type="button"> 최신순 </button>
                        </li>

                        <li className={base.sort_divider}>|</li>

                        <li className={base.sort_amount}>
                            <button type="button"> 20개씩 보기</button>
                        </li>
                    </ul>
            </div>


            {/* <div className="game_result_wrap">총 10개</div> */}
            <div className={game.list}>
                {
                    title.map( (q,i) => { 
                        return (
                            <GameItem title={ title[i] } key={i} />
                        )
                    } )
                }


            </div>
            <ul className={base.pager_wrap}>
               <li><button type="button" className={ base.pager_normal }> <FontAwesomeIcon icon={ faAnglesLeft } /> </button></li>  
               <li><button type="button" className={ base.pager_normal }> <FontAwesomeIcon icon={ faAngleLeft } /> </button></li> 
               <li><button type="button" className={ `${base.pager_normal} ${base.pager_active}` }>1</button></li> 
               <li><button type="button" className={ base.pager_normal }>2</button></li> 
               <li><button type="button" className={ base.pager_normal }> <FontAwesomeIcon icon={ faAngleRight } /> </button></li> 
               <li><button type="button" className={ base.pager_normal }> <FontAwesomeIcon icon={ faAnglesRight } /> </button></li>  
            </ul>

        </>
    )
}

export default GameHome;