import React from 'react';
import '../styles/general.css';
import '../styles/reading.css';
import { useParams, useSearchParams } from 'react-router-dom'

function Reading() {
  const { book_id } = useParams()
  
  return (
    <div className='reading-view'>
        <h1>Tên sách</h1>
        <div className='arrow'><i className='arrow-left'></i> <i className="arrow-right"></i></div>
        <div id='book-content' className="paper">
            <p>Bỏ nội dung sách vào chỗ này</p>
        </div>
    </div>
  );
}
export default Reading