import 'font-awesome/css/font-awesome.min.css';
import "./styles/general.css"
import "./styles/books.css"
import CommentModal from './scenes/comment/CommentModal';
function BookDetail() {
    return (
        <div>
          
        <div className="bookDetails">
          <div className="large-cover" />
          <div className="book-view-container">
            <div className="column book-view-left">
              <div className="book-cover"><img src="../images/demoBookCover1.jpg" /></div>
              <button id="readBtn" className="readBtn" role="link">ĐỌC SÁCH</button>
            </div>
            <div className="column book-view-right">
              <h1 className="book-name">All Quiet on the Western Front</h1>
              <h2 className="book-name-translated">Phía Tây không có gì lạ <span className="release-year">(2022)</span></h2>
              <a className="rating-stars" href="#ratingDetails">
                <span className="fa fa-star checked-star" />
                <span className="fa fa-star checked-star" />
                <span className="fa fa-star checked-star" />
                <span className="fa fa-star checked-star" />
                <span className="fa fa-star" />&nbsp;
                <div className="average-rating-point">4.1</div>
              </a><br />
              <button className="share-to-fb"><i className="fab fa-facebook-square" /> &nbsp;Chia sẻ</button>
              <button className="add-to-collection"><i className="fas fa-plus" /> &nbsp;Bộ sưu tập</button>
              <div className="genre-tag-list">
                <a className="genre-tag">Phiêu lưu</a>
                <a className="genre-tag">Lịch sử</a>
              </div>
              <table className="book-details-table">
                <tbody><tr>
                    <th>TÁC GIẢ</th>
                    <td> Edward Berger</td>
                  </tr>
                  <tr>
                    <th>DỊCH GIẢ</th>
                    <td> Caydenthan</td>
                  </tr>
                  <tr>
                    <th>XUẤT BẢN</th>
                    <td> 10/7/2022</td>
                  </tr>
                  <tr>
                    <th>TÁI BẢN</th>
                    <td> Lần thứ 2</td>
                  </tr>
                </tbody></table>
              <div className="book-description">
                Khi thiếu niên 17 tuổi Paul tham gia Mặt trận phía Tây trong Thế chiến I, niềm phấn khích ban đầu
                của cậu sớm vỡ vụn
                trước thực tế nghiệt ngã của cuộc sống nơi chiến hào.
              </div>
              <h2>Đánh giá của người đọc</h2>
              <div id="ratingDetails" className="rating-details">
                <div className="side bar">
                  <div>5 sao</div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-5" />
                  </div>
                </div>
                <div className="side bar right">
                  <div>150</div>
                </div>
                <div className="side bar">
                  <div>4 sao</div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-4" />
                  </div>
                </div>
                <div className="side bar right">
                  <div>63</div>
                </div>
                <div className="side bar">
                  <div>3 sao</div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-3" />
                  </div>
                </div>
                <div className="side bar right">
                  <div>15</div>
                </div>
                <div className="side bar">
                  <div>2 sao</div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-2" />
                  </div>
                </div>
                <div className="side bar right">
                  <div>6</div>
                </div>
                <div className="side bar">
                  <div>1 sao</div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-1" />
                  </div>
                </div>
                <div className="side bar right">
                  <div>20</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CommentModal />
      </div>

    );
}
export default BookDetail