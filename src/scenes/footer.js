import React from 'react';
import '../styles/general.css'
function Footer() {
    return (
        <footer>
        
        <ul>
          <li>
            Thư viện cung cấp những tiện ích hoàn toàn miễn phí.
          </li>
          <li>
            Thư viện bao gồm nhiều sách hay được tuyển chọn kỹ càng.
          </li>
          <li>
            Phù hợp với nhiều thiết bị khác nhau.
          </li>
          <li>
            Cho phép bình luận và đánh giá, nâng cao trải nhiệm của bạn.
          </li>
        </ul>
        <a className="circleBtn" title="Telegram channel" ><img src=" ../images/telegram.png" /></a>
        <a className="circleBtn" title="Facebook page" ><img src="../images/fb.png" /></a>
        <a className="circleBtn" title="Liên hệ email" ><img src="../images/mail.png" /></a>
      </footer>
    );
    
}
export default Footer;