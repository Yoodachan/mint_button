import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";

import base from '../css/Base.module.css';
import header from '../css/Header.module.css';

function HeaderUser () {
    let [ a, b ] = useState('회원가입');
    return (
    <ul className={ `${header.render_user} ${header.render_user_on}` }>
        {/* 회원가입/내정보 */}

        <li className={ header.render_item } >
            <Link to="user/join">{ a }</Link>
        </li>

        <li className={ header.render_item } >
            <Link to="user/login"> 로그인 </Link>
        </li>

    </ul>
    )
}

export default HeaderUser;