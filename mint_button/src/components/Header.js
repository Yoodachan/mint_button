import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faUser } from "@fortawesome/free-solid-svg-icons";
import HeaderUser from './HeaderUser';
import '../css/Header.css';

// 콜백함수

// // 1. 세개 넣어놨으니 콘솔 세번 찍힘
// [1,2,3].map(function(){
//   console.log(1);
// })

// // 2. 펑션 파라미터 콘솔찍으면 대괄호 속 내용물 다 찍힘
// [1,2,3].map(function(a){
//   console.log(a);
// })

// // 3. 안에 든 내용물을 바꿔서 대괄호 속 갯수만큼 넣어둠
// [1,2,3].map(function(){
//   return '111'
// })


function Header () {
  let [ UserMenu, setUserMenu ] = useState(false)

  return (
      <header>

        <nav>
          <div className="nav_content">
            <h1 id="logo">
                <Link to="/">todoP</Link>
            </h1>
            <ul id="nav_list">
              <li id='menu_user'> 
                <button type="button" onClick={ () => { setUserMenu(!UserMenu) } } >
                  <FontAwesomeIcon icon={ faUser }/> 
                </button> 
              </li>
              <li id='menu_list'> <button type="button"><FontAwesomeIcon icon={ faBars }/> </button> </li>
            </ul>

          </div>
        </nav>
        {
          UserMenu == true ? <HeaderUser />  : null
        }
    </header>
    
  )
}

export default Header;
