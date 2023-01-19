import { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare,faStar,faHeart,faComment,faSortDown,faPlus,faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

import TitleData from '../../data/TitleData';
import "../../css/Detail.css"

function StoreDetail (props) {
    return (
        <section className="detail_content">
        <div className="detail_top">
            <img className="detail_thumbnail" src="https://product-image.kurly.com/product/image/dc721241-72a2-423a-b1cd-9b99bca553d7.jpg"/>
            <div className="detail_text_wrap">

                <strong className="detail_title_wrap">
                    <span className="detail_title_text"> ddd </span>
                    <button className="detail_url_link">
                        < FontAwesomeIcon icon={ faShareFromSquare } />
                    </button>
                </strong>

                <div className="detail_icon_wrap">
                    <span className="detail_score_wrap">
                            <FontAwesomeIcon icon={ faStar } />
                            <span className="detail_score">
                                4.5
                            </span>
                            /5.0
                    </span>
                    <span className="detail_review_wrap">
                        <FontAwesomeIcon icon={ faComment } />
                        <span className="detail_review">
                             15  
                        </span>
                    </span>
                </div>

                <div className="detail_price_wrap">
                    <span className="detail_price_cost"> 48,000 원</span>
                    <span className="detail_price_sale_wrap">
                        <strong className="detail_price_rate"> 25%</strong>
                        <strong className="detail_price_sale"> 46,000 원</strong>
                    </span>
                </div> 

                <div className="detail_shipping_wrap">
                    <dl className="detail_shipping_box shipping_cost">
                        <dt> <span> 배송비 </span> </dt>
                        <dd>
                            <span> 기본 배송 비용 3000원 </span>
                            <span> 제주도를 포함한 도서/산간지역 </span> 
                            <span> 추가 배송 비용 3,000원 </span>
                        </dd>
                    </dl>

                    <dl className="detail_shipping_box shipping_info">
                        <dt> <span> 배송 예정 </span> </dt>
                        <dd>
                            <span> 1일 이내 출고 (주말 및 공휴일 제외) </span> 
                        </dd>
                    </dl>
                </div>

                <div className="detail_select_wrap">
                    <span className="detail_select_title"> 상품 선택 </span>
                    <div className="detail_select_list">
                        <input type="text"  disabled/>
                        <button type="button">
                            <FontAwesomeIcon icon={ faSortDown } />
                        </button>
                    </div>

                    <div className="detail_select_item">
                        <input type="text" placeholder="본품" />
                    </div>

                    <div className="detail_payment_wrap">
                        <span className="detail_payment_name">
                            본품
                        </span>
                        <div className="detail_count_wrap">
                            <button className="detail_plus_btn" type="button">-</button>
                            <input className="detail_count_value" type="number"  disabled/>
                            <button className="detail_minus_btn" type="button">+</button>
                        </div>
                    </div>

                    <div className="detail_total_wrap">
                        <span> 총 상품 금액 </span>
                        <strong> 67,500 원</strong>
                    </div>

                    <div className="detail_btn_wrap">
                        <button className="detail_like_btn" type="button">
                            <FontAwesomeIcon icon={ faHeart } />
                            <span className="detail_like_conut"> 1천+ </span>

                        </button>

                        <button className="detail_basket_btn" type="button">
                            장바구니 담기
                        </button>
                        
                    </div>


                </div>


                
            </div>
        </div>

        <ul className="detail_cate_wrap">
                <li><button type="button">상품설명</button></li>
                <li><button type="button">상세정보</button></li>
                <li><button type="button">리뷰(10)</button></li>
                <li><button type="button">문의(10)</button></li>
        </ul>

        <div className="detail_middle">
            <div className="detail_notice_wrap">
                <div className="shipping_notice_wrap">
                    <ul>
                        <li>
                            <strong className="notice_title">배송 관련</strong>
                        </li>

                        <li>
                            <strong>
                                <i>1</i>
                                주문 후 물건을 언제 받아 볼 수 있나요?
                            </strong>
                            <p>
                                <span>평일 오후 3시 혹은 토요일 오후 1시까지 결제 완료된 건에 한하여 당일출고 해 드리고 있으며,  </span>
                                <span>발송된 상품은 지역에 따라 1~2일 정도 소요됩니다.</span>
                            </p>
                        </li>

                        <li>
                            <strong>
                                <i>2</i>
                                제주도 및 도서산간 지역 배송비는 얼마인가요?
                            </strong>
                            <p>
                                <span>일부 도서 산간 지역에 따라 추가 배송비가 3000원 추가됩니다.</span>
                                <span>제주도 미 도서산간 지역의 경우 배송이 약 1~2일 정도 추가로 소요 될 수 있습니다.</span>
                            </p>
                        </li>

                        <li>
                            <strong>
                                <i>3</i>
                                송장번호는 받았는데 배송 추적은 언제 되나요?
                            </strong>
                            <p>
                                <span>저녁 10시 전 후로 쇼핑몰 혹은 로젠택배 사이트에서 조회하시면, </span>
                                <span>위치 조회 및 배송상태 확인 가능합니다.</span>
                            </p>
                        </li>

                        <li>
                            <strong>
                                <i>4</i>
                                제품을 수령 했는데 상품이 불량 혹은 누락이 되면 어떻게 하나요?
                            </strong>
                            <p>
                                <span>제품 불량 및 누락의 경우 신속한 처리를 위해 고객센터로 연락 부탁드립니다. </span>
                                <span>민트버튼 고객센터 02-3333-3333 </span>
                            </p>
                        </li>

                    </ul>
                </div>

                <div className="shipping_notice_wrap">
                    <ul>
                        <li>
                            <strong className="notice_title">교환 및 환불 관련</strong>
                        </li>
                        <li>
                            <strong>
                                <i>1</i>
                                교환 및 환불 기준이 어떻게 되나요?
                            </strong>
                            <p>
                                <span>상품 수령후 7일 이내 교환/환불이 가능합니다. </span>
                                <span>제품의 하자 등 판매자의 귀책사유로 인한 경우 판매자가 택배비를 부담합니다.</span>
                            </p>
                        </li>

                        <li>
                            <strong>
                                <i>2</i>
                                교환 및 환불이 불가능한 사유가 어떻게 되나요?
                            </strong>
                            <p>
                                <span>1. 상품 수령후 7일 경과한 경우</span>
                                <span>2. 소비자 사유로 상품이 훼손된 경우</span>
                                <span>3. 시간의 경과에 의해 재판매가 곤란할 정도로 상품 가치가 훼손된 경우</span>
                                <span>4. 제품의 특성 상 제품 개봉 시 (비닐제거, 제품 사용흔적, 밀봉 개봉)</span>
                                <span>5. 제품 박스의 미세한 손상 (제품 박스 겉면 찌그러짐 혹은 겉면 스크래치)</span>
                                <span>6. 제품 특전 상품 (스틸케이스 미세한 잔기스,유격,겉표면 기스,이물질 유입,특전 구겨짐)</span>
                            </p>
                        </li>

                        <li>
                            <strong>
                                <i>3</i>
                                송장번호는 받았는데 배송 추적은 언제 되나요?
                            </strong>
                            <p>
                                <span>저녁 10시 전 후로 쇼핑몰 혹은 로젠택배 사이트에서 조회하시면, </span>
                                <span>위치 조회 및 배송상태 확인 가능합니다.</span>
                            </p>
                        </li>

                        <li>
                            <strong>
                                <i>4</i>
                                제품을 수령 했는데 상품이 불량 혹은 누락이 되면 어떻게 하나요?
                            </strong>
                            <p>
                                <span>제품 불량 및 누락의 경우 신속한 처리를 위해 고객센터로 연락 부탁드립니다. </span>
                                <span>민트버튼 고객센터 02-3333-3333 </span>
                            </p>
                        </li>

                    </ul>
                </div>

            </div>
        </div>

        <div className="detail_comment_wrap">
            <ul className="detail_comment_cate">
                <li><button type="button"> 전체 리뷰 (20) </button></li>
                <li><button type="button"> 구매자 리뷰 (10) </button></li>
                <li><button type="button"> 커뮤니티 리뷰 (10) </button></li>
            </ul>
            <ul className="detail_comment_sort">
                <li><button type="button"> 최신순 </button></li>
                <li><button type="button"> 인기순 </button></li>
            </ul>
        </div>

        <div className="detail_bottom">

            <div className="detail_comment_list">

                    <ul className="detail_comment_box">
                        <li className="comment_user_info">
                            <img className="comment_user_info_img" src="https://item.kakaocdn.net/do/4df35949efd9d681ba97979ce27c82cd8f324a0b9c48f77dbce3a43bd11ce785"/>
                            <strong className="comment_user_info_name"> 김덕팔  </strong>
                            <span className="comment_user_info_date"> 2023.01.19  </span>

                            <p className="comment_user_info_score"> ★★★★★ </p>
                        </li>
                        <li className="comment_user_content">
                            <div className="comment_user_title"> 옵션 : 본품 </div>
                            <div className="comment_user_subject"> 너무너무 조아요 </div>
                        </li>
                    </ul>

                    <ul className="detail_comment_box">
                        <li className="comment_user_info">
                            <img className="comment_user_info_img" src="https://item.kakaocdn.net/do/4df35949efd9d681ba97979ce27c82cd8f324a0b9c48f77dbce3a43bd11ce785"/>
                            <strong className="comment_user_info_name"> 김덕팔  </strong>
                            <span className="comment_user_info_date"> 2023.01.19  </span>

                            <p className="comment_user_info_score"> ★★★★★ </p>
                        </li>
                        <li className="comment_user_content">
                            <div className="comment_user_title"> 옵션 : 본품 </div>
                            <div className="comment_user_subject"> 너무너무 조아요 </div>
                        </li>
                    </ul>

                    <ul className="detail_comment_box">
                        <li className="comment_user_info">
                            <img className="comment_user_info_img" src="https://item.kakaocdn.net/do/4df35949efd9d681ba97979ce27c82cd8f324a0b9c48f77dbce3a43bd11ce785"/>
                            <strong className="comment_user_info_name"> 김덕팔  </strong>
                            <span className="comment_user_info_date"> 2023.01.19  </span>

                            <p className="comment_user_info_score"> ★★★★★ </p>
                        </li>
                        <li className="comment_user_content">
                            <div className="comment_user_title"> 옵션 : 본품 </div>
                            <div className="comment_user_subject"> 너무너무 조아요 </div>
                        </li>
                    </ul>

                    <ul className="detail_comment_box">
                        <li className="comment_user_info">
                            <img className="comment_user_info_img" src="https://item.kakaocdn.net/do/4df35949efd9d681ba97979ce27c82cd8f324a0b9c48f77dbce3a43bd11ce785"/>
                            <strong className="comment_user_info_name"> 김덕팔  </strong>
                            <span className="comment_user_info_date"> 2023.01.19  </span>

                            <p className="comment_user_info_score"> ★★★★★ </p>
                        </li>
                        <li className="comment_user_content">
                            <div className="comment_user_title"> 옵션 : 본품 </div>
                            <div className="comment_user_subject"> 너무너무 조아요 </div>
                        </li>
                    </ul>

                    <ul className="detail_comment_box">
                        <li className="comment_user_info">
                            <img className="comment_user_info_img" src="https://item.kakaocdn.net/do/4df35949efd9d681ba97979ce27c82cd8f324a0b9c48f77dbce3a43bd11ce785"/>
                            <strong className="comment_user_info_name"> 김덕팔  </strong>
                            <span className="comment_user_info_date"> 2023.01.19  </span>

                            <p className="comment_user_info_score"> ★★★★★ </p>
                        </li>
                        <li className="comment_user_content">
                            <div className="comment_user_title"> 옵션 : 본품 </div>
                            <div className="comment_user_subject"> 너무너무 조아요 </div>
                        </li>
                    </ul>

            </div>

            <ul className="detail_comment_pager">
                <li><button type="button"> 맨 처음으로 </button></li>
                <li><button type="button"> 이전 </button></li>
                <li><button className="now_page" type="button"> 1 </button></li>
                <li><button type="button"> 2 </button></li>
                <li><button type="button"> 다음 </button></li>
                <li><button type="button"> 맨 끝으로 </button></li>
            </ul>

            <div className="detail_qna_cate_wrap">
                    <span className="detail_qna_cate_all"> 전체 문의 (10) </span>
            </div>

            <div className="detail_qna_wrap">
                    <div className="detail_qna_box">
                        <div className="detail_qna_header"> 
                            <span className="detail_qna_tag"> [상품문의] </span>
                            <strong className="detail_qna_title"> 상품 언제 도착 하나요 ? </strong>
                            <ul className="detail_qna_info">
                                <li className="detail_qna_id">user***</li>
                                <li className="detail_qna_date">2023.12.10</li>
                                <li className="detail_qna_answer">답변 완료</li>
                            </ul>
                        </div>

                        <div className="detail_qna_content">
                            <div className="detail_qna_user_subjec">
                                몇 일째 기다리는데도 안와요 
                                몇 일째 기다리는데도 안와요 
                                몇 일째 기다리는데도 안와요 
                                몇 일째 기다리는데도 안와요 
                                몇 일째 기다리는데도 안와요 
                            </div>
                            <div className="detail_qna_admin_subjec">
                                <strong className="detail_qna_answer_teg">답변</strong>
                                그럴수 있죠
                            </div>
                        </div>
                        
                    </div>

                    <div className="detail_qna_box">
                        <div className="detail_qna_header"> 
                            <span className="detail_qna_tag"> [상품문의] </span>
                            <strong className="detail_qna_title"> 상품 언제 도착 하나요 ? </strong>
                            <ul className="detail_qna_info">
                                <li className="detail_qna_id">user***</li>
                                <li className="detail_qna_date">2023.12.10</li>
                                <li className="detail_qna_answer">답변 완료</li>
                            </ul>
                        </div>

                        <div className="detail_qna_content">
                            <div className="detail_qna_user_subjec">
                                몇 일째 기다리는데도 안와요 
                                몇 일째 기다리는데도 안와요 
                                몇 일째 기다리는데도 안와요 
                                몇 일째 기다리는데도 안와요 
                                몇 일째 기다리는데도 안와요 
                            </div>
                            <div className="detail_qna_admin_subjec">
                                <strong className="detail_qna_answer_teg">답변</strong>
                                그럴수 있죠
                            </div>
                        </div>
                        
                    </div>

                    <div className="detail_qna_box">
                        <div className="detail_qna_header"> 
                            <span className="detail_qna_tag"> [상품문의] </span>
                            <strong className="detail_qna_title"> 상품 언제 도착 하나요 ? </strong>
                            <ul className="detail_qna_info">
                                <li className="detail_qna_id">user***</li>
                                <li className="detail_qna_date">2023.12.10</li>
                                <li className="detail_qna_answer">답변 완료</li>
                            </ul>
                        </div>

                        <div className="detail_qna_content">
                            <div className="detail_qna_user_subjec">
                                몇 일째 기다리는데도 안와요 
                                몇 일째 기다리는데도 안와요 
                                몇 일째 기다리는데도 안와요 
                                몇 일째 기다리는데도 안와요 
                                몇 일째 기다리는데도 안와요 
                            </div>
                            <div className="detail_qna_admin_subjec">
                                <strong className="detail_qna_answer_teg">답변</strong>
                                그럴수 있죠
                            </div>
                        </div>
                        
                    </div>

                    <div className="detail_qna_box">
                        <div className="detail_qna_header"> 
                            <span className="detail_qna_tag"> [상품문의] </span>
                            <strong className="detail_qna_title"> 상품 언제 도착 하나요 ? </strong>
                            <ul className="detail_qna_info">
                                <li className="detail_qna_id">user***</li>
                                <li className="detail_qna_date">2023.12.10</li>
                                <li className="detail_qna_answer">답변 완료</li>
                            </ul>
                        </div>

                        <div className="detail_qna_content">
                            <div className="detail_qna_user_subjec">
                                몇 일째 기다리는데도 안와요 
                                몇 일째 기다리는데도 안와요 
                                몇 일째 기다리는데도 안와요 
                                몇 일째 기다리는데도 안와요 
                                몇 일째 기다리는데도 안와요 
                            </div>
                            <div className="detail_qna_admin_subjec">
                                <strong className="detail_qna_answer_teg">답변</strong>
                                그럴수 있죠
                            </div>
                        </div>
                        
                    </div>
            </div>

            <ul className="detail_comment_pager">
                <li><button type="button"> 맨 처음으로 </button></li>
                <li><button type="button"> 이전 </button></li>
                <li><button className="now_page" type="button"> 1 </button></li>
                <li><button type="button"> 2 </button></li>
                <li><button type="button"> 다음 </button></li>
                <li><button type="button"> 맨 끝으로 </button></li>
            </ul>

        </div>




        </section>
    )
}

export default StoreDetail;