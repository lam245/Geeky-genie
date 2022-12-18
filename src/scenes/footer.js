import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/general.css';
import imgTele from '../images/telegram.png'
import imgFB from '../images/fb.png'
import imgMail from '../images/mail.png'
import { FacebookShareButton, TwitterShareButton, TelegramShareButton } from "react-share";
import { FacebookIcon, TwitterIcon, TelegramIcon } from "react-share";
function Footer() {
    return (
        <footer>
        <div>Tại sao thư viện sách <Link to="/">GeekyGenie</Link> nên là sự lựa chọn của bạn?</div>
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
        <FacebookShareButton
        url={"http://localhost:3000/home"}
        quote={""}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="circle-share-btn"
      >
        <FacebookIcon size={33} round /> Facebook
      </FacebookShareButton>
  
      <TwitterShareButton
        title={"test"}
        url={"http://localhost:3000/home"}
        hashtags={["hashtag1", "hashtag2"]}
        className="circle-share-btn"
      >
        <TwitterIcon size={33} round />
        Twitter
        </TwitterShareButton>

        <TelegramShareButton
        title={"test"}
        url={"http://localhost:3000/home"}
        hashtags={["hashtag1", "hashtag2"]}
        className="circle-share-btn"
      >
        <TelegramIcon size={33} round />
        Telegram
        </TelegramShareButton>
        
        
      </footer>
    );
    
}
export default Footer;