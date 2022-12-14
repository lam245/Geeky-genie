import React from 'react';
import '../styles/HomePage.css';

import axios from "axios"
import { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';
import {useRef} from 'react';

const HomePage = (props) => {
  const ref = useRef(null);

  const [popularBooks, setPopularBooks] = useState(null)
  const [copypopularBooks, copysetPopularBooks] = useState(null)

  const [newBooks, setNewBooks] = useState(null)
  const [personalBooks, setPersonalBooks] = useState([])
  const [genres, setgenres] = useState(null)
  const [sort_by_year, setsort_by_year] = useState(null)
  const [min_rating, setmin_rating] = useState(null)
  const [min_pages, setmin_pages] = useState(10)
  const [max_pages, setmax_pages] = useState(10000)

  

  
  const nav = useNavigate()
  
  
  useEffect(() => {
    axios.get(`http://w22g7.int3306.freeddns.org`, {
      
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      'Content-Type': 'application/json'
    },
  })
      .then(res => {
        console.log(res.data.popular.books)
        setPopularBooks(res.data.popular.books);
        setNewBooks(res.data.new);
        copysetPopularBooks(res.data.popular.books)

        if (res.data.for_this_user) {
          setPersonalBooks(res.data.for_this_user);
        }

      })
  }, [])

  const readpopularBooks = async (e) => {
    console.log(e.currentTarget.id);
    const id = await e.currentTarget.id
    
    nav("/book/"+id) 
  }

  const toAuthor = async (e) => {
    console.log(e.currentTarget.id);
    const id = await e.currentTarget.id
    
    nav("/author/"+id) 
  }

  const filterItem = async (e) => {
    
  const res = await axios.get(`http://w22g7.int3306.freeddns.org/books/filter?state=${localStorage.getItem('state')}&genres=${genres}&sort_by_year=${sort_by_year}&min_rating=${min_rating}&min_pages=${min_pages}&max_pages=${max_pages}`, {
    
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        'Content-Type': 'application/json'
      },
    }) 
        if (res.status === 203) {
          nav("/login")
        }
        else {
          setPopularBooks(res.data)
        }
  };

  const filterItem0 = async (e) => {
    const dat = e.target.value
    
    if (dat === "sachle") {
      setmin_pages(0)
      setmax_pages(100)
      const res = await axios.get(`http://w22g7.int3306.freeddns.org/books/filter?state=${localStorage.getItem('state')}&&sort_by_year=${sort_by_year}&min_rating=${min_rating}&min_pages=0&max_pages=100`, {
    
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        'Content-Type': 'application/json'
      },
    })
     
        if (res.status === 203) {
          nav("/login")
        }
        else {
          setPopularBooks(res.data)
        }
    }
    else if (dat === "sachbo") {
      setmin_pages(300)
      setmax_pages(500)
      const res = await axios.get(`http://w22g7.int3306.freeddns.org/books/filter?state=${localStorage.getItem('state')}&sort_by_year=${sort_by_year}&min_rating=${min_rating}&min_pages=300&max_pages=500`, {
    
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        'Content-Type': 'application/json'
      },
    })
     
        if (res.status === 203) {
          nav("/login")
        }
        else {
          setPopularBooks(res.data)
         }
    }
  }
   const filterItem1 = async (e) => {
     const dat = e.target.value
     setgenres(dat)
    const res = await axios.get(`http://w22g7.int3306.freeddns.org/books/filter?state=${localStorage.getItem('state')}&genres=${dat}&sort_by_year=${sort_by_year}&min_rating=${min_rating}&min_pages=${min_pages}&max_pages=${max_pages}`, {
    
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        'Content-Type': 'application/json'
      },
    })
     
        if (res.status === 203) {
          nav("/login")
        }
        else {
          setPopularBooks(res.data)
        }
      }
  const filterItem2 = async (e) => {
    var dat = e.target.value
    let  true_dat = 1
    if (dat === "cao") {
      true_dat = 3
    }
    else {
       true_dat = 1
    }
    setmin_rating(true_dat)
    const res = await axios.get(`http://w22g7.int3306.freeddns.org/books/filter?state=${localStorage.getItem('state')}&sort_by_year=${sort_by_year}&min_rating=${true_dat}&min_pages=${min_pages}&max_pages=${max_pages}`, {
    
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        'Content-Type': 'application/json'
      },
    })
     
        if (res.status === 203) {
          nav("/login")
        }
        else {
          setPopularBooks(res.data)
        }
      }
  
  const filterItem3 = async (e) => {
    const dat = e.target.value
    let data = "asceding"
    if (dat === "tang") {
      data = "asceding"
    }
    else {
      data = "descending"

    }
    setsort_by_year(data)
   const res = await axios.get(`http://w22g7.int3306.freeddns.org/books/filter?state=${localStorage.getItem('state')}&genres=${genres}&sort_by_year=${data}&min_rating=${min_rating}&min_pages=${min_pages}&max_pages=${max_pages}`, {
   
     headers: {
       "Access-Control-Allow-Headers": "Content-Type",
       'Content-Type': 'application/json'
     },
   })
    
       if (res.status === 203) {
         nav("/login")
       }
       else {
         setPopularBooks(res.data)
        }
      }

  

  return (
    <div>
      <title>GeekyGenie</title>
      <div id="wrapper">
        <div className="search-field">
          <div className="field">
            <label className="label">Lo???i s??ch:</label>
            <select onChange={(e) => {
                                filterItem0(e);
                            }}>
              <option>- T???t c??? -</option>
              <option value="sachle">S??ch l???</option>
              <option value="sachbo">S??ch b???</option>
            </select>
          </div>
          <div className="field">
            <label className="label">Th??? lo???i:</label>
            <select onChange={(e) => {
                                filterItem1(e);
                            }}>
              <option value="">- T???t c??? -</option>
              <option value="Phi??u l??u">Phi??u l??u</option>
              <option value="C??? ??i???n">C??? ??i???n</option>
              <option value="T???i ph???m Trinh th??m">T???i ph???m - Trinh th??m</option>
              <option value="Vi???n t?????ng">Vi???n t?????ng</option>
              <option value="C??? t??ch - Truy???n thuy???t">C??? t??ch - Truy???n thuy???t</option>
              <option value="L???ch s???">L???ch s???</option>
              <option value="Kinh d???">Kinh d???</option>
              <option value="H??i h?????c">H??i h?????c</option>
            </select>
          </div>
          <div className="field">
            <label className="label">Ratings:</label>
            <select onChange={(e) => {
                                filterItem2(e);
                            }}>
              <option>- T???t c??? -</option>
              <option value="cao">Cao</option>
              <option value="thap">Th???p</option>
              
            </select>
          </div>
          <div className="field">
            <label className="label">N??m:</label>
            <select onChange={(e) => {
                                filterItem2(e);
                            }}>
             
              <option value={"tang"}>T??? 2000</option>
              <option value={"giam"}>Tr?????c 2000</option>
            </select>
          </div>
        </div>


        <div className="headline">
          <h2>S??ch ????? c???</h2>
          <hr />
        </div>
        <ul className="products">
          {popularBooks?.map(book => (
            <li  ><div className="product-item" >
              <div className="product-top" ref={ref} id ={book.book_id} onClick={ readpopularBooks}>
                <a className="product-thumb">
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
                    <a href className="product-name" ref={ref} id ={book.book_id} onClick={ readpopularBooks}>{book.title}</a>
                    <a href className="product-author" id={Object.keys(book.authors[0])} onClick={toAuthor}>{Object.values(book.authors[0])}</a>
              </div>
            </div></li>
          ))}
        </ul>

        
        <div className="headline">
          <h2>S??ch m???i</h2>
          <hr />
        </div>
        <ul className="products">
          {newBooks?.books.map(book => (
            <li><div className="product-item">
              <div className="product-top" ref={ref} id ={book.book_id} onClick={ readpopularBooks}>
                <a className='product-thumb'>
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
                    <a href className="product-name" ref={ref} id ={book.book_id} onClick={ readpopularBooks}>{book.title}</a>
                    <a href className="product-author" id={Object.keys(book.authors[0])} onClick={toAuthor}>{Object.values(book.authors[0])}</a>
              </div>
            </div></li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default HomePage;
