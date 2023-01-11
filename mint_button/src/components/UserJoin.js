import '../css/UserJoin.css';

function UserJoin () {
    return(
        <section className="join_content">
            <div className='join_wrap'>
                <strong className="join_text join_text"> 로고 </strong>
                <form action="post">
                    <label htmlFor="u_name" >
                        <input name="u_name" type="text" placeholder="닉네임" />
                    </label>

                    <label htmlFor="u_id" >
                        <input name="u_id" type="text" placeholder="이메일" />
                    </label>

                    <label htmlFor="pwd">
                        <input name="pwd" type="password" placeholder="비밀번호" />
                    </label>

                    <label htmlFor="repwd">
                        <input name="repwd" type="password" placeholder="비밀번호 확인" />
                    </label>

                    <button className="join_btn" type="button">회원가입</button>
                </form>

            </div>
        </section>
    )
}
export default UserJoin;