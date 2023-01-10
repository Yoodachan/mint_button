import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faUser } from "@fortawesome/free-solid-svg-icons";
import HeaderUser from './HeaderUser';
import '../css/Header.css';
import '../css/Header_User_Menu.css';

function Header () {


        // let user_menu = () => {

        //   if (render_user.classList.contains('render_user_off')) {
        //     render_user.classList.remove('render_user_off');
        //     render_user.classList.add('render_user_on')
        //   }
        //   // else {
        //   //   render_user.classList.remove('render_user_on');
        //   //   render_user.classList.add('render_user_off');
        //   // }

          
        // }
        // let [ HeaderUser, SetHeaderUser ] = useState('회원가입');

        return (
            <header>

              <nav>
                <div className="nav_content">
                  <h1 id="logo">
                      <Link to="/">todoP</Link>
                  </h1>
                  <ul id="nav_list">
                    <li id='menu_user'> 
                      <button type="button">
                        <FontAwesomeIcon icon={ faUser }/> 
                      </button> 
                    </li>
                    <li id='menu_list'> <button type="button"><FontAwesomeIcon icon={ faBars }/> </button> </li>
                  </ul>

                </div>
              </nav>
              <HeaderUser />
          </header>
          
        )
}

export default Header;
