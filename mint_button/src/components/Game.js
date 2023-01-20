import '../css/Game.css';

import { Route,Routes,Link,useNavigate,Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter,faSortDown,faXmark,faHeart,faStar,faComment } from "@fortawesome/free-solid-svg-icons";

function Game () {
    return (
        <section className="game_content">
            <Outlet/>
        </section>
    )
}

export default Game;