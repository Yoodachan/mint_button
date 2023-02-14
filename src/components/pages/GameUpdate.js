import React,{ useState,useEffect } from "react";
import { Link,useNavigate,useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";
import { faSortDown,faImage,faFilter,faXmark } from "@fortawesome/free-solid-svg-icons";

import base from '../../css/Base.module.css';
import game from '../../css/Game.module.css';

import { storageService, storeService } from 'Mybase';

const GameUpdate = (props) => {
    let {idx} = useParams();
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

    // const [Gid,setGid] = useState("");
    const [Gyoutube,setGyoutube] = useState("");
    const [Gname,setGname] = useState("");
    // const [Ginfo,setGinfo] = useState("");
    const [Gnum,setGnum] = useState("");
    const [Grelease,setGrelease] = useState("");
    const [Gfile,setGfile] = useState("");
    // console.log (Gfile)

    // const getDb = async() => {
    //     const db = await storeService.collection("user").get().then( (event) => {
    //         event .forEach((doc)=>{
    //             console.log (doc.data())
    //         })
    //     })

    //     // db.forEach( (document) => {
    //     //     const userObject = {
    //     //         ...document.data(),
    //     //         id : document.id,
    //     //     };
    //     //     setGname( (prev) => [userObject, ...prev]);
    //     // });
    // }

    let date = new Date();
    let dateMonth = ("0" + (date.getMonth() + 1)).slice(-2);
    let dateDate = ("0" + date.getDate()).slice(-2);
    const new_data = date.getFullYear() + "-" + dateMonth + "-" + dateDate;

    const onFileChange = (event) => {
        const {
          target: { files },
        } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
          const {
            currentTarget: { result },
          } = finishedEvent;
          setGfile(result);
        };
        reader.readAsDataURL(theFile);
      };
    



    const onSubmit = async ( event ) => { 
        event.preventDefault();
        const fileRef = storageService.ref().child(`${props.userObj.uid}/${uuidv4()}`)
        const respons = await fileRef.putString(Gfile , "data_url");
        const fileRefUrl = await respons.ref.getDownloadURL()
        const userDoc = storeService.collection("games").doc(props.Games[idx].g_id);
        // add론 doc 못가져와서 set 사용
        await userDoc.update({
            // displayName
            // photoURL
            // g_num: props.Games.length,
            // {DB명}
            // g_id: userDoc.id,
            // {작성자 uid}
            // g_post: props.userObj.uid,
            // {작성일}
            // g_date: new_data,
            g_update: new_data,
            // {이미지 url}
            g_img: fileRefUrl,
            // {타이틀명}
            g_name: Gname,
            // {게임 정보}
            // g_info: Ginfo,
            // {출시일}
            g_release: Grelease,
            // {유튜브 url}
            g_youtube: Gyoutube,
            // g_score : 0,
            // g_review : 0,
            // g_like : 0,
        });

    movePage('/game/home');
    };
    const onChange = ( event ) => { 
        const { target: { name, value }} = event;
        if (name === "g_num") {
            setGnum(value);
        }
        if (name === "g_youtube") {
            setGyoutube(value);
        }
        if (name === "g_name") {
            setGname(value);
        }
        if (name === "g_release") {
            setGrelease(value);
        }
        // if (name === "g_info") {
        //     setGinfo(value);
        // }
    };
    




    return (
        <>
            <div className={ base.top_wrap }>
                    <strong className={ base.bar_title }> 🎮 
                        <span className={ `${ base.color_light } ${ base.bar_title_text }` }> 타이틀 </span>
                     수정 
                    </strong>  
            </div>

            <form className={ base.content_middle } onSubmit={onSubmit}>

                <label className={ `${base.img_content} ${base.style_set_first}` } htmlFor='g_img'>
                    { Gfile == "" && props.Games[idx].g_img == undefined  
                      ?  <div className={ base.img_text }>
                            <FontAwesomeIcon icon={ faImage } />
                            <span>이미지 업로드</span>
                        </div>

                      : <img src={ 
                        props.Games[idx].g_img 
                        ? props.Games[idx].g_img
                        : Gfile      
                        } 
                    className={base.img_content}  />
                    }
                        <input className={ base.img_btn } name='g_img' type="file" accept="image/*" onChange={onFileChange} />
                </label>

                {/* <label className={ `${game.g_num_wrap} ${ base.input_wrap_normal }` } htmlFor='g_num'>
                    <input className={ ` ${game.g_num} ${ base.input_normal } ${ base.style_set_border } ` } name="g_num" type="number" placeholder="타이틀 넘버" onChange={onChange} value={props.Games && props.Games.length} />
                </label> */}

                <label className={ `${game.g_name_wrap} ${ base.input_wrap_normal }` } htmlFor='g_name'>
                    <input className={ ` ${game.g_name} ${ base.input_normal } ${ base.style_set_border } ` } name="g_name" type="text" placeholder="타이틀 제목" onChange={onChange} />
                </label>

                {/* <label className={ `${game.g_info_wrap} ${ base.input_wrap_normal }` } htmlFor='g_info'>
                    <input className={ ` ${game.g_info} ${ base.input_normal } ${ base.style_set_border } ` } name="g_info" type="text" placeholder="타이틀 설명" onChange={onChange} />
                </label> */}

                <label className={ `${game.g_date_wrap} ${ base.input_wrap_normal }` } htmlFor='g_release'>
                    <input className={ ` ${game.g_date} ${ base.input_normal } ${ base.style_set_border } ` } name="g_release" type="text" placeholder="타이틀 출시일" onChange={onChange} />
                </label>
                <label className={ `${game.g_youtube_wrap} ${ base.input_wrap_normal }` } htmlFor='g_youtube'>
                    <input className={ ` ${game.g_youtube} ${ base.input_normal } ${ base.style_set_border } ` } name="g_youtube" type="text" placeholder="타이틀 유튜브 URL" onChange={onChange} />
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

export default GameUpdate;