import '../css/Game.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter,faSortDown,faXmark,faHeart,faStar,faComment } from "@fortawesome/free-solid-svg-icons";

function Game () {
    return (
        <>
        
            <ul className="game_title_wrap">
                <li className="game_title_text"> 
                    <strong> 😜 <span className="game_title_color"> 타이틀 </span> 목록 </strong> 
                </li>
                <li className="game_title_upload"> 
                    <button type="button"> 등록하기 </button> 
                </li>
            </ul>
            <ul className="game_tag_select">
                    <li className="filter_icon">
                            <FontAwesomeIcon icon={ faFilter } />
                    </li>

                    <li className="game_tag_filter filter_on">
                        <button type="button">
                            <span>발매년도</span>
                            <FontAwesomeIcon icon={ faSortDown } />
                        </button>
                    </li>

                    <li className="game_tag_filter filter_off">
                        <button type="button">
                                <span>인원수</span>
                                <FontAwesomeIcon icon={ faSortDown } />
                        </button>
                    </li>

                    <li className="game_tag_filter filter_off">
                        <button type="button">
                                <span>장르</span>
                                <FontAwesomeIcon icon={ faSortDown } />
                        </button>
                    </li>
            </ul>
            <div className="game_filter_wrap">
                <ul className="game_filter_select">
                    <li>
                        <button>
                            <span>로컬협동</span>
                            <FontAwesomeIcon icon={ faXmark } />
                        </button>
                    </li>

                    <li>
                        <button>
                            <span>샌드박스</span>
                            <FontAwesomeIcon icon={ faXmark } />
                        </button>
                    </li>
                    <li>
                        <button>
                            <span>2022년</span>
                            <FontAwesomeIcon icon={ faXmark } />
                        </button>
                    </li>
                    <li>
                        <button>
                            <span>연령</span>
                            <FontAwesomeIcon icon={ faXmark } />
                        </button>
                    </li>
                </ul>

                <button className="game_filter_delete">
                    <span>모두 지우기</span>
                    <FontAwesomeIcon icon={ faXmark } />
                </button>
            </div>
            {/* <div className="game_result_wrap">총 10개</div> */}
            <div className="game_list_wrap">
                <div className="game_item_box">
                    <img className="game_item_img" src="https://store.nintendo.co.kr/media/wysiwyg/kirby.png" />
                    <div className="game_item_text_wrap">
                        <strong className="game_title_name"> 별의 커비 디스커버리 </strong>
                        <span className="game_title_date"> 2022.12.10 </span>
                        <div className="game_title_info_wrap">
                            <p className="game_info_wrap game_score">
                                <FontAwesomeIcon icon={ faStar } />
                                <span> 4.1 </span>
                            </p>

                            <p className="game_info_wrap game_like">
                                <FontAwesomeIcon icon={ faHeart } />
                                <span> 10 </span>
                            </p>
                            <p className="game_info_wrap game_review">
                                <FontAwesomeIcon icon={ faComment }  />
                                <span> 10 </span>
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
                </div>

                <div className="game_item_box">
                    <img className="game_item_img" src="https://store.nintendo.co.kr/media/wysiwyg/kirby.png" />
                    <div className="game_item_text_wrap">
                        <strong className="game_title_name"> 별의 커비 디스커버리 </strong>
                        <span className="game_title_date"> 2022.12.10 </span>
                        <div className="game_title_info_wrap">
                            <p className="game_info_wrap game_score">
                                <FontAwesomeIcon icon={ faStar } />
                                <span> 4.1 </span>
                            </p>

                            <p className="game_info_wrap game_like">
                                <FontAwesomeIcon icon={ faHeart } />
                                <span> 10 </span>
                            </p>
                            <p className="game_info_wrap game_review">
                                <FontAwesomeIcon icon={ faComment }  />
                                <span> 10 </span>
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
                </div>

                <div className="game_item_box">
                    <img className="game_item_img" src="https://store.nintendo.co.kr/media/wysiwyg/kirby.png" />
                    <div className="game_item_text_wrap">
                        <strong className="game_title_name"> 별의 커비 디스커버리 </strong>
                        <span className="game_title_date"> 2022.12.10 </span>
                        <div className="game_title_info_wrap">
                            <p className="game_info_wrap game_score">
                                <FontAwesomeIcon icon={ faStar } />
                                <span> 4.1 </span>
                            </p>

                            <p className="game_info_wrap game_like">
                                <FontAwesomeIcon icon={ faHeart } />
                                <span> 10 </span>
                            </p>
                            <p className="game_info_wrap game_review">
                                <FontAwesomeIcon icon={ faComment }  />
                                <span> 10 </span>
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
                </div>

                <div className="game_item_box last">
                    <img className="game_item_img" src="https://store.nintendo.co.kr/media/wysiwyg/kirby.png" />
                    <div className="game_item_text_wrap">
                        <strong className="game_title_name"> 별의 커비 디스커버리 </strong>
                        <span className="game_title_date"> 2022.12.10 </span>
                        <div className="game_title_info_wrap">
                            <p className="game_info_wrap game_score">
                                <FontAwesomeIcon icon={ faStar } />
                                <span> 4.1 </span>
                            </p>

                            <p className="game_info_wrap game_like">
                                <FontAwesomeIcon icon={ faHeart } />
                                <span> 10 </span>
                            </p>
                            <p className="game_info_wrap game_review">
                                <FontAwesomeIcon icon={ faComment }  />
                                <span> 10 </span>
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
                </div>
            </div>
            <ul className="game_list_pager">
               <li><button type="button">맨 앞으로</button></li>
               <li><button type="button">이전</button></li> 
               <li><button type="button">1 (현재) </button></li> 
               <li><button type="button">2</button></li> 
               <li><button type="button">다음</button></li> 
               <li><button type="button">맨 뒤로</button></li>  
            </ul>

        </>
    )
}

export default Game;