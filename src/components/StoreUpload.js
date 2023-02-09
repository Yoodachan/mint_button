import React,{ useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";
import { faSortDown,faImage,faFilter,faXmark } from "@fortawesome/free-solid-svg-icons";

import base from '../css/Base.module.css';
import store from '../css/Store.module.css';

import { storageService, storeService } from 'Mybase';

const GameUpload = (props) => {
    const movePage = useNavigate();

    const [Sfile,setSfile] = useState("");

    let date = new Date();
    let dateMonth = ("0" + (date.getMonth() + 1)).slice(-2);
    let dateDate = ("0" + date.getDate()).slice(-2);
    const new_data = date.getFullYear() + "-" + dateMonth + "-" + dateDate;

    const onFileChange = (event) => {
        const {
            target: {files},
        } = event;
        const theFile = files[0];
        // console.log(theFile);
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            // console.log(finishedEvent);
            const {
                currentTarget: {result},
            } = finishedEvent;
            setSfile(result)
        }
        reader.readAsDataURL(theFile);
        setSfile()
    };



    const onSubmit = async ( event ) => { 
        event.preventDefault();
        const fileRef = storageService.ref().child(`${props.userObj.uid}/${uuidv4()}`)
        const respons = await fileRef.putString(Sfile , "data_url");
        const fileRefUrl = await respons.ref.getDownloadURL()
        const userDoc = storeService.collection("games").doc();
        // add론 doc 못가져와서 set 사용
        await userDoc.set({
            // // displayName
            // // photoURL
            // // {상품 고유번호}
            // s_num: props.Stores.length,
            // // {DB 자료명}
            // s_id: userDoc.id,
            // // {작성자 uid}
            // s_post: props.userObj.uid,
            // // {작성일}
            // s_date: new_data,
            // // {이미지 url}
            // s_img: fileRefUrl,
            // // {타이틀명}
            // s_name: props.Gamesname,
            // // {출시일}
            // s_release: Grelease,
            // // 별점 
            // s_score : 0,
            // // 리뷰 
            // s_review : 0,
            // // 좋아요 
            // s_like : 0,
            // // {원가}
            // s_cost : 0,
            // // {할인율 100미만}
            // s_rate : 0,
            // // {할인가}
            // s_sale : 0,
        });

    movePage('/store/home');

    };
    const onChange = ( event ) => { 
        // const { target: { name, value }} = event;
        // if (name === "s_cost") {
        //     setScost(value);
        // }
        // if (name === "s_rate") {
        //     setSrate(value);
        // }
        // if (name === "s_sale") {
        //     setSsale(value);
        // }
    };
    




    return (
        <>
            <div className={ base.top_wrap }>
                    <strong className={ base.bar_title }> <i className={base.bar_ico}>🎮</i> <span className={ `${ base.color_light }` }> 타이틀 </span> 등록 </strong>  
            </div>

            <form className={ base.content_middle } onSubmit={onSubmit}>

                {/* 상품 이미지 */}
                <label className={ `${base.img_content} ${base.style_set_first}` } htmlFor='s_img'>
                    { Sfile == "" 
                      ?  <div className={ base.img_text }>
                            <FontAwesomeIcon icon={ faImage } />
                            <span>이미지 업로드</span>
                        </div>

                      : <img src={Sfile} className={base.img_content}  />
                    }
                        <input className={ base.img_btn } name='s_img' type="file" accept="image/*" onChange={onFileChange} />
                </label>
                {/* 상품 원가 */}
                <label className={ `${store.s_cost_wrap} ${ base.input_wrap_normal }` } htmlFor='s_release'>
                    <input className={ ` ${store.s_cost} ${ base.input_normal } ${ base.style_set_border } ` } name="s_cost" type="number" placeholder="상품 원가" onChange={onChange} />
                </label>

                {/* 상품 할인율 */}
                <label className={ `${store.s_rate_wrap} ${ base.input_wrap_normal }` } htmlFor='s_rate'>
                    <input className={ ` ${store.s_rate} ${ base.input_normal } ${ base.style_set_border } ` } name="s_rate" type="number" placeholder="상품 할인율" onChange={onChange} />
                </label>

                {/* 상품 할인가 */}
                <label className={ `${store.s_sale_wrap} ${ base.input_wrap_normal }` } htmlFor='s_sale'>
                    <input className={ ` ${store.s_sale} ${ base.input_normal } ${ base.style_set_border } ` } name="s_sale" type="number" placeholder="상품 할인가" onChange={onChange} />
                </label>

                <button type="submit" className={ `${base.btn_style_first} ${ base.btn_size_long }` }> 타이틀 등록 </button>

            </form>
           
        </>
    )
}

export default GameUpload;