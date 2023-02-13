import { authService } from "Mybase";
import React from "react";
import { useState } from 'react';
import { Link,useNavigate } from "react-router-dom";

import base from '../css/Base.module.css';
import header from '../css/Header.module.css';

function HeaderUser (props) {
  const offMenu = useState(props.userMenu); 
  const setOffMenu = useState(props.setUserMenu); 
  
    const movePage = useNavigate();
    const UserLogOut = () => {
      authService.signOut().then(()=>{
        setOffMenu(!offMenu);
        movePage('/')
      });
    } ;

    
  
    return (
        
    <ul className={ `${header.render_user} ${header.render_user_on}` }>
        {/* 회원가입/내정보 */}
  
        <li className={ header.render_item } >
         { props.isLoggedIn == true 
         ? <Link to="user/info" onClick={ ()=>{setOffMenu(!offMenu)} } > 회원정보 </Link> 
         : <Link to="user/join" onClick={ ()=>{setOffMenu(!offMenu)} } > 회원가입 </Link> 
         }
        </li>
  
        <li className={ header.render_item } >
        { props.isLoggedIn == true 
        ? <button type="button" onClick={UserLogOut}> 로그아웃 </button> 
        : <Link to="user/login" onClick={ ()=>{setOffMenu(!offMenu)} } > 로그인 </Link> 
        }
        </li>
  
    </ul>
    )
  }
  

export default HeaderUser;