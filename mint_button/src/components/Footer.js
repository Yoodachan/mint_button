import '../css/Footer.css';

function Footer () {
    return (
        <footer id="footer">
          <div className="footer_menu_wrap">
            
            <ul className="footer_menu_box">
              <li><a href="#">이용약관</a></li>
              <li><a href="#">개인정보 처리방침</a></li>
            </ul>
    
          </div>
    
          <div className="footer_wrap">
    
            <ul className="footer_content">
    
              <li className="footer_left">
                <ul className="footer_logo_sns">
                  <li className="footer_logo"><a href="./index.html"><strong className="footer_logo">MINT BUTTON</strong></a></li>
                  <li className="footer_icon">
                    <ul>
                      <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                    </ul>
                  </li>
                </ul>
    
                <ul className="footer_address">
                  <li>㈜ MINT BUTTON </li>
                  <li>사업자등록번호 : 000-00-00000</li>
                  <li>포토폴리오용으로 제작된 사이트입니다.</li>
                  <li>COPYRIGHT(C) 2022 ㈜ MINT BUTTON . CO.LTD ALL RIGHT RESERVED.</li>
                </ul>
              </li>
    
    
              <ul className="footer_right">
                <li>
                  <strong>브랜드</strong>
                  <ul>
                    <li><a href="#">샐러디</a></li>
                    <li><a href="#">샐러디 키친</a></li>
                    <li><a href="#">샐러디 팜</a></li>
                  </ul>
                </li>
                <li>
                  <strong>메뉴</strong>
                  <ul>
                    <li><a href="#">웜볼</a></li>
                    <li><a href="#">샐러디</a></li>
                    <li><a href="#">샌드&랩</a></li>
                    <li><a href="#">토핑&드레싱</a></li>
                    <li><a href="#">음료&사이드</a></li>
                  </ul>
                </li>
                <li>
                  <strong>가맹점</strong>
                  <ul>
                    <li><a href="#">가맹 안내</a></li>
                    <li><a href="#">가맹 신청</a></li>
                  </ul>
                </li>
                <li>
                  <strong>주문</strong>
                  <ul>
                    <li><a href="#">매장 주문</a></li>
                  </ul>
                </li>
                <li>
                  <strong>새소식</strong>
                  <ul>
                    <li><a href="#">공지사항</a></li>
                    <li><a href="#">이벤트</a></li>
                  </ul>
                </li>
              </ul>
    
            </ul>
    
          </div>
        </footer>
    )
}


export default Footer ;