import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route,Routes,Link,useNavigate,Outlet } from "react-router-dom"
import { faHeart,faStar,faComment } from "@fortawesome/free-solid-svg-icons";

import StoreHome from './StoreHome';

import Product from './Product';
import Detail from './pages/StoreDetail';
// import StoreDetail from './StoreDetail';
import "firebase/firestore"; 
import TitleData from '../data/TitleData';

import '../css/StoreHome.css';

// 하나만 사용
// import ProductData from '../data/ProductData';
// 다수 사용 중괄호 일치 시켜야 함
// import { a,b } from '../data/ProductData';

function Store () {
    let [title,setTitle] = useState(TitleData);
    return (
        <section className="store_content">
            <Outlet/>
        </section>
    )
}
export default Store;