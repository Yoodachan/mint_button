import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'react-datepicker/dist/react-datepicker.css';
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useState } from 'react';


import base from '../css/Base.module.css';
import main from '../css/Main.module.css';

function Main () {

    return (
        <section className={ base.content }>
            <div className={ main.banner }> 
                     <p className={ main.banner_text_wrap }>
                        <strong> 내가 좋아할만한 게임은? </strong>
                        <button type="button" > 테스트 후 결과 조회하기 
                            <FontAwesomeIcon icon={ faCircleArrowRight } /> 
                        </button>
                    </p>
                    <img src='../image/banner_img.png'/>
            </div>


        </section>
    )


}



export default Main;