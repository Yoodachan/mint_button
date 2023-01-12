import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";

import '../css/HeaderUser.css';

function HeaderUser () {
    let [ a, b ] = useState('회원가입');
    return (
    <ul id="render_user" className='render_user_on'>
        {/* 회원가입/내정보 */}

        <li>
            <Link to="/user_join">{ a }</Link>
        </li>

        <li>
            <Link to="/user_login"> 로그인 </Link>
        </li>

    </ul>
    )
}

export default HeaderUser;