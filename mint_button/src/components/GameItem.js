import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"
import { faHeart,faStar,faComment } from "@fortawesome/free-solid-svg-icons";
import moment from 'moment';
// import {db} from '../index';

function StoreItem (props) {
    return (
            <Link to={'/game/detail/'+props.title.t_id} className="game_item_box">
                <img className="game_item_img" src="https://store.nintendo.co.kr/media/wysiwyg/kirby.png" />
                <div className="game_item_text_wrap">
                    <strong className="game_title_name"> { props.title.t_name } </strong>
                    <span className="game_title_date"> { props.title.t_date_release } </span>
                    <div className="game_title_info_wrap">
                        <p className="game_info_wrap game_score">
                            <FontAwesomeIcon icon={ faStar } />
                            <span> { props.title.t_score } </span>
                        </p>

                        <p className="game_info_wrap game_like">
                            <FontAwesomeIcon icon={ faHeart } />
                            <span> { props.title.t_like } </span>
                        </p>
                        <p className="game_info_wrap game_review">
                            <FontAwesomeIcon icon={ faComment }  />
                            <span> { props.title.t_review } </span>
                        </p>
                    </div>
                    <div className="game_tag_wrap">
                        <span className="game_tag sandbox">
                            #샌드박스
                        </span>
                        <span className="game_tag RPG">
                            #로컬멀티
                        </span>
                        <span className="game_tag advencher">
                            #어드벤처
                        </span>
                    </div>
                </div>
            </Link>


    )
}


export default StoreItem;