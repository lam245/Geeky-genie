import React from 'react';
import '../styles/search.css'
import SearchIcon from '@mui/icons-material/Search';
function Search() {
    return (
        <div>
        
        
        <title>Tìm kiếm sách</title>
        
        <div id="wrapper">
          <div className="search-field">
            <input type="text" className="input is-medium" placeholder="Nhập tên phim..." defaultValue />
            <div className="icon-margin">
              <SearchIcon sx={{ fontSize: 40 }} />
              </div>
          </div>

          <ul className="products">
            <li>
              <div className="product-item">
                <div className="product-top">
                  <a href className="product-thumb">
                    <img src="../images/search/book1.jpg" alt="" />
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
                    <img src="../images/search/book2.jpg" alt="" />
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
                    <img src="../images/search/book3.jpg" alt="" />
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
                    <img src="../images/search/book4.jpg" alt="" />
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
                    <img src="../images/search/book5.jpg" alt="" />
                  </a>
                </div>
                <div className="product-info">
                  <a href className="product-name">Nữ khổng lồ xanh: Luật sư</a>
                  <a href className="product-author">Jessica Gao</a>
                </div>
              </div>
            </li>
            <li>
              <div className="product-item">
                <div className="product-top">
                  <a href className="product-thumb">
                    <img src="../images/search/book6.jpg" alt="" />
                  </a>
                </div>
                <div className="product-info">
                  <a href className="product-name">Cười</a>
                  <a href className="product-author">Parker Finn</a>
                </div>
              </div>
            </li>
            <li>
              <div className="product-item">
                <div className="product-top">
                  <a href className="product-thumb">
                    <img src="../images/search/book7.jpg" alt="" />
                  </a>
                </div>
                <div className="product-info">
                  <a href className="product-name">Cho tôi ăn</a>
                  <a href className="product-author">Richard Oakes</a>
                </div>
              </div>
            </li>
            <li>
              <div className="product-item">
                <div className="product-top">
                  <a href className="product-thumb">
                    <img src="../images/search/book8.jpg" alt="" />
                  </a>
                </div>
                <div className="product-info">
                  <a href className="product-name">Bậc thầy bóng tối</a>
                  <a href className="product-author">Pearry Reginald Teo</a>
                </div>
              </div>
            </li>
            <li>
              <div className="product-item">
                <div className="product-top">
                  <a href className="product-thumb">
                    <img src="../images/search/book9.jpg" alt="" />
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
                    <img src="../images/search/book10.jpg" alt="" />
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
                    <img src="../images/search/book11.jpg" alt="" />
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
                    <img src="../images/search/book12.jpg" alt="" />
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
                    <img src="../images/search/book13.jpg" alt="" />
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
                    <img src="../images/search/book14.jpg" alt="" />
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
                    <img src="../images/search/book15.jpg" alt="" />
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
                    <img src="../images/search/book16.jpg" alt="" />
                  </a>
                </div>
                <div className="product-info">
                  <a href className="product-name">Gã Hề Điên Loạn 2</a>
                  <a href className="product-author">Terrifier 2</a>
                </div>
              </div>
            </li>
            <li>
              <div className="product-item">
                <div className="product-top">
                  <a href className="product-thumb">
                    <img src="../images/search/book17.jpg" alt="" />
                  </a>
                </div>
                <div className="product-info">
                  <a href className="product-name">Thỏ Gà rà kho báu</a>
                  <a href className="product-author">Ben Stassen</a>
                </div>
              </div>
            </li>
            <li>
              <div className="product-item">
                <div className="product-top">
                  <a href className="product-thumb">
                    <img src="../images/search/book18.jpg" alt="" />
                  </a>
                </div>
                <div className="product-info">
                  <a href className="product-name">Wendell và Wild</a>
                  <a href className="product-author">Wendell &amp; Wild</a>
                </div>
              </div>
            </li>
            <li>
              <div className="product-item">
                <div className="product-top">
                  <a href className="product-thumb">
                    <img src="../images/search/book19.jpg" alt="" />
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
                    <img src="../images/search/book20.jpg" alt="" />
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
                    <img src="../images/search/book21.jpg" alt="" />
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
                    <img src="../images/search/book22.jpg" alt="" />
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
                    <img src="../images/search/book23.jpg" alt="" />
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
                    <img src="../images/search/book24.jpg" alt="" />
                  </a>
                </div>
                <div className="product-info">
                  <a href className="product-name">Hợp Đồng Tình Yêu</a>
                  <a href className="product-author">Love in Contract</a>
                </div>
              </div>
            </li>
            <li>
              <div className="product-item is-hidden-desktop">
                <div className="product-top">
                  <a href className="product-thumb">
                    <img src="../images/search/book25.jpg" alt="" />
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
                    <img src="../images/search/book26.jpg" alt="" />
                  </a>
                </div>
                <div className="product-info">
                  <a href className="product-name">Người sau song sắt</a>
                  <a href className="product-author">Inside Man</a>
                </div>
              </div>
            </li>
            <li>
              <div className="product-item">
                <div className="product-top">
                  <a href className="product-thumb">
                    <img src="../images/search/book27.jpg" alt="" />
                  </a>
                </div>
                <div className="product-info">
                  <a href className="product-name">Xác Sống</a>
                  <a href className="product-author">The Walking Dead</a>
                </div>
              </div>
            </li>
            <li>
              <div className="product-item">
                <div className="product-top">
                  <a href className="product-thumb">
                    <img src="../images/search/book28.jpg" alt="" />
                  </a>
                </div>
                <div className="product-info">
                  <a href className="product-name">Truyện kinh dị Mỹ</a>
                  <a href className="product-author">American Horror Story</a>
                </div>
              </div>
            </li>
            <li>
              <div className="product-item">
                <div className="product-top">
                  <a href className="product-thumb">
                    <img src="../images/search/book29.jpg" alt="" />
                  </a>
                </div>
                <div className="product-info">
                  <a href className="product-name">Sao Hỏa Tìm Mẹ</a>
                  <a href className="product-author">Simon Wells</a>
                </div>
              </div>
            </li>
            <li>
              <div className="product-item is-hidden-desktop">
                <div className="product-top">
                  <a href className="product-thumb">
                    <img src="../images/search/book30.jpg" alt="" />
                  </a>
                </div>
                <div className="product-info">
                  <a href className="product-name">Tòa Án Kiếp Sau</a>
                  <a href className="product-author">Albert Brooks</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>     
 );
}
export default Search