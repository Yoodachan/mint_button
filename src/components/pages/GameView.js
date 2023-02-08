import { useEffect, useState } from 'react';
import { Link,useParams} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare,faStar,faHeart,faComment,faSortDown,faPlus,faEllipsisVertical,faXmark,faEllipsis } from "@fortawesome/free-solid-svg-icons";
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
import "../../css/Detail.css"
import base from '../../css/Base.module.css';
import game from '../../css/Game.module.css';

function GameView (props) {
    // const idx = 0;
    // const idx = test.id;
    // console.log (props.title[id].t_name);
    // console.log (props.Games[id].g_name)
    useEffect(()=>{
        
    })
    var {idx} = useParams();

    var find = props.Games.find((x)=>{
        
    })

    console.log (props.Games[idx].g_youtube)
    
    return (
        <>
            <div className={ game.view_top }>
                <div className={ game.view_intro_wrap }>
                    <iframe  className={ game.view_video }
                             src={`https://www.youtube.com/embed/`+`${props.Games[idx].g_youtube}`+`?autoplay=1&mute=1`} 
                             title={ props.Games[idx].g_name } 
                             allow="accelerometer;
                                    clipboard-write; encrypted-media; 
                                    gyroscope; picture-in-picture; web-share" 
                    >       
                    </iframe>
                </div>
                <div className={game.view_info_wrap}>
                    <strong className={game.view_title_text}>
                        {props.Games[idx].g_name}
                    </strong>

                    <p className={game.view_date_text}>
                        <span className={game.view_bold_text}>발매일</span>
                        {props.Games[idx].g_release}
                    </p>

                    <div className={game.view_icon_wrap}>
                        <span className={`${base.color_score}`}>
                                <FontAwesomeIcon icon={ faStar } />
                                <span className={game.view_score}>
                                    4.5
                                </span>
                                /5.0
                        </span>

                        <span className={`${base.icon_layout_left_long} ${base.color_review}`}>
                            <FontAwesomeIcon icon={ faComment } />
                            <span className={game.detail_review}>
                                15  
                            </span>
                        </span>
                    </div>

                    <div className={ game.view_tag_wrap }>
                        <span className={`${ game.item_tag } ${ base.color_sandbox }`}>
                            #샌드박스
                        </span>
                        <span className={`${ game.item_tag } ${ base.color_rpg  }`}>
                            #RPG
                        </span>
                        <span className={`${ game.item_tag } ${ base.color_advencher }`}>
                            #어드벤처
                        </span>
                        <span className={`${ game.item_tag } ${ base.color_advencher }`}>
                            #어드벤처
                        </span>
                        <span className={`${ game.item_tag } ${ base.color_advencher }`}>
                            #어드벤처
                        </span>
                    </div>
                    <div className={ game.view_btn_wrap }>
                        <button className="detail_like_btn" type="button">
                            <FontAwesomeIcon icon={ faHeart } />
                            <span className="detail_like_conut"> 1천+ </span>
                        </button>

                        <Link to={'/store/detail/'+props.Games[idx].g_num} className={`${base.btn_size_long} ${base.btn_style_first} `}>
                            구매하러 가기
                        </Link>

                    </div>
                </div>
            </div>

            <ul className={base.cate_wrap}>
                <li><button type="button">상세정보</button></li>
                <li><button type="button">리뷰(10)</button></li>
            </ul>
        </>
    )
}

export default GameView;