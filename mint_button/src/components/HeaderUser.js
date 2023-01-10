import React from "react";
import { useState } from 'react';
const menu_user = document.getElementById('menu_user');
let render_user = document.getElementById('render_user');
const menu_list = document.getElementById('menu_list');

function HeaderUser () {
    let [ a, b ] = useState('회원가입');
    return (
    <ul id="render_user" className='render_user_on'>
        {/* 회원가입/내정보 */}
        <li><a href="#"> { a } </a></li>
        <li><a href="#">로그인</a></li>
    </ul>
    )
}

export default HeaderUser;