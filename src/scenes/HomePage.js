import React from 'react';
import '../styles/HomePage.css';

import axios from "axios"
import { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';



const HomePage = (props) => {
  const [popularBooks, setPopularBooks] = useState(null)
  const [newBooks, setNewBooks] = useState(null)
  const [personalBooks, setPersonalBooks] = useState([])

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000`, {
      
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      'Content-Type': 'application/json'
    },
  })
      .then(res => {
        console.log(res.data.popular)
        setPopularBooks(res.data.popular);
        setNewBooks(res.data.new);

        if (res.data.for_this_user) {
          setPersonalBooks(res.data.for_this_user);
        }

      })
  }, [])

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
              <option value={2020}>Từ 2020</option>
              <option value={2015}>Từ 2015</option>
              <option value={2010}>Từ 2010</option>
              <option value={2005}>Từ 2005</option>
              <option value={2000}>Từ 2000</option>
              <option value={-9999}>Trước 2000</option>
            </select>
          </div>
        </div>


        <div className="headline">
          <h2>Sách đề cử</h2>
          <hr />
        </div>
        <ul className="products">
          {popularBooks?.books.map(book => (
            <li><div className="product-item">
              <div className="product-top">
                <a className="product-thumb" href={``} target="_blank">
                  <img
                    src={book.cover}
                    alt="image"
                  />
                  <div className='product-rating'>
                    {/* http://w22g7.int3306.freeddns.org/book/book_id */}
                    <Rating name="half-rating" value={book.current_rating} precision={1} />
                  </div>
                  <div className='rating'>
                    {/* http://w22g7.int3306.freeddns.org/book/book_id */}
                    <Rating name="half-rating" value={book.current_rating} precision={1} />
                  </div>
                </a>
              </div>

              <div className="product-info">
                    <a href className="product-name">{book.title}</a>
              </div>
            </div></li>
          ))}
        </ul>

        
        <div className="headline">
          <h2>Sách mới</h2>
          <hr />
        </div>
        <ul className="products">
          {newBooks?.books.map(book => (
            <li><div className="product-item">
              <div className="product-top">
                <a className='product-thumb' href={``} target="_blank">
                  <img
                    src={book.cover}
                    alt="image"
                  />
                  <div className='product-rating'>
                    {/* http://w22g7.int3306.freeddns.org/book/book_id */}
                    <Rating name="half-rating" value={book.current_rating} precision={1} />
                  </div>
                  <div className='rating'>
                    {/* http://w22g7.int3306.freeddns.org/book/book_id */}
                    <Rating name="half-rating" value={book.current_rating} precision={1} />
                  </div>
                </a>
              </div>

              <div className="product-info">
                    <a href className="product-name">{book.title}</a>
              </div>
            </div></li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default HomePage;
