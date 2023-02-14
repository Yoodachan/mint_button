import React, {useState,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link,useNavigate } from "react-router-dom"
import { faHeart,faStar,faComment,faChevronDown,faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { storageService, storeService } from 'Mybase';

import base from '../css/Base.module.css';
import game from '../css/Game.module.css';

function GameItem (props) {
    const [itemMenu, setItemMenu] = useState(false);
    let navigate = useNavigate();
    const onClick = () => {
        setItemMenu(!itemMenu);
    }
    return (
            <div className={game.item_wrap}>
            {
            props.isLoggedIn 
            ?
            <button type="button" className={ game.item_option_btn } onClick={ onClick } >
                {
                itemMenu == true 
                ? <FontAwesomeIcon className={ game.option_ico } icon={ faChevronUp } />
                : <FontAwesomeIcon className={ game.option_ico } icon={ faChevronDown } /> 
                }
            </button>
            :
            null
            }
            <button type="button" onClick={ () => { navigate('/game/view/'+props.Games.g_num) }} className={ game.item } title={ props.Games.g_name }> 
                <img className={ game.item_img } src={ props.Games.g_img } />

                <div className={ game.item_text_wrap }>
                    <p className={ game.item_name }>
                        { props.Games.g_name } 
                    </p>
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
            {   
                itemMenu == true 
                 
                ? 
                <GameItemMunu 
                    itemMenu={itemMenu} 
                    isLoggedIn={props.isLoggedIn} 
                    userObj={ props.userObj }  
                    Games={ props.Games }   
                />  
                : null 
            }

            </div>
    )
}

function GameItemMunu (props) {
    let navigate = useNavigate();
    console.log (props.userObj.uid == props.Games.g_post)
    const DeleteGame = async () => {
        const ok = window.confirm("정말로 삭제 하시겠습니까?");
            if (ok) {
                await storeService.doc(`games/${props.Games.g_id}`).delete();
                await storageService.refFromURL(props.Games.g_img).delete();
            }
    }

    const UpdateGame = () => {
        if (props.userObj.uid == props.Games.g_post) {
            navigate('/game/update/'+props.Games.g_num)
        }
        else {
            console.log ("너가 쓴거 아닌듯")
        }
    }
    // const UpdateGame = () => {
    //     if ()
    // }
    return(
        <ul className={game.menu_list}>
            <li className={ game.menu_item } >
                <button type="button" className={ game.menu_btn }> 판매 </button>
            </li>
            <li className={ game.menu_item } >
                <button type="button" className={ game.menu_btn } onClick={UpdateGame}> 수정 </button>
            </li>
            <li className={ game.menu_item } >
                <button type="button" className={ game.menu_btn } onClick={DeleteGame}> 삭제 </button> 
            </li>
        </ul>
    )
}

export default GameItem;