import '../styles/general.css';
import '../styles/reading.css';
import { useParams, useSearchParams } from 'react-router-dom'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Components/css/App.css";
import Notes from "./Components/NoteComponents/Notes";
import Header from "./Components/NoteComponents/Header";
import CreateNote from './Components/NoteComponents/CreateNote';
function Reading() {
  const nav = useNavigate( )
  const { book_id } = useParams()
  const [data, setData] = useState([]);
  const [bookMark, setbookMark] = useState([])

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
          setData(res.data)
         
          
    
        }
      })
      .catch((err) => console.log(err));
  }
  function fetchBookmark() {
    axios.get(`http://127.0.0.1:5000/my_bookmark?book_id=${book_id}&bm_name=aaa`, {
      params: { 'state': localStorage.getItem('state') },
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
          setbookMark(res.data)
         
          
    
        }
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => { 
    
    fetchBook()
    fetchBookmark()
    return () => {
    }
  }, [])
  return (
    <div className='reading-view'>
      
      <div className='column left'>
      
        < Notes {...bookMark} />
        </div>
        
      <div className='column right'>
        <div className='book-container'>
          <h1>{data.title}</h1>
          
          <hr />
          <div  id='book-content' className="paper">
          <p style={{whiteSpace: "pre-wrap"}}>{ data.content}</p>
          </div>
            </div>
    </div>
    </div>
  );
}
export default Reading