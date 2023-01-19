import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faUser,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
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
                <Link to="/">LOGO</Link>
            </h1>

            <ul id="nav_menu">
              <li className="menu_item active"> <Link to="/game"> 타이틀 </Link> </li>
              <li className="menu_item"> <Link to="/community_home"> 커뮤니티 </Link> </li>
              <li className="menu_item"> <Link to="/store"> 스토어 </Link> </li>
              <li className="menu_item"> <Link to="/user_join"> 문의하기 </Link> </li>
            </ul>


            <ul id="nav_right">
              <li id="seach_bar"> 
                <label htmlFor="seach">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                  <input type="text" name="seach" /> 
                </label>
              </li>

              <li id='menu_user'>

                <button className="user_btn" type="button" onClick={ () => { setUserMenu(!UserMenu) } } >
                  <FontAwesomeIcon icon={ faUser }/> 
                </button> 
              </li>

              <li id='hidden_menu'> 
                <button className="hidden_btn" type="button">
                  <FontAwesomeIcon icon={ faBars }/> 
                </button> 
              </li>

            </ul>

          </div>
          {
          UserMenu == true ? <HeaderUser />  : null
          }
        </nav>
    </header>
    
  )
}

export default Header;
