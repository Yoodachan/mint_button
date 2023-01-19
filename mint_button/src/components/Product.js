import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route,Routes,Link,useNavigate,Outlet } from "react-router-dom"
import { faHeart,faStar,faComment } from "@fortawesome/free-solid-svg-icons";
import {db} from '../index';

function Product (props) {
    let navigate = useNavigate();
    return (
        // <Link onClick={ () => { navigate("detail"); console.log("ddd")} } className="product" >
        <Link to="/detail" className="product" >
            <div className="product_cate cate_hot"> 인기 </div>

            <img className="product_img" src="https://kroms.org/wp-content/uploads/2020/03/Animal-Crossing-New-Horizons.jpg" />

            <div className="product_info_wrap">
                <strong className="product_name"> { props.title.t_name } </strong>

                <div className="product_text_box">

                    <span className="product_score_wrap">
                        <FontAwesomeIcon icon={ faStar } />
                        <span className="product_score">
                            { props.title.t_score }
                        </span>
                        /5.0
                    </span>


                    <span className="product_like_wrap">
                        <FontAwesomeIcon icon={ faHeart } />
                        <span className="product_like">
                            { props.title.t_like }
                        </span>
                    </span>

                    <span className="product_review_wrap">
                        <FontAwesomeIcon icon={ faComment } />
                        <span className="product_review">
                             { props.title.t_review }  
                        </span>
                    </span>

                    <span className="product_tag_wrap">
                        <span className="product_tag sandbox">
                             { props.title.t_cate } 
                        </span>
                    </span>

                </div>

                <div className='product_price_wrap'>
                    <span className='product_price_rate'>{ props.title.t_price_rate }%</span>
                    <strong className='product_price_sale'>{ props.title.t_price_sale }원</strong>
                    <span className='product_price_cost'>{ props.title.t_price_cost }원</span>
                </div>
            </div>
        </Link>


    )
}


export default Product;