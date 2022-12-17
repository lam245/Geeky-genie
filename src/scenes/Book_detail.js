import 'font-awesome/css/font-awesome.min.css';
import "../styles/general.css"
import "../styles/books.css"
import CommentModal from './comment/CommentModal';
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import demo from '../images/demoBookCover1.jpg';

function BookDetail() {
  const [data, setData] = useState([]);
  function fetchBook() {
    axios.get("http://127.0.0.1:5000/books/?book_id=2", {
      
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        'Content-Type': 'application/json'
      },
    })
      .then((res) => {
        if (res.status == 203) {
          nav("/login")
        }
        else {
          console.log(res)
          setData(res.data)
          
        }
      })
      .catch((err) => console.log(err));
  }
  let nav = useNavigate()
  useEffect(() => {
    
    fetchBook()
    return () => {
    }
  }, [])
    return (
        <div>
          
        <div className="bookDetails">
          <div className="large-cover" />
          <div className="book-view-container">
            <div className="column book-view-left">
              <div className="book-cover"><img src={demo} alt=""/></div>
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
                  <div id="ratingDetails" class="rating-details">
                    <div class="side">
                        <div>5 sao</div>
                    </div>
                    <div class="middle">
                        <div class="bar-container">
                            <div class="bar-5"></div>
                        </div>
                    </div>
                    <div class="side right">
                        <div>150</div>
                    </div>
                    <div class="side">
                        <div>4 sao</div>
                    </div>
                    <div class="middle">
                        <div class="bar-container">
                            <div class="bar-4"></div>
                        </div>
                    </div>
                    <div class="side right">
                        <div>63</div>
                    </div>
                    <div class="side">
                        <div>3 sao</div>
                    </div>
                    <div class="middle">
                        <div class="bar-container">
                            <div class="bar-3"></div>
                        </div>
                    </div>
                    <div class="side right">
                        <div>15</div>
                    </div>
                    <div class="side">
                        <div>2 sao</div>
                    </div>
                    <div class="middle">
                        <div class="bar-container">
                            <div class="bar-2"></div>
                        </div>
                    </div>
                    <div class="side right">
                        <div>6</div>
                    </div>
                    <div class="side">
                        <div>1 sao</div>
                    </div>
                    <div class="middle">
                        <div class="bar-container">
                            <div class="bar-1"></div>
                        </div>
                    </div>
                    <div class="side right">
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