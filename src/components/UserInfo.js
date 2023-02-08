import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import base from '../css/Base.module.css';
import user from '../css/User.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLarge,faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { authService } from '../Mybase';


function UserInfo (props) {
   // 유저 정보 저장
   const [Mail, setMail] = useState("");
   const [Pwd, setPwd] = useState("");
   const [Profile, setProfile] = useState("");
   const [img, setImg] = useState("");
   const [Name, setName] = useState("");
   const [Error, setError] = useState("");

   const [Account,setAccount] = useState(true);

   const movePage = useNavigate();

     const [Games,setGames] = useState([]);

   // 날짜 등록
   let date = new Date();
   let dateMonth = ("0" + (date.getMonth() + 1)).slice(-2);
   let dateDate = ("0" + date.getDate()).slice(-2);
   const new_data = date.getFullYear() + "-" + dateMonth + "-" + dateDate;

   // 이미지 파일 등록
   const onFileChange = (event) => {
       const {
           target: {files},
       } = event;
       const theFile = files[0];
       const reader = new FileReader();
       reader.onloadend = (finishedEvent) => {
       const {
           currentTarget: {result},
       } = finishedEvent;
       setProfile(result)
       }
       reader.readAsDataURL(theFile);
       setProfile()
   };

   const onChange = ( event ) => { 
       const { target: { name, value }} = event;
       if (name === "u_mail") {
           setMail(value);
           console.log (value)
       } 
       if (name === "u_pwd") {
           setPwd(value);
       }
   };

   const onSubmit = async ( event ) => { 
       event.preventDefault();
       try {
           let data;
           if ( Account ) {
               data = await authService.createUserWithEmailAndPassword(
                   Mail,Pwd,Name,Profile
               );
               movePage('/user/joinSuccess')
           }
       }
       catch ( Error ) {
           const fillterEmail = ['email'];
           const errmsg = Error.message;

           if (errmsg.includes('email')) {
               setError("이메일이 중복인거 같음");
           }
       }
   }
   return (
               <form className={base.content_small} onSubmit={onSubmit}>
                   <h2 className={user.title_text}> 정보 수정 </h2>

                   <label className={ ` ${user.img_content}` } htmlFor='g_img'>
                   { img == "" 
                     ?  <div className={ user.img_text_wrap }>
                           <FontAwesomeIcon className={user.profile_ico} icon={ faUserLarge } />
                           <FontAwesomeIcon className={user.plus_ico} icon={ faCirclePlus } />
                       </div>
                     : <img src={img} className={base.img_content}  />
                   }
                       <input className={ user.img_btn } name='u_img' type="file" accept="image/*" onChange={onFileChange} />
                   </label>

                   <label className={ `${user.u_name_wrap} ${ base.input_wrap_normal }` } htmlFor='u_name'>
                       <input className={ `${user.u_name} ${ base.input_normal } ${ base.style_set_border }` } name="u_name" type="text" placeholder="이름" onChange={onChange} value={props.userObj.displayName} disabled/>
                       {Error}
                       <button type="button" className={user.update_btn }>수정</button>
                   </label>

                   <label className={ `${user.u_mail_wrap} ${ base.input_wrap_normal }` } htmlFor='u_mail'>
                       <input className={ `${user.u_mail} ${ base.input_normal } ${ base.style_set_border }` } name="u_mail" type="email" placeholder="성적취향" onChange={onChange} value={Mail} />
                   </label>

                   <input type="submit" to="../joinSuccess" value={Account ? "회원 가입" : "로그인"} className={`${base.btn_style_first} ${ base.btn_size_long }`} />                    
               </form>
   )
}
export default UserInfo;