import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight,faAnglesRight,faStar,faHeart,faComment } from "@fortawesome/free-solid-svg-icons";
import 'react-datepicker/dist/react-datepicker.css';

import base from '../css/Base.module.css';
import main from '../css/Main.module.css';

function Main () {

    return (
        <section className={ base.content }>
            <div className={ main.banner }> 
                     <p className={ main.banner_text_wrap }>
                        <strong> 내가 좋아할만한 게임은? </strong>
                        <button type="button" > 테스트 후 결과 조회하기 
                            <FontAwesomeIcon icon={ faCircleArrowRight } /> 
                        </button>
                    </p>
                    <img src='../image/banner_img.png'/>
            </div>

            <div className={main.middle_content}>
                <div className={main.content_wrap}>
                    <p className={main.content_title_wrap}>
                        <i className={main.content_title_ico}>🎮</i>
                        <strong className={main.content_title_text}>인기 많은 게임 TOP 5</strong>
                        <button className={main.content_more_btn}type="button">
                            <FontAwesomeIcon icon={faAnglesRight} />
                        </button>
                    </p>
                    <ul className={main.conetnet_list}>

                    <button type="button" className={main.item_wrap}>
                            <img className={main.item_img} src='../image/game_001.jpg'/>
                            <p className={main.item_rank}> 1 </p>
                            <div className={main.item_text_wrap}>
                                <p className={main.item_title}> 스프래툰 3 </p>
                                <div className={main.item_ico_wrap}>
                                    <p className={`${main.item_ico} ${base.color_score}`}>
                                        <FontAwesomeIcon icon={ faStar } className={ base.icon_layout_right } />
                                        <span> 4.6/5.0 </span>
                                    </p>
                                    <p className={`${main.item_ico} ${base.color_like}`}>
                                        <FontAwesomeIcon icon={ faHeart } className={ base.icon_layout_right } />
                                        <span> 999+ </span>
                                    </p>
                                    <p className={`${main.item_ico} ${base.color_review}`}>
                                        <FontAwesomeIcon icon={ faComment } className={ base.icon_layout_right } />
                                        <span> 366 </span>
                                    </p>
                                </div>
                            </div>
                        </button>

                        <button type="button" className={main.item_wrap}>
                            <img className={main.item_img} src='../image/game_002.jpg'/>
                            <p className={main.item_rank}> 2 </p>
                            <div className={main.item_text_wrap}>
                                <p className={main.item_title}>젤다의 전설 ~ 야생의 숨결 ~</p>
                                <div className={main.item_ico_wrap}>
                                    <p className={`${main.item_ico} ${base.color_score}`}>
                                        <FontAwesomeIcon icon={ faStar } className={ base.icon_layout_right } />
                                        <span> 4.8/5.0 </span>
                                    </p>
                                    <p className={`${main.item_ico} ${base.color_like}`}>
                                        <FontAwesomeIcon icon={ faHeart } className={ base.icon_layout_right } />
                                        <span> 999+ </span>
                                    </p>
                                    <p className={`${main.item_ico} ${base.color_review}`}>
                                        <FontAwesomeIcon icon={ faComment } className={ base.icon_layout_right } />
                                        <span> 324 </span>
                                    </p>
                                </div>
                            </div>
                        </button>

                        <button type="button" className={main.item_wrap}>
                            <img className={main.item_img} src='../image/game_003.jpg'/>
                            <p className={main.item_rank}> 3 </p>
                            <div className={main.item_text_wrap}>
                                <p className={main.item_title}> 귀멸의 칼날 ~ 히노카미 혈풍담 ~ </p>
                                <div className={main.item_ico_wrap}>
                                    <p className={`${main.item_ico} ${base.color_score}`}>
                                        <FontAwesomeIcon icon={ faStar } className={ base.icon_layout_right } />
                                        <span> 4.1/5.0 </span>
                                    </p>
                                    <p className={`${main.item_ico} ${base.color_like}`}>
                                        <FontAwesomeIcon icon={ faHeart } className={ base.icon_layout_right } />
                                        <span> 744 </span>
                                    </p>
                                    <p className={`${main.item_ico} ${base.color_review}`}>
                                        <FontAwesomeIcon icon={ faComment } className={ base.icon_layout_right } />
                                        <span> 267 </span>
                                    </p>
                                </div>
                            </div>
                        </button>

                        <button type="button" className={main.item_wrap}>
                            <img className={main.item_img} src='../image/game_004.jpg'/>
                            <p className={main.item_rank}> 4 </p>
                            <div className={main.item_text_wrap}>
                                <p className={main.item_title}>슈퍼 스매시 브라더스 얼티밋</p>
                                <div className={main.item_ico_wrap}>
                                    <p className={`${main.item_ico} ${base.color_score}`}>
                                        <FontAwesomeIcon icon={ faStar } className={ base.icon_layout_right } />
                                        <span> 4.5/5.0 </span>
                                    </p>
                                    <p className={`${main.item_ico} ${base.color_like}`}>
                                        <FontAwesomeIcon icon={ faHeart } className={ base.icon_layout_right } />
                                        <span> 999+ </span>
                                    </p>
                                    <p className={`${main.item_ico} ${base.color_review}`}>
                                        <FontAwesomeIcon icon={ faComment } className={ base.icon_layout_right } />
                                        <span> 865 </span>
                                    </p>
                                </div>
                            </div>
                        </button>

                        <button type="button" className={main.item_wrap}>
                            <img className={main.item_img} src='../image/game_005.jpg'/>
                            <p className={main.item_rank}> 5 </p>
                            <div className={main.item_text_wrap}>
                                <p className={main.item_title}>미토피아</p>
                                <div className={main.item_ico_wrap}>
                                    <p className={`${main.item_ico} ${base.color_score}`}>
                                        <FontAwesomeIcon icon={ faStar } className={ base.icon_layout_right } />
                                        <span> 4.4/5.0 </span>
                                    </p>
                                    <p className={`${main.item_ico} ${base.color_like}`}>
                                        <FontAwesomeIcon icon={ faHeart } className={ base.icon_layout_right } />
                                        <span> 421 </span>
                                    </p>
                                    <p className={`${main.item_ico} ${base.color_review}`}>
                                        <FontAwesomeIcon icon={ faComment } className={ base.icon_layout_right } />
                                        <span> 146 </span>
                                    </p>
                                </div>
                            </div>
                        </button>

                    </ul>
                </div>
                <div className={main.content_wrap}>
                    <p className={main.content_title_wrap}>
                        <i className={main.content_title_ico}>🤑</i>
                        <strong className={main.content_title_text}>잘 팔리는 게임 TOP 5</strong>
                        <button className={main.content_more_btn}type="button">
                            <FontAwesomeIcon icon={faAnglesRight} />
                        </button>
                    </p>
                    <div className={main.conetnet_list}>

                        <button type="button" className={main.item_wrap}>
                            <img className={main.item_img} src='../image/store_001.jpg'/>
                            <p className={main.item_rank}> 1 </p>
                            <div className={main.item_text_wrap}>
                                <p className={main.item_title}> 모여봐요 동물의 숲 </p>
                                <div className={main.item_ico_wrap}>
                                    <p className={`${main.item_ico} ${base.color_score}`}>
                                        <FontAwesomeIcon icon={ faStar } className={ base.icon_layout_right } />
                                        <span> 4.7/5.0 </span>
                                    </p>
                                    <p className={`${main.item_ico} ${base.color_like}`}>
                                        <FontAwesomeIcon icon={ faHeart } className={ base.icon_layout_right } />
                                        <span> 999+ </span>
                                    </p>
                                    <p className={`${main.item_ico} ${base.color_review}`}>
                                        <FontAwesomeIcon icon={ faComment } className={ base.icon_layout_right } />
                                        <span> 412 </span>
                                    </p>
                                </div>
                            </div>
                        </button>

                        <button type="button" className={main.item_wrap}>
                            <img className={main.item_img} src='../image/store_002.jpg'/>
                            <p className={main.item_rank}> 2 </p>
                            <div className={main.item_text_wrap}>
                                <p className={main.item_title}>몬스터헌터 라이즈</p>
                                <div className={main.item_ico_wrap}>
                                    <p className={`${main.item_ico} ${base.color_score}`}>
                                        <FontAwesomeIcon icon={ faStar } className={ base.icon_layout_right } />
                                        <span> 4.6/5.0 </span>
                                    </p>
                                    <p className={`${main.item_ico} ${base.color_like}`}>
                                        <FontAwesomeIcon icon={ faHeart } className={ base.icon_layout_right } />
                                        <span> 999+ </span>
                                    </p>
                                    <p className={`${main.item_ico} ${base.color_review}`}>
                                        <FontAwesomeIcon icon={ faComment } className={ base.icon_layout_right } />
                                        <span> 675 </span>
                                    </p>
                                </div>
                            </div>
                        </button>

                        <button type="button" className={main.item_wrap}>
                            <img className={main.item_img} src='../image/store_003.jpg'/>
                            <p className={main.item_rank}> 3 </p>
                            <div className={main.item_text_wrap}>
                                <p className={main.item_title}> 포켓몬 레전드 아르세우스 </p>
                                <div className={main.item_ico_wrap}>
                                    <p className={`${main.item_ico} ${base.color_score}`}>
                                        <FontAwesomeIcon icon={ faStar } className={ base.icon_layout_right } />
                                        <span> 4.8/5.0 </span>
                                    </p>
                                    <p className={`${main.item_ico} ${base.color_like}`}>
                                        <FontAwesomeIcon icon={ faHeart } className={ base.icon_layout_right } />
                                        <span> 745 </span>
                                    </p>
                                    <p className={`${main.item_ico} ${base.color_review}`}>
                                        <FontAwesomeIcon icon={ faComment } className={ base.icon_layout_right } />
                                        <span> 678 </span>
                                    </p>
                                </div>
                            </div>
                        </button>

                        <button type="button" className={main.item_wrap}>
                            <img className={main.item_img} src='../image/store_004.jpg'/>
                            <p className={main.item_rank}> 4 </p>
                            <div className={main.item_text_wrap}>
                                <p className={main.item_title}>포켓몬스터 스칼렛・바이올렛</p>
                                <div className={main.item_ico_wrap}>
                                    <p className={`${main.item_ico} ${base.color_score}`}>
                                        <FontAwesomeIcon icon={ faStar } className={ base.icon_layout_right } />
                                        <span> 4.4/5.0 </span>
                                    </p>
                                    <p className={`${main.item_ico} ${base.color_like}`}>
                                        <FontAwesomeIcon icon={ faHeart } className={ base.icon_layout_right } />
                                        <span> 567 </span>
                                    </p>
                                    <p className={`${main.item_ico} ${base.color_review}`}>
                                        <FontAwesomeIcon icon={ faComment } className={ base.icon_layout_right } />
                                        <span> 244 </span>
                                    </p>
                                </div>
                            </div>
                        </button>

                        <button type="button" className={main.item_wrap}>
                            <img className={main.item_img} src='../image/store_005.jpg'/>
                            <p className={main.item_rank}> 5 </p>
                            <div className={main.item_text_wrap}>
                                <p className={main.item_title}>귀멸의 칼날 ~ 히노카미 혈풍담 ~</p>
                                <div className={main.item_ico_wrap}>
                                    <p className={`${main.item_ico} ${base.color_score}`}>
                                        <FontAwesomeIcon icon={ faStar } className={ base.icon_layout_right } />
                                        <span> 4.1/5.0 </span>
                                    </p>
                                    <p className={`${main.item_ico} ${base.color_like}`}>
                                        <FontAwesomeIcon icon={ faHeart } className={ base.icon_layout_right } />
                                        <span> 246 </span>
                                    </p>
                                    <p className={`${main.item_ico} ${base.color_review}`}>
                                        <FontAwesomeIcon icon={ faComment } className={ base.icon_layout_right } />
                                        <span> 144 </span>
                                    </p>
                                </div>
                            </div>
                        </button>

                    </div>

                </div>

            </div>


        </section>
    )


}



export default Main;