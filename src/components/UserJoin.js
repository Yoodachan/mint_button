import React, { useState,useEffect,useId } from "react";
// import { auth } from "../Firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link,useNavigate } from "react-router-dom";
import base from '../css/Base.module.css';
import user from '../css/User.module.css';

import { authService } from '../Mybase';
// import { collection, Firestore, getDocs, addDoc, getCountFromServer } from 'firebase/firestore';
import { getValue } from "@testing-library/user-event/dist/utils";

function UserJoin () {
    // const auth = Mybase.auth();
    // 유저 정보 저장
    // const [Name,setName] = useState("");
    const [Mail, setMail] = useState("");
    const [Pwd, setPwd] = useState("");
    const [Error, setError] = useState("");

    const [Account,setAccount] = useState(true);

    const movePage = useNavigate();

    const onChange = ( event ) => { 
        const { target: { name, value }} = event;

        // if (name === "u_name") {
        //     setName(value);
        //     console.log (value)
        // } 
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
                    Mail,Pwd
                );
                movePage('/user/joinSuccess')
            }
            // else {
            //     data = await authService.createUserWithEmailAndPassword(
            //         Mail,Pwd
            //     )
            // }

            console.log ("dd", data )

        }
        catch ( Error ) {
            const fillterEmail = ['email'];
            const errmsg = Error.message;

            if (errmsg.includes('email')) {
                setError("이메일이 중복인거 같음");
            }
            // else {
            //     setError("올바른 아이디임")
            // }
        }
    }
    // 유저 추가 및 삭제
    // const [user,setUser] = useState([]);

    // console.log (newName,newMail)
    // // 유저 정보 DB
    // const userCollectionRef = collection (db, "user");

    return (
                <form className={base.content_small} onSubmit={onSubmit}>
                    <h2 className={user.title_text}> 간편 가입 </h2>
                    <label className={ `${user.u_name_wrap} ${ base.input_wrap_normal }` } htmlFor='u_name'>
                        <input className={ `${user.u_name} ${ base.input_normal } ${ base.style_set_border }` } name="u_name" type="text" placeholder="이름" onChange={onChange} />
                        {Error}
                    </label>

                    <label className={ `${user.u_mail_wrap} ${ base.input_wrap_normal }` } htmlFor='u_mail'>
                        <input className={ `${user.u_mail} ${ base.input_normal } ${ base.style_set_border }` } name="u_mail" type="email" placeholder="이메일" onChange={onChange} value={Mail} />
                    </label>

                    <label className={ `${user.u_pwd_wrap} ${ base.input_wrap_normal }` } htmlFor='u_pwd'>
                        <input className={ `${user.u_pwd} ${ base.input_normal } ${ base.style_set_border }` } name="u_pwd" type="password" placeholder="비밀번호" onChange={onChange} value={Pwd} />
                    </label>

                    <label className={ `${user.u_repwd_wrap} ${ base.input_wrap_normal }` } htmlFor='u_repwd'>
                        <input className={ `${user.u_repwd} ${ base.input_normal } ${ base.style_set_border }` } name="u_repwd" type="password" placeholder="비밀번호 확인" onChange={onChange}  />
                    </label>
                    <input type="submit" to="../joinSuccess" value={Account ? "회원 가입" : "d로그인"} className={`${base.btn_style_first} ${ base.btn_size_long }`} />
                    {/* <Link to="../joinSuccess" className={ `${base.btn_style_first} ${ base.btn_size_long }` } >회원가입</Link> */}
                    
                </form>
    )
}
export default UserJoin;