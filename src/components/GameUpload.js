import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useState,useEffect } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown,faImage,faFilter,faXmark }
from "@fortawesome/free-solid-svg-icons";

import base from '../css/Base.module.css';
import game from '../css/Game.module.css';

import { storeService } from 'Mybase';
// import {collection, doc, getDocs,addDoc} from 'firebase/firestore';
import { async } from "q";

// const userCollectionRef = collection(db,"user");

// let DesktopContent = styled.div

function GameUpload (props) {
    const movePage = useNavigate();
    // useEffect (() => {
    //     const getLists = async () => {
    //         const data = await getDocs(userCollectionRef);
    //         console.log( data );
    //     }
    //     getLists();
    // // 빈 배열 추가하여 didmount 일때 한번만 실행하게 함
    // },[]);
    // doc.id
    const [Gid,setGid] = useState("");
    const [Gimg,setGimg] = useState("");
    const [Gname,setGname] = useState("");
    const [Ginfo,setGinfo] = useState("");
    const [Grelease,setGrelease] = useState("");
    let date = new Date();
    let dateMonth = ("0" + (date.getMonth() + 1)).slice(-2);
    let dateDate = ("0" + date.getDate()).slice(-2);
    const new_data = date.getFullYear() + "-" + dateMonth + "-" + dateDate;

    const onChange = ( event ) => { 
        const { target: { name, value }} = event;
        // if (name === "g_id") {
        //     setGid(value);
        // } 
        if (name === "g_img") {
            setGimg(value);
        }
        if (name === "g_name") {
            setGname(value);
        }
        if (name === "g_release") {
            setGrelease(value);
        }
        if (name === "g_info") {
            setGinfo(value);
        }
    };
    const onSubmit = async ( event ) => { 
            event.preventDefault();
            await storeService.collection("user").add({
                // g_id: addDoc(),
                g_date: new_data,
                g_img: Gimg,
                g_name: Gname,
                g_info: Ginfo,
                g_release: Grelease,
        });
        movePage('/game/home');

    }
    




    return (
        <>
            <div className={ base.top_wrap }>
                    <strong className={ base.bar_title }> 🎮 <span className={ `${ base.color_light }` }> 타이틀 </span> 등록 </strong>  
            </div>

            <form className={ base.content_middle } onSubmit={onSubmit}>

                <label className={ `${game.g_img_wrap} ${base.style_set_first}` } htmlFor='g_img'>
                        <div className={ game.g_img_text }>
                            <FontAwesomeIcon icon={ faImage } />
                            <span>이미지 업로드</span>
                        </div>
                        <input className={ game.g_img_btn } name='g_img' type="file" onChange={onChange} />
                </label>

                <label className={ `${game.g_id_wrap} ${ base.input_wrap_normal }` } htmlFor='g_id'>
                    <input className={ ` ${game.g_id} ${ base.input_normal } ${ base.style_set_border } ` } name="g_id" type="text" placeholder="타이틀 넘버" onChange={onChange} />
                </label>

                <label className={ `${game.g_name_wrap} ${ base.input_wrap_normal }` } htmlFor='g_name'>
                    <input className={ ` ${game.g_name} ${ base.input_normal } ${ base.style_set_border } ` } name="g_name" type="text" placeholder="타이틀 제목" onChange={onChange} />
                </label>

                <label className={ `${game.g_info_wrap} ${ base.input_wrap_normal }` } htmlFor='g_info'>
                    <input className={ ` ${game.g_info} ${ base.input_normal } ${ base.style_set_border } ` } name="g_info" type="text" placeholder="타이틀 설명" onChange={onChange} />
                </label>

                <label className={ `${game.g_date_wrap} ${ base.input_wrap_normal }` } htmlFor='g_release'>
                    <input className={ ` ${game.g_date} ${ base.input_normal } ${ base.style_set_border } ` } name="g_release" type="text" placeholder="타이틀 출시일" onChange={onChange} />
                </label>

                <div className={ base.bar_small_wrap }>

                    <div className={ base.filter_small_icon }>
                            <FontAwesomeIcon icon={ faFilter } />
                    </div>

                    <ul className={ base.bar_small_wrap }>
                        <li className={ `${ base.bar_small_item }  ${ base.filter_on }` }>
                            <button type="button" className={ ` ${base.btn_style_second} ${base.bar_small_button} ` }>
                                <span>발매년도</span>
                                <FontAwesomeIcon icon={ faSortDown } className={ base.icon_layout_left_bottom } />
                            </button>
                        </li>

                        <li className={ `${ base.bar_small_item } ${ base.filter_off }` }>
                            <button type="button" className={ ` ${base.btn_style_second} ${base.bar_small_button} ` }>
                                    <span>인원수</span>
                                    <FontAwesomeIcon icon={ faSortDown } className={ base.icon_layout_left_bottom } />
                            </button>
                        </li>

                        <li className={ `${ base.bar_small_item } ${ base.filter_off }` }>
                            <button type="button" className={ ` ${base.btn_style_second} ${base.bar_small_button} ` }>
                                    <span>장르</span>
                                    <FontAwesomeIcon icon={ faSortDown } className={ base.icon_layout_left_bottom } />
                            </button>
                        </li>
                    </ul>

                </div>


                <div className={ base.bar_small_wrap }>
                    <ul className={ base.btn_small_wrap }>
                        <li className={ `${ base.btn_small_item }` }>
                            <button type="button" className={ `${base.btn_style_first} ${base.bar_small_button}` }>
                                <span>로컬협동</span>
                                <FontAwesomeIcon icon={ faXmark } className={ base.icon_layout_left }/>
                            </button>
                        </li>

                        <li className={ `${ base.btn_small_item }` }>
                            <button type="button" className={ `${base.btn_style_first} ${base.bar_small_button}` }>
                                <span>샌드박스</span>
                                <FontAwesomeIcon icon={ faXmark } className={ base.icon_layout_left } />
                            </button>
                        </li>

                        <li className={ `${ base.btn_small_item }` }>
                            <button type="button" className={ `${base.btn_style_first} ${base.bar_small_button}` }>
                                <span>2022년</span>
                                <FontAwesomeIcon icon={ faXmark } className={ base.icon_layout_left } />
                            </button>
                        </li>

                        <li className={ `${ base.btn_small_item }` }>
                            <button type="button" className={ `${base.btn_style_first} ${base.bar_small_button}` }>
                                <span>연령</span>
                                <FontAwesomeIcon icon={ faXmark } className={ base.icon_layout_left } />
                            </button>
                        </li>
                        
                    </ul>

                    <button type="button" className={ `${base.btn_style_second} ${ base.btn_right } ${base.bar_small_button}` }>
                        <span>모두 지우기</span>
                        <FontAwesomeIcon icon={ faXmark } className={ base.icon_layout_left } />
                    </button>
                </div>


                <button type="submit" className={ `${base.btn_style_first} ${ base.btn_size_long }` }> 타이틀 등록 </button>

            </form>
           
        </>
    )
}

export default GameUpload;