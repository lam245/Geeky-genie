import React from 'react';
import '../styles/general.css';
import imgTele from '../images/telegram.png'
import imgFB from '../images/fb.png'
import imgMail from '../images/mail.png'
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
        <a className="circleBtn" title="Telegram channel" ><img src={imgTele} /></a>
        <a className="circleBtn" title="Facebook page" ><img src={imgFB} /></a>
        <a className="circleBtn" title="Liên hệ email" ><img src={imgMail} /></a>
      </footer>
    );
    
}
export default Footer;