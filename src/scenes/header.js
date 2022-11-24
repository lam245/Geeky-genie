import React from 'react';
import '../styles/general.css';
function Header() {
    return (
        <header>
        <div className="sitelogo"  />
        <div className="brandName" ><span>GeekyGenie</span></div>
        <nav className="toolBar">
          <button className="tabBtn"  type="button">
            <div style={{WebkitTransform: 'rotate(-45deg)', MozTransform: 'rotate(-45deg)', OTransform: 'rotate(-45deg)', transform: 'rotate(-45deg)', display: 'inline-block'}}>
              ⚲
            </div> Tìm kiếm
          </button>
          <button className="tabBtn"  type="button">Sách hot</button>
          <button className="tabBtn"  type="button">Sách lẻ</button>
          <button className="tabBtn"  type="button">Sách bộ</button>
          <button className="tabBtn"  type="button">Sách mới</button>
          <button className="tabBtn"  type="button">Bộ sưu tập</button>
        </nav>
        {/* <button id="profile" class="tabRoundBtn"><i class="fa fa-user-o"></i></button> */}
        <button id="sign-in" className="redBtn" onclick="location.href='./login.html'">Đăng nhập</button>
      </header>
        );
}
export default Header