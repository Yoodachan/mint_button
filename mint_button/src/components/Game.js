import '../css/Game.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter,faSortDown,faXmark } from "@fortawesome/free-solid-svg-icons";

function Game () {
    return (
        <section className="game_content">

            <ul className="game_title_wrap">
                <li className="game_title_text"> 
                    <strong> 😜 <span className="game_title_color"> 타이틀 </span> 목록 </strong> 
                </li>
                <li className="game_title_upload"> 
                    <button type="button"> 등록하기 </button> 
                </li>
            </ul>

            <ul className="game_tag_wrap">
                    <li className="game_tag_filter">
                            <FontAwesomeIcon icon={ faFilter } />
                    </li>

                    <li>
                        <button type="button">
                            <span>발매년도</span>
                            <FontAwesomeIcon icon={ faSortDown } />
                        </button>
                    </li>

                    <li>
                        <button type="button">
                                <span>인원수</span>
                                <FontAwesomeIcon icon={ faSortDown } />
                        </button>
                    </li>

                    <li>
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
                    <li> 
                        <button>
                            <span>모두 지우기</span>
                            <FontAwesomeIcon icon={ faXmark } />
                        </button>
                    </li>
                </ul>

                <button type="button"> 전부 지우기 </button>

            </div>

            <div className="game_result_wrap">총 10개</div>

            <div className="game_list_wrap">
                <div className="game_item_box">
                    <img src="https://store.nintendo.co.kr/media/wysiwyg/kirby.png" />
                    <strong className="game_title_name"> 별의 커비 디스커버리 </strong>
                    <span className="game_title_date"> 출시년도 2022.12.10 </span>
                    <ul className="game_title_info_wrap">
                        <li>
                            <button type="button">
                                별점
                            </button>
                            15개
                        </li>
                        <li>
                            <button type="button">
                                하트
                            </button>
                            10개
                        </li>
                        <li>
                            <button type="button">
                                코멘트
                            </button>
                            10개
                        </li>
                    </ul>
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

        </section>
    )
}

export default Game;