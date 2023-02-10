import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link} from "react-router-dom"
import { faHeart,faStar,faComment } from "@fortawesome/free-solid-svg-icons";
// import {db} from '../index';


import base from '../css/Base.module.css';
import store from '../css/Store.module.css';

function StoreItem (props) {
    // let navigate = useNavigate();
    return (
        // <Link onClick={ () => { navigate('/detail')} } className="product" >
        <Link to={'/store/view/'+props.Stores.s_id} className={store.product} >
        <div className={`${store.product_cate} ${store.cate_hot}`}> 인기 </div>

        <img className={store.product_img} src={props.Stores.s_img}/>

        <div className={store.product_info_wrap}>
            <strong className={store.product_name}> { props.Stores.s_name } </strong>

            <div className={store.product_text_box}>

                <span className={store.product_score_wrap}>
                    <FontAwesomeIcon icon={ faStar } />
                    <span className={store.product_score}>
                        { props.Stores.s_score }
                    </span>
                    /5.0
                </span>

                <span className={store.product_like_wrap}>
                    <FontAwesomeIcon icon={ faHeart } />
                    <span className={store.product_like}>
                        { props.Stores.s_like }
                    </span>
                </span>

                <span className={store.product_review_wrap}>
                    <FontAwesomeIcon icon={ faComment } />
                    <span className={store.product_review}>
                         { props.Stores.s_review }  
                    </span>
                </span>

                <span className={store.product_tag_wrap}>
                    <span className={`${store.product_tag} ${store.sandbox}`}>
                         { props.Stores.s_cate } 
                    </span>
                </span>

            </div>

            <div className={store.product_price_wrap}>
                <span className={store.product_price_rate}>{ props.Stores.s_price_rate }%</span>
                <strong className={store.product_price_sale}>{ props.Stores.s_price_sale }원</strong>
                <span className={store.product_price_cost}>{ props.Stores.s_price_cost }원</span>
            </div>
        </div>
        </Link>


    )
}


export default StoreItem;