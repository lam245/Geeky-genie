import '../styles/general.css';
import '../styles/reading.css';
import { useParams, useSearchParams } from 'react-router-dom'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function Reading() {
  const nav = useNavigate( )
  const { book_id } = useParams()
  const [data, setData] = useState([]);

  function fetchBook() {
    axios.get(`http://127.0.0.1:5000/books/?book_id=${book_id}`, {
      
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        'Content-Type': 'application/json'
      },
    })
      .then((res) => {
        if (res.status === 203) {
          nav("/login")
        }
        else {
          console.log(res.data)
          setData(res.data)
         
          
    console.log(res.data)
        }
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => { 
    
    fetchBook()
    
    return () => {
    }
  }, [])
  return (
    <div className='reading-view'>
        <textarea className='sticky-note-papper' placeholder="Ghi chú..."></textarea>
      <h1>{data.title}</h1>
        <div className='arrow'><i className='arrow-left'></i> <i className="arrow-right"></i></div>
        <div id='book-content' className="paper">
        <p style={{whiteSpace: "pre-wrap"}}>{ data.content}</p>
        </div>
    </div>
  );
}
export default Reading