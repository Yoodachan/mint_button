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
                  <li className="footer_logo"><a href="./index.html"><strong className="footer_logo">MTBT</strong></a></li>
                </ul>
    
                <ul className="footer_address">
                  <li>㈜ MINT BUTTON </li>
                  <li>사업자등록번호 : 000-00-00000</li>
                  <li>포토폴리오용으로 제작된 사이트입니다.</li>
                  <li>COPYRIGHT(C) 2022 ㈜ MINT BUTTON . CO.LTD ALL RIGHT RESERVED.</li>
                </ul>
              </li>
    
            </ul>
    
          </div>
        </footer>
    )
}


export default Footer ;