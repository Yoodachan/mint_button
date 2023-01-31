import React from "react";

import base from '../css/Base.module.css';
import user from '../css/User.module.css';

function UserJoin () {
    return (
                <form className={base.content_small}>
                    <h2 className={user.title_text}> 간편 가입 </h2>
                    <label className={ `${user.u_name_wrap} ${ base.input_wrap_normal }` } htmlFor='u_name'>
                        <input className={ `${user.u_name} ${ base.input_normal } ${ base.style_set_border }` } name="u_name" type="text" placeholder="이름" />
                    </label>

                    <label className={ `${user.u_id_wrap} ${ base.input_wrap_normal }` } htmlFor='u_id'>
                        <input className={ `${user.u_id} ${ base.input_normal } ${ base.style_set_border }` } name="u_id" type="text" placeholder="이메일" />
                    </label>

                    <label className={ `${user.u_pwd_wrap} ${ base.input_wrap_normal }` } htmlFor='u_pwd'>
                        <input className={ `${user.u_pwd} ${ base.input_normal } ${ base.style_set_border }` } name="u_pwd" type="text" placeholder="비밀번호" />
                    </label>

                    <label className={ `${user.u_repwd_wrap} ${ base.input_wrap_normal }` } htmlFor='u_repwd'>
                        <input className={ `${user.u_repwd} ${ base.input_normal } ${ base.style_set_border }` } name="u_repwd" type="text" placeholder="비밀번호 확인" />
                    </label>
                    <button className={ `${base.btn_style_first} ${ base.btn_size_long }` } type="button">회원가입</button>
                </form>
    )
}
export default UserJoin;