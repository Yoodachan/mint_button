import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"
import { faHeart,faStar,faComment } from "@fortawesome/free-solid-svg-icons";
import moment from 'moment';
// import {db} from '../index';

import base from '../css/Base.module.css';
import game from '../css/Game.module.css';

function GameItem (props) {
    return (
            <Link to={'/game/detail/'+props.title.t_id} className={ game.item } title={ props.title.t_name }>
                <img className={ game.item_img } src="https://store.nintendo.co.kr/media/wysiwyg/kirby.png" />
                <div className={ game.item_text_wrap }>
                    <strong className={ game.item_name }> { props.title.t_name } </strong>
                    <span className={ game.item_date }> { props.title.t_date_release } </span>
                    <div className={ game.info_wrap }>
                        <p className={ base.color_score }>
                            <FontAwesomeIcon icon={ faStar } className={ base.icon_layout_right } />
                            <span> { props.title.t_score } </span>
                        </p>

                        <p className={ base.color_like }>
                            <FontAwesomeIcon icon={ faHeart } className={ base.icon_layout_right } />
                            <span> { props.title.t_like } </span>
                        </p>

                        <p className={ base.color_review }>
                            <FontAwesomeIcon icon={ faComment } className={ base.icon_layout_right }  />
                            <span> { props.title.t_review } </span>
                        </p>

                    </div>
                    <div className={ game.item_tag_wrap }>
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
                </div>
            </Link>


    )
}


export default GameItem;