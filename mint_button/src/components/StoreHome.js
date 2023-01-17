import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faHeart,faStar,faComment } from "@fortawesome/free-solid-svg-icons";

import {db} from '../index'
import "firebase/firestore"; 

import '../css/StoreHome.css';

// 하나만 사용
// import ProductData from '../data/ProductData';
// 다수 사용 중괄호 일치 시켜야 함
// import { a,b } from '../data/ProductData';


import TitleData from '../data/TitleData';

function StoreHome () {
    let [title,setTitle] = useState(TitleData);
    return(
        <section className="store_content">

            {/* <image src={process.env.PUNLIC_URL + './image.jps'}/> */}

            <div className='store_banner_wrap'>
            </div>

            <div className='new_product_wrap'>
                <strong className='title_text'>✨<span className='new_title_color'>신규</span> 타이틀</strong>
                <div className="product_list">
                    {
                        title.map( (q,i)=> {
                            if (i < 4) {
                                return (
                                    < Product title={title[i]} i={i}  />
                                )
                            }
                        })
                    }

                    <div className="product product_last">
                        <div className="product_cate cate_new"> 신규 </div>
                        <span className="product_img"></span>
                        <div className="product_info_wrap">
                            <strong className="product_name">동물의 숲</strong>

                            <div className="product_text_box">

                                <span className="product_score_wrap">
                                    평점
                                    <span className="product_score">5.0</span>
                                    /10.0
                                </span>

                                <span className="product_review_wrap">
                                    리뷰
                                    <span className="product_review">10</span>
                                </span>

                                <span className="product_tag_wrap">
                                    장르
                                    <span className="product_tag sandbox">#샌드박스</span>
                                </span>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='hot_product_wrap'>
                <strong className='title_text'>🔥<span className='hot_title_color'>인기</span> 타이틀</strong>
                <div className="product_list">

                    < Product title={title[0]} i={0}  />
                    < Product title={title[1]} i={1}  />
                    < Product title={title[2]} i={2}  />

                    <div className="product product_last">
                    </div>

                </div>
            </div>

        </section>
    )    
}

function Product (props) {
    return (
        <div className="product">
            <div className="product_cate cate_hot"> 인기 </div>

            <img className="product_img" src="https://kroms.org/wp-content/uploads/2020/03/Animal-Crossing-New-Horizons.jpg" />

            <div className="product_info_wrap">
                <strong className="product_name"> { props.title.t_name } </strong>

                <div className="product_text_box">

                    <span className="product_score_wrap">
                        <FontAwesomeIcon icon={ faStar } />
                        <span className="product_score">
                            { props.title.t_score }
                        </span>
                        /5.0
                    </span>


                    <span className="product_like_wrap">
                        <FontAwesomeIcon icon={ faHeart } />
                        <span className="product_like">
                            { props.title.t_like }
                        </span>
                    </span>

                    <span className="product_review_wrap">
                        <FontAwesomeIcon icon={ faComment } />
                        <span className="product_review">
                             { props.title.t_review }  
                        </span>
                    </span>

                    <span className="product_tag_wrap">
                        <span className="product_tag sandbox">
                             { props.title.t_cate } 
                        </span>
                    </span>

                </div>

                <div className='product_price_wrap'>
                    <span className='product_price_rate'>{ props.title.t_price_rate }%</span>
                    <strong className='product_price_sale'>{ props.title.t_price_sale }원</strong>
                    <span className='product_price_cost'>{ props.title.t_price_cost }원</span>
                </div>
            </div>
        </div>
    )
}

export default StoreHome;