import React,{useState,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSortDown, faXmark, faAngleLeft, faAnglesLeft, faAngleRight, faAnglesRight, faUser,faHeart,faStar,faComment } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import StoreItem from './StoreItem';
import StoreItemNew from './StoreItemNew';


import base from '../css/Base.module.css';
import store from '../css/Store.module.css';

function StoreHome (props) {
    return (
        <>
            <div className={ base.top_wrap }>       
                <strong className={ base.bar_title }> 
                    <i className={base.bar_ico}>🧸</i> 
                    <span className={ `${ base.color_light } ${ base.bar_title_text }` }> 상품 </span>
                    목록 (30)
                </strong>
                { 
                    props.isLoggedIn == true 
                    ? <Link to="../upload" className={ `${base.btn_style_first} ${ base.btn_right } ${ base.btn_size_small }` }> 등록하기 </Link> 
                    : null 
                }
            </div>
            <div className={ base.top_wrap }>       
                <strong className={ base.bar_title }>
                    <i className={base.bar_ico}>✨</i> 
                    <span className={ `${ base.color_light } ${ base.bar_title_text }` }> 신규 </span>
                    타이틀 
                </strong>
            </div>
            <div className={ store.list }>
            {
                   props.StoresNew.map( (q,i) => { 
                        return (
                            <StoreItemNew StoresNew={ props.StoresNew[i] } key={i} />
                        )
                    } )
            }
            </div>
            <div className={ base.top_wrap }>       
                <strong className={ base.bar_title }>
                    <i className={base.bar_ico}>🔥</i>
                    <span className={ `${ base.color_best } ${ base.bar_title_text }` }> 인기 </span>
                    타이틀 
                </strong>
            </div>
            <div className={ store.list }>
            {
                   props.Stores.map( (q,i) => { 
                        return (
                            <StoreItem Stores={ props.Stores[i] } key={i} />
                        )
                    } )
            }
            </div>
        </>
    )
}
export default StoreHome;