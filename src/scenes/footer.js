import React from 'react';
import '../styles/general.css';
import imgTele from '../images/telegram.png'
import imgFB from '../images/fb.png'
import imgMail from '../images/mail.png'
import { FacebookShareButton, TwitterShareButton, TelegramShareButton } from "react-share";
import { FacebookIcon, TwitterIcon, TelegramIcon } from "react-share";
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
        <FacebookShareButton
        url={"http://localhost:3000/home"}
        quote={""}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={32} round /> Facebook
      </FacebookShareButton>
      <br />
      <TwitterShareButton
        title={"test"}
        url={"http://localhost:3000/home"}
        hashtags={["hashtag1", "hashtag2"]}
      >
        <TwitterIcon size={32} round />
        Twitter
        </TwitterShareButton>

        <TelegramShareButton
        title={"test"}
        url={"http://localhost:3000/home"}
        hashtags={["hashtag1", "hashtag2"]}
      >
        <TelegramIcon size={32} round />
        Telegram
        </TelegramShareButton>
        
        
      </footer>
    );
    
}
export default Footer;