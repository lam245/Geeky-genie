import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/general.css';
function Header() {
    return (
        <header className="header1">
        <Link to="/home">
          <div className="sitelogo"  />
          <div className="brandName" >GeekyGenie</div></Link>
        <nav className="toolBar">
          <Link className="tabBtn" role="button" to="/home">Trang chủ</Link>
          <Link className="tabBtn" role="button" to="/search">
            <div style={{WebkitTransform: 'rotate(-45deg)', MozTransform: 'rotate(-45deg)', OTransform: 'rotate(-45deg)', transform: 'rotate(-45deg)', display: 'inline-block'}}>
              ⚲
            </div> Tìm kiếm
          </Link>
          <Link className="tabBtn" role="button" to="/account">Tài khoản</Link>
        </nav>
        {/* <Link id="profile" class="tabRoundBtn"><i class="fa fa-user-o"></i></Link> */}
        <Link id="sign-in" className="redBtn" role="button" to="/login">Đăng nhập</Link>
      </header>
    );
}
export default Header