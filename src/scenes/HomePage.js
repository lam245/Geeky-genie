import React from 'react';
import '../styles/HomePage.css';
import imgSrc1 from '../images/mainPage/book1.jpg'
import imgSrc2 from '../images/mainPage/book2.jpg'
import imgSrc3 from '../images/mainPage/book3.jpg'
import imgSrc4 from '../images/mainPage/book4.jpg'
import imgSrc5 from '../images/mainPage/book5.jpg'
import imgSrc6 from '../images/mainPage/book6.jpg'
import imgSrc7 from '../images/mainPage/book7.jpg'
import imgSrc8 from '../images/mainPage/book8.jpg'
import imgSrc9 from '../images/mainPage/book9.jpg'
import imgSrc10 from '../images/mainPage/book10.jpg'
import imgSrc11 from '../images/mainPage/book11.jpg'
import imgSrc12 from '../images/mainPage/book12.jpg'
import imgSrc13 from '../images/mainPage/book13.jpg'
import imgSrc14 from '../images/mainPage/book14.jpg'
import imgSrc15 from '../images/mainPage/book15.jpg'
import imgSrc16 from '../images/mainPage/book16.jpg'
import imgSrc17 from '../images/mainPage/book17.jpg'
import imgSrc18 from '../images/mainPage/book18.jpg'
import imgSrc19 from '../images/mainPage/book19.jpg'
import imgSrc20 from '../images/mainPage/book20.jpg'
import imgSrc21 from '../images/mainPage/book21.jpg'
import imgSrc22 from '../images/mainPage/book22.jpg'
import imgSrc23 from '../images/mainPage/book23.jpg'
import imgSrc24 from '../images/mainPage/book24.jpg'
import imgSrc25 from '../images/mainPage/book25.jpg'
import imgSrc26 from '../images/mainPage/book26.jpg'
import imgSrc27 from '../images/mainPage/book27.jpg'
import imgSrc28 from '../images/mainPage/book28.jpg'
function HomePage() {
  return (
    <div>
    <title>GeekyGenie</title>
    <div id="wrapper">
      <div className="search-field">
        <div className="field">
          <label className="label">Loại sách:</label>
          <select>
            <option>- Tất cả -</option>
            <option value="sach-le">Sách lẻ</option>
            <option value="sach-bo">Sách bộ</option>
          </select>
        </div>
        <div className="field">
          <label className="label">Thể loại:</label>
          <select>
            <option>- Tất cả -</option>
            <option value="phieu-luu">Phiêu lưu</option>
            <option value="co-dien">Cổ điển</option>
            <option value="toi-pham-trinh-tham">Tội phạm - Trinh thám</option>
            <option value="vien-tuong">Viễn tưởng</option>
            <option value="co-tich-truyen-thuyet">Cổ tích - Truyền thuyết</option>
            <option value="lich-su">Lịch sử</option>
            <option value="kinh-di">Kinh dị</option>
            <option value="hai-huoc">Hài hước</option>
          </select>
        </div>
        <div className="field">
          <label className="label">Tác giả:</label>
          <select>
            <option>- Tất cả -</option>
            <option value="nguyen-nhat-anh">Nguyễn Nhật Ánh</option>
            <option value="co-man">Cố Mạn</option>
            <option value="diep-lac-vo-tam">Diệp Lạc Vô Tâm</option>
          </select>
        </div>
        <div className="field">
          <label className="label">Năm:</label>
          <select>
            <option>- Tất cả -</option>
            <option value={2022}>2022</option>
            <option value={2021}>2021</option>
            <option value={2020}>2020</option>
            <option value={2019}>2019</option>
            <option value={2018}>2018</option>
            <option value={2017}>2017</option>
            <option value={2016}>2016</option>
            <option value={2015}>2015</option>
            <option value={2014}>2014</option>
            <option value={2013}>2013</option>
            <option value={2012}>2012</option>
            <option value={-2012}>Trước 2012</option>
          </select>
        </div>
      </div>
      <div className="headline">
        <h2>Sách đề cử</h2>
        <hr />
      </div>
      <ul className="products">
        <li>
          <div className="product-item">
            <div className="product-top">
              <a href className="product-thumb">
                <img src={imgSrc1} alt="" />
              </a>
            </div>
            <div className="product-info">
              <a href className="product-name">Phía Tây không có gì lạ</a>
              <a href className="product-author">Edward Berger</a>
            </div>
          </div>
        </li>
        <li>
          <div className="product-item">
            <div className="product-top">
              <a href className="product-thumb">
                <img src={imgSrc2} alt="" />
              </a>
            </div>
            <div className="product-info">
              <a href className="product-name">Gia Tộc Rồng</a>
              <a href className="product-author">Ryan Condal</a>
            </div>
          </div>
        </li>
        <li>
          <div className="product-item">
            <div className="product-top">
              <a href className="product-thumb">
                <img src={imgSrc3} alt="" />
              </a>
            </div>
            <div className="product-info">
              <a href className="product-name">Bỗng dưng trúng số</a>
              <a href className="product-author">Park Gyu-tae</a>
            </div>
          </div>
        </li>
        <li>
          <div className="product-item">
            <div className="product-top">
              <a href className="product-thumb">
                <img src={imgSrc4} alt="" />
              </a>
            </div>
            <div className="product-info">
              <a href className="product-name">Chúa tể những chiếc nhẫn</a>
              <a href className="product-author">Patrick Mckay</a>
            </div>
          </div>
        </li>
        <li>
          <div className="product-item">
            <div className="product-top">
              <a href className="product-thumb">
                <img src={imgSrc5} alt="" />
              </a>
            </div>
            <div className="product-info">
              <a href className="product-name">Nữ khổng lồ xanh: Luật sư</a>
              <a href className="product-author">Jessica Gao</a>
            </div>
          </div>
        </li>
        <li>
          <div className="product-item is-hidden-fullhd">
            <div className="product-top">
              <a href className="product-thumb">
                <img src={imgSrc6} alt="" />
              </a>
            </div>
            <div className="product-info">
              <a href className="product-name">Cười</a>
              <a href className="product-author">Parker Finn</a>
            </div>
          </div>
        </li>
        <li>
          <div className="product-item is-hidden-fullhd">
            <div className="product-top">
              <a href className="product-thumb">
                <img src={imgSrc7} alt="" />
              </a>
            </div>
            <div className="product-info">
              <a href className="product-name">Cho tôi ăn</a>
              <a href className="product-author">Richard Oakes</a>
            </div>
          </div>
        </li>
        <li>
          <div className="product-item is-hidden-fullhd">
            <div className="product-top">
              <a href className="product-thumb">
                <img src={imgSrc8} alt="" />
              </a>
            </div>
            <div className="product-info">
              <a href className="product-name">Bậc thầy bóng tối</a>
              <a href className="product-author">Pearry Reginald Teo</a>
            </div>
          </div>
        </li>
      </ul>
      <div className="headline">
        <h2>Sách lẻ mới cập nhật</h2>
        <hr />
      </div>
      <ul className="products">
        <li>
          <div className="product-item">
            <div className="product-top">
              <a href className="product-thumb">
                <img src={imgSrc9} alt="" />
              </a>
            </div>
            <div className="product-info">
              <a href className="product-name">Kế hoạch săn sói</a>
              <a href className="product-author">Kim Hong-seon</a>
            </div>
          </div>
        </li>
        <li>
          <div className="product-item">
            <div className="product-top">
              <a href className="product-thumb">
                <img src={imgSrc10} alt="" />
              </a>
            </div>
            <div className="product-info">
              <a href className="product-name">BlackAdam</a>
              <a href className="product-author">BlackAdam</a>
            </div>
          </div>
        </li>
        <li>
          <div className="product-item">
            <div className="product-top">
              <a href className="product-thumb">
                <img src={imgSrc11} alt="" />
              </a>
            </div>
            <div className="product-info">
              <a href className="product-name">Cự Đà Triệu Baht</a>
              <a href className="product-author">Leio</a>
            </div>
          </div>
        </li>
        <li>
          <div className="product-item">
            <div className="product-top">
              <a href className="product-thumb">
                <img src={imgSrc12} alt="" />
              </a>
            </div>
            <div className="product-info">
              <a href className="product-name">Chiếm quyền</a>
              <a href className="product-author">The Takeover</a>
            </div>
          </div>
        </li>
        <li>
          <div className="product-item">
            <div className="product-top">
              <a href className="product-thumb">
                <img src={imgSrc13} alt="" />
              </a>
            </div>
            <div className="product-info">
              <a href className="product-name">Nhà Có Năm Nàng Dâu</a>
              <a href className="product-author">Masato Jimbo</a>
            </div>
          </div>
        </li>
        <li>
          <div className="product-item">
            <div className="product-top">
              <a href className="product-thumb">
                <img src={imgSrc14} alt="" />
              </a>
            </div>
            <div className="product-info">
              <a href className="product-name">Thần Thám Đại Chiến</a>
              <a href className="product-author">Detective vs. Sleuths</a>
            </div>
          </div>
        </li>
        <li>
          <div className="product-item">
            <div className="product-top">
              <a href className="product-thumb">
                <img src={imgSrc15} alt="" />
              </a>
            </div>
            <div className="product-info">
              <a href className="product-name">Đoạn Băng Kinh Hoàng 99</a>
              <a href className="product-author">V/H/S/99</a>
            </div>
          </div>
        </li>
        <li>
          <div className="product-item">
            <div className="product-top">
              <a href className="product-thumb">
                <img src={imgSrc16} alt="" />
              </a>
            </div>
            <div className="product-info">
              <a href className="product-name">Gã Hề Điên Loạn 2</a>
              <a href className="product-author">Terrifier 2</a>
            </div>
          </div>
        </li>
        <li>
          <div className="product-item is-hidden-mobile is-hidden-desktop">
            <div className="product-top">
              <a href className="product-thumb">
                <img src={imgSrc17} alt="" />
              </a>
            </div>
            <div className="product-info">
              <a href className="product-name">Thỏ Gà rà kho báu</a>
              <a href className="product-author">Ben Stassen</a>
            </div>
          </div>
        </li>
        <li>
          <div className="product-item is-hidden-mobile is-hidden-tablet is-hidden-desktop">
            <div className="product-top">
              <a href className="product-thumb">
                <img src={imgSrc18} alt="" />
              </a>
            </div>
            <div className="product-info">
              <a href className="product-name">Wendell và Wild</a>
              <a href className="product-author">Wendell &amp; Wild</a>
            </div>
          </div>
        </li>
      </ul>
      <div className="headline">
        <h2>Sách bộ mới cập nhật</h2>
        <hr />
      </div>
      <ul className="products">
        <li>
          <div className="product-item">
            <div className="product-top">
              <a href className="product-thumb">
                <img src={imgSrc19} alt="" />
              </a>
            </div>
            <div className="product-info">
              <a href className="product-name">Thợ Săn Quỷ</a>
              <a href className="product-author">Chainsaw Man</a>
            </div>
          </div>
        </li>
        <li>
          <div className="product-item">
            <div className="product-top">
              <a href className="product-thumb">
                <img src={imgSrc20} alt="" />
              </a>
            </div>
            <div className="product-info">
              <a href className="product-name">Kamen Rider Black Sun</a>
              <a href className="product-author">Shōtarō Ishinomori</a>
            </div>
          </div>
        </li>
        <li>
          <div className="product-item">
            <div className="product-top">
              <a href className="product-thumb">
                <img src={imgSrc21} alt="" />
              </a>
            </div>
            <div className="product-info">
              <a href className="product-name">Lựa chọn của thái tử</a>
              <a href className="product-author">Young Royals</a>
            </div>
          </div>
        </li>
        <li>
          <div className="product-item">
            <div className="product-top">
              <a href className="product-thumb">
                <img src={imgSrc22} alt="" />
              </a>
            </div>
            <div className="product-info">
              <a href className="product-name">Thìa Vàng</a>
              <a href className="product-author">The Golden Spoon</a>
            </div>
          </div>
        </li>
        <li>
          <div className="product-item">
            <div className="product-top">
              <a href className="product-thumb">
                <img src={imgSrc23} alt="" />
              </a>
            </div>
            <div className="product-info">
              <a href className="product-name">Luật Sư 1000 Won</a>
              <a href className="product-author">One Dollar Lawyer</a>
            </div>
          </div>
        </li>
        <li>
          <div className="product-item">
            <div className="product-top">
              <a href className="product-thumb">
                <img src={imgSrc24} alt="" />
              </a>
            </div>
            <div className="product-info">
              <a href className="product-name">Hợp Đồng Tình Yêu</a>
              <a href className="product-author">Love in Contract</a>
            </div>
          </div>
        </li>
        <li>
          <div className="product-item">
            <div className="product-top">
              <a href className="product-thumb">
                <img src={imgSrc25} alt="" />
              </a>
            </div>
            <div className="product-info">
              <a href className="product-name">Reacher</a>
              <a href className="product-author">Reacher</a>
            </div>
          </div>
        </li>
        <li>
          <div className="product-item">
            <div className="product-top">
              <a href className="product-thumb">
                <img src={imgSrc26} alt="" />
              </a>
            </div>
            <div className="product-info">
              <a href className="product-name">Người sau song sắt</a>
              <a href className="product-author">Inside Man</a>
            </div>
          </div>
        </li>
        <li>
          <div className="product-item is-hidden-mobile is-hidden-desktop">
            <div className="product-top">
              <a href className="product-thumb">
                <img src={imgSrc27} alt="" />
              </a>
            </div>
            <div className="product-info">
              <a href className="product-name">Xác Sống</a>
              <a href className="product-author">The Walking Dead</a>
            </div>
          </div>
        </li>
        <li>
          <div className="product-item is-hidden-mobile is-hidden-tablet is-hidden-desktop">
            <div className="product-top">
              <a href className="product-thumb">
                <img src={imgSrc28} alt="" />
              </a>
            </div>
            <div className="product-info">
              <a href className="product-name">Truyện kinh dị Mỹ</a>
              <a href className="product-author">American Horror Story</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  );
}

export default HomePage;
