import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import base from '../css/Base.module.css';
import user from '../css/User.module.css';
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLarge,faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { authService,storeService,storageService } from '../Mybase';


function UserInfo (props) {
   // 유저 정보 저장
   const [Mail, setMail] = useState("");
   const [Pwd, setPwd] = useState("");
   const [Profile, setProfile] = useState("");
   const [Name, setName] = useState("");
   const [img, setImg] = useState("");
   const [Error, setError] = useState("");
   const [Gfile,setGfile] = useState("");
   const [Account,setAccount] = useState(true);

   const movePage = useNavigate();

     const [Games,setGames] = useState([]);

   // 날짜 등록
   let date = new Date();
   let dateMonth = ("0" + (date.getMonth() + 1)).slice(-2);
   let dateDate = ("0" + date.getDate()).slice(-2);
   const new_data = date.getFullYear() + "-" + dateMonth + "-" + dateDate;

    // 이미지 data url 뽑아서 현재 화면에 렌더링 시켜주는 코드
    const onFileChange = (event) => {
        const {
            target: {files},
        } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            // console.log(finishedEvent);
            const {
                currentTarget: {result},
            } = finishedEvent;
            setGfile(result);
        }
        reader.readAsDataURL(theFile);
        setGfile();
    };


    const onChange = ( event ) => { 
        const { target: { name, value }} = event;
        if (name === "u_mail") {
            setMail(value);
        } 
        if (name === "u_pwd") {
            setPwd(value);
        }
        if (name === "u_name") {
            setName(value);
        }
    };


    const onSubmit = async (event) => {
        event.preventDefault();
        try {
          // 사용자 생성
          const userData = await authService.createUserWithEmailAndPassword(Mail, Pwd);
      
          // 프로필 사진 업로드
          const fileRef = storageService.ref().child(`${userData.user.uid}/${uuidv4()}`);
          const respons = await fileRef.putString(Gfile, "data_url");
          const fileRefUrl = await respons.ref.getDownloadURL();
      
          // 생성된 사용자 이름과 프로필 이미지 입력
          await userData.user.updateProfile({
            displayName: Name,
            photoURL: fileRefUrl,
          });
      
          // Firestore에 사용자 데이터 저장
          storeService.collection("users").doc(userData.user.uid).set({
            u_id: userData.user.uid,
            u_name: Name,
            u_mail: Mail,
            u_pwd: Pwd,
            u_profile: fileRefUrl,
            u_data: new_data,
          });
          movePage('/');
        } catch (error) {
        const fillterEmail = ['email'];
        const errmsg = Error.message;

        if (errmsg.includes('email')) {
            setError("이메일이 중복인거 같음");
        }
          console.error(error);
        }
      };

   return (
               <form className={base.content_small} onSubmit={onSubmit}>
                   <h2 className={user.title_text}> 정보 수정 </h2>

                   <label className={ ` ${user.img_content}` } htmlFor='g_img'>
                   { img == "" 
                     ?  <div className={ user.img_text_wrap }>
                           <FontAwesomeIcon className={user.profile_ico} icon={ faUserLarge } />
                           <FontAwesomeIcon className={user.plus_ico} icon={ faCirclePlus } />
                       </div>
                     : <img src={props.userObj.u_profile} className={base.img_content}  />
                   }
                       <input className={ user.img_btn } name='u_img' type="file" accept="image/*" onChange={onFileChange} />
                   </label>

                   <label className={ `${user.u_name_wrap} ${ base.input_wrap_normal }` } htmlFor='u_name'>
                       <input className={ `${user.u_name} ${ base.input_normal } ${ base.style_set_border }` } name="u_name" type="text" placeholder="이름" onChange={onChange} value={props.userObj.displayName} disabled/>
                       {Error}
                       <button type="button" className={user.update_btn }>수정</button>
                   </label>

                   <label className={ `${user.u_mail_wrap} ${ base.input_wrap_normal }` } htmlFor='u_mail'>
                       <input className={ `${user.u_mail} ${ base.input_normal } ${ base.style_set_border }` } name="u_mail" type="email" placeholder="이메일" onChange={onChange} value={Mail} />
                   </label>

                   <input type="submit" to="../joinSuccess" value={Account ? "회원 가입" : "로그인"} className={`${base.btn_style_first} ${ base.btn_size_long }`} />                    
               </form>
   )
}
export default UserInfo;