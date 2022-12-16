import React from 'react';
import '../styles/general.css';
function Header() {
    return (
        <header className="header1">
        <div className="sitelogo"  />
        <div className="brandName" ><span>GeekyGenie</span></div>
        <nav className="toolBar">
          <button className="tabBtn" type="button" onclick="location.href='/home'">Trang chủ</button>
          <button className="tabBtn" type="button">
            <div style={{WebkitTransform: 'rotate(-45deg)', MozTransform: 'rotate(-45deg)', OTransform: 'rotate(-45deg)', transform: 'rotate(-45deg)', display: 'inline-block'}}>
              ⚲
            </div> Tìm kiếm
          </button>
          <button className="tabBtn" type="button">Tài khoản</button>
        </nav>
        {/* <button id="profile" class="tabRoundBtn"><i class="fa fa-user-o"></i></button> */}
        <button id="sign-in" className="redBtn" onclick="location.href='/login'">Đăng nhập</button>
      </header>
    );
}
export default Header