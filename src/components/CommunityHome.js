function CommunityHome () {
    return (
        <section className="community_content">
            <ul className="community_cate">
                <li className="cate_item active">
                    <a href="">전체</a>
                </li>
                <li className="cate_item">
                    <a href="">팔로워</a>
                </li>
                <li className="cate_item">
                    <a href="">정보</a>
                </li>
                <li className="cate_item">
                    <a href="">공지</a>
                </li>
            </ul>

            <div className="login_alert_box">
                <span>😉😊</span>
                <strong>로그인후 팔로우 소식 확인하기</strong>


            </div>
        </section>
    )
}

export default CommunityHome;