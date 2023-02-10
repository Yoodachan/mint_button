import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import base from '../css/Base.module.css';
import user from '../css/User.module.css';
import { authService, firebaseInstance } from "Mybase";

function UserLogin () {
    const movePage = useNavigate();
    const snsLogin = async (event) => {
        const {target:{name}} = event;
        let provider;
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        }
        const data = await authService.signInWithPopup(provider);
        movePage('/')
    };
    return(
        <form className={base.content_small}>
            <h2 className={user.title_text}> 로그인 </h2>
            <label className={ `${user.u_id_wrap} ${ base.input_wrap_normal }` } htmlFor='u_id'>
                <input className={ `${user.u_id} ${ base.input_normal } ${ base.style_set_border }` } name="u_id" type="text" placeholder="이메일" />
            </label>

            <label className={ `${user.u_pwd_wrap} ${ base.input_wrap_normal }` } htmlFor='u_pwd'>
                <input className={ `${user.u_pwd} ${ base.input_normal } ${ base.style_set_border }` } name="u_pwd" type="password" placeholder="비밀번호" />
            </label>

            <button className={ `${base.btn_style_first} ${ base.btn_size_long }` } type="button"> 로그인 </button>

            <div className={ user.line_wrap }>
                <Link className={`${user.link_text}`}>비밀번호를 잊어버리셨나요?</Link>
            </div>

            <div className={ user.line_wrap }>
                <span className={ user.login_line } />
                <p className={user.login_line_text}> SNS 로그인 </p>
                <span className={ user.login_line } />
            </div>

            {/* <div className={ user.line_wrap }>
                <button className={ `${base.btn_circle} ${ base.btn_style_goggle }` } type="button">
                    <img className={ base.ico_goggle }src='../image/sns_goggle.png' />
                </button>

                <button className={ `${base.btn_circle} ${ base.btn_style_kakao }` } type="button">
                    <img className={ base.ico_kakao }src='../image/sns_kakao.png' />
                </button>
            </div> */}

            <button className={ `${base.btn_style_goggle} ${ base.btn_size_long }` } name="google" type="button" onClick={ snsLogin }> 
                <div className={ base.ico_wrap}>
                    <FontAwesomeIcon icon={ faGooglePlusG } className={ base.ico_goggle }/>
                </div>
            <span className={ base.sns_text }>구글 로그인 </span>
            </button>

            <div className={ user.line_wrap }>
                계정이 없으신가요?
                <Link className={`${user.link_text} ${user.login_join}`} to="/user/join">간편 회원가입</Link>
            </div>

        </form>
    )
}
export default UserLogin;