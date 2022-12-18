import React, {useEffect, useState} from 'react';
// import { Link } from 'react-router-dom';
// import axios from "axios";
import '../styles/general.css';
import '../styles/reading.css';

function Reading() {

  return (
    <div style="margin-top: 100px">
        <h1>Tên sách</h1>
        <div className='arrow'><i className='arrow-left'></i> <i className="arrow-right"></i></div>
        <div id='book-content' className="paper">
            <p>Bỏ nội dung sách vào chỗ này</p>
        </div>
    </div>
  );
}
export default Reading