import React from "react";
import { Link } from "react-router-dom";

import base from '../css/Base.module.css';
import user from '../css/User.module.css';

function UserLogin () {
    return(
        <form className={base.content_small}>
            <h2 className={user.title_text}> 로그인 </h2>
            <label className={ `${user.u_id_wrap} ${ base.input_wrap_normal }` } htmlFor='u_id'>
                <input className={ `${user.u_id} ${ base.input_normal } ${ base.style_set_border }` } name="u_id" type="text" placeholder="이메일" />
            </label>

            <label className={ `${user.u_pwd_wrap} ${ base.input_wrap_normal }` } htmlFor='u_pwd'>
                <input className={ `${user.u_pwd} ${ base.input_normal } ${ base.style_set_border }` } name="u_pwd" type="text" placeholder="비밀번호" />
            </label>

            <button className={ `${base.btn_style_first} ${ base.btn_size_long }` } type="button"> 로그인 </button>

            <Link className={`${user.link_text}`}>비밀번호를 잊어버리셨나요?</Link>

            <button className={ `${base.btn_style_first} ${ base.btn_size_long }` } type="button"> 카카오 로그인</button>

            <button className={ `${base.btn_style_first} ${ base.btn_size_long }` } type="button"> 구글 로그인</button>

            <span className={ user.join_link_wrap }>
                계정이 없으신가요?
                <Link className={`${user.link_text} ${user.login_join}`} to="/user/join">간편 회원가입</Link>
            </span>

        </form>
    )
}
export default UserLogin;