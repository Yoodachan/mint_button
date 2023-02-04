import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";

import base from '../css/Base.module.css';
import header from '../css/Header.module.css';

function HeaderUser (props) {
    const [menuItem,setMenuItem] = useState("");

// props.isLoggedInUser
  
    return (
        
    <ul className={ `${header.render_user} ${header.render_user_on}` }>
        {/* 회원가입/내정보 */}
  
        <li className={ header.render_item } >
         {props.isLoggedInUser == true ? <Link to="user/info"> 회원정보 </Link> : <Link to="user/join"> 회원가입 </Link> }
          {/* { menuItem == "회원정보" ? <Link to="user/info"> 회원정보 </Link> : <Link to="user/join"> 회원가입 </Link> } */}
        </li>
  
        <li className={ header.render_item } >
        {props.isLoggedInUser == true ? <Link to="user/info"> 로그아웃 </Link> : <Link to="user/login"> 로그인 </Link> }
        </li>
  
    </ul>
    )
  }
  

export default HeaderUser;