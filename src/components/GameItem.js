import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link,useNavigate } from "react-router-dom"
import { faHeart,faStar,faComment,faEllipsis } from "@fortawesome/free-solid-svg-icons";
// import moment from 'moment';

import { storeService } from 'Mybase';

import base from '../css/Base.module.css';
import game from '../css/Game.module.css';

function GameItem (props) {
    const [ItemMenu, setItemMenu] = useState(false);
    let navigate = useNavigate()
    return (
            <div className={game.item_wrap}>

            <button type="button" onClick={()=>{ navigate('/game/view/'+props.Games.g_num) }} className={ game.item } title={ props.Games.g_name }> 
            {/* <Link to={'/game/view/'+props.Games.g_num} className={ game.item } title={ props.Games.g_name }> */}
                <img className={ game.item_img } src={ props.Games.g_img } />
                <div className={ game.item_text_wrap }>
                    <strong className={ game.item_name }>
                        { props.Games.g_name } 
                    </strong>
                    <span className={ game.item_date }> { props.Games.g_release } </span>
                    <div className={ game.info_wrap }>
                        <p className={ base.color_score }>
                            <FontAwesomeIcon icon={ faStar } className={ base.icon_layout_right } />
                            <span> { props.Games.g_score } </span>
                        </p>

                        <p className={ base.color_like }>
                            <FontAwesomeIcon icon={ faHeart } className={ base.icon_layout_right } />
                            <span> { props.Games.g_like } </span>
                        </p>

                        <p className={ base.color_review }>
                            <FontAwesomeIcon icon={ faComment } className={ base.icon_layout_right }  />
                            <span> { props.Games.g_review } </span>
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
            </button>
            { ItemMenu == true ? <GameItemMunu isLoggedIn={props.isLoggedIn}/>  : null }
            </div>
    )
}

function GameItemMunu (props) {
    return(
        <ul className={game.menu_list}>
            <li className={ game.menu_item } >
            { props.isLoggedIn == true 
            && <Link to="user/info"> 수정 </Link> 
            }
            </li>
    
            <li className={ game.menu_item } >
            { props.isLoggedIn == true 
            && <div> 삭제 </div> 
            }
            </li>
        </ul>
    )
}


export default GameItem;