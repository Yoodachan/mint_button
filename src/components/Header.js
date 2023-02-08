import React,{useState,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faUser,faMagnifyingGlass,faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink,Link } from "react-router-dom";
import HeaderUser from './HeaderUser';
import { authService } from 'Mybase';

import base from '../css/Base.module.css';
import header from '../css/Header.module.css';

// 콜백함수

// // 1. 세개 넣어놨으니 콘솔 세번 찍힘
// [1,2,3].map(function(){
//   console.log(1);
// 

// // 2. 펑션 파라미터 콘솔찍으면 대괄호 속 내용물 다 찍힘
// [1,2,3].map(function(a){
//   console.log(a);
// })

// // 3. 안에 든 내용물을 바꿔서 대괄호 속 갯수만큼 넣어둠
// [1,2,3].map(function(){
//   return '111'
// })


function Header (props) {
  const [UserMenu, setUserMenu] = useState(false);
  return (
    <header>
          <div className={ `${ header.content_style }` }>
            <h1 className={ header.logo }>
                <Link to="/" className={ header.logo_content }>MTBT</Link>
            </h1>
            <ul className={ header.nav_menu }>
              <li className={ header.menu_item }> <NavLink className={ header.menu_link } to="/game/home"> 타이틀 </NavLink> </li>
              <li className={ header.menu_item }> <NavLink className={ header.menu_link } to="/community_home"> 커뮤니티 </NavLink> </li>
              <li className={ header.menu_item }> <NavLink className={ header.menu_link } to="/store/home"> 스토어 </NavLink> </li>
              <li className={ header.menu_item }> <NavLink className={ header.menu_link } to="/user_join"> 문의하기 </NavLink> </li>
            </ul>

            <ul className={ header.content_right_wrap } >
              <li className={` ${ header.seach_bar } ${ header.content_item } `}> 
                <label htmlFor="search" className={ header.seach_wrap }>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                  <input type="text" name="search" className={ header.search } /> 
                </label>
              </li>

              <li className={ ` ${ header.content_item } ` }>
                <button className={ header.user_btn } type="button" onClick={ () => { 
                  setUserMenu(!UserMenu);
                   } } >
                  { props.isLoggedIn ? <FontAwesomeIcon icon={ faCircleUser } /> : <FontAwesomeIcon icon={ faUser }/> }
                </button> 
              </li>

              <li className={`${ header.content_item }`}> 
                <button className={ header.list_btn } type="button">
                  <FontAwesomeIcon icon={ faBars }/> 
                </button> 
              </li>

            </ul>
            { UserMenu == true ? <HeaderUser isLoggedIn={props.isLoggedIn} />  : null }
          </div>
    </header>
  )
}




export default Header;
