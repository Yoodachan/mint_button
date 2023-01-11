import { Link } from "react-router-dom";
import '../css/UserLogin.css';

function UserLogin () {
    return(
        <section className="login_content">
            <div className='login_wrap'>
                <strong className="login_text logo_text"> 로고 </strong>
                <form action="post">
                    <label>
                        <input name="u_id" type="text" placeholder="이메일" />
                    </label>
                    <label>
                        <input name="pwd" type="password" placeholder="비밀번호" />
                    </label>
                    <button className="login_btn" type="button">로그인</button>

                    <a className="link_text login_find" href="#">비밀번호를 잊어버리셨나요?</a>

                    <div className='line_wrap'>
                        <div className='login_line line_left'></div>
                        <span className="login_line_text"> 또는 </span>
                        <div className='login_line line_right'></div>
                    </div>
                    <button className="kakao_btn" type="button">카카오 로그인</button>
                </form>
                <span className="join_link_wrap">
                    계정이 없으신가요?
                    <Link className="link_text login_join" to="/User_join">간편 회원가입</Link>
                </span>

            </div>
        </section>
    )
}
export default UserLogin;