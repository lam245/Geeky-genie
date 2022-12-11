import "../styles/accounts.css";
import "../styles/authorDetail.css";
import axios from "axios"
import { useEffect, useState } from 'react';
import { redirect, useParams, useSearchParams } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useNavigate } from "react-router-dom";
import Rating from '@mui/material/Rating';

const Account = (props) => {
  let nav = useNavigate()
  const [user, setUser] = useState(null)
  const [collections, setCollections] = useState([])
  const [cookies, setCookie] = useCookies('state')
  const [states, setStates] = useState([]);
  console.log("first", collections)
  const items = {
    'state': (localStorage.getItem('state'))
  };
  const { auth_id } = useParams()
  const updateAccount = () => {
    axios.post(`http://w22g7.int3306.freeddns.org/my_account`, {
      //  axios.post(`http://w22g7.int3306.freeddns.org/my_account?state=${localStorage.getItem('state')}`, {
      "username": "user",
      "name": "string",
      "phone": "string",
      "theme": 0,
      "profile_pic": "string",
      "receive_email": 1,
      "bio": "string"
    }, {
      params: {
        state: localStorage.getItem('state')
      }
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    console.log(items)
    axios.get("http://w22g7.int3306.freeddns.org/login").then(res => {
      console.log(res);
      axios.get("http://w22g7.int3306.freeddns.org/my_account", {
        params: { 'state': localStorage.getItem('state') },
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
            setUser(res.data)
            setCollections(res.data.collections)
          }
        })
        .catch((err) => console.log(err));
    })
    return () => {
    }
  }, [])

  if (!user) {
    return <>loading</> //loading
  }

  return (
    <div className="body mt-5">
      <div className="container-lg">
        <div className="row">
          <div className="col-12 col-md-3 text-white">
            <div className="p-3">
              <img
                src={user.profile_pic ?? "https://i.pinimg.com/736x/6a/29/8d/6a298df72cb446bdf65891b846374079.jpg"}
                className="w-100"
              />
            </div>
            <div className="p-3">
              <div className="fw-bold text-center fs-3">
                Thông tin cá nhân
                <i
                  className="fa-solid fa-pen-to-square"
                  style={{ color: "#FBC634", cursor: "pointer" }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                ></i>
              </div>
              <div className="px-1 mt-3">
                <div className="fs-6 fw-bold">Email</div>
                <div style={{ color: "#999" }}>{user.email ?? "Không có thông tin"}</div>
              </div>
              <div className="px-1 mt-3">
                <div className="fs-6 fw-bold">Tên tài khoản</div>
                <div style={{ color: "#999" }}>{user.username ?? "Không có thông tin"}</div>
              </div>
              <div className="px-1 mt-3">
                <div className="fs-6 fw-bold">Số điện thoại</div>
                <div style={{ color: "#999" }}>{user.phone ?? "Không có thông tin"}</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-9 text-white">
            <div class="fs-1 fw-bold">{user.name}</div>
            <div class="fs-3 fw-bold mt-4">Giới thiệu</div>
            <div style={{ color: "#999" }} className="mt-2">
              {user.bio ?? "Không có thông tin"}
            </div>
            <div className="fs-3 fw-bold mt-4">Bộ sưu tập</div>
            <div className="row mt-2">
              {collections?.map((collection) => (
                <>
                  <h1 className='fs-4 fw-bold mt-4'>{collection.coll_name}</h1>
                  <div className="row mt-2">
                    {collection?.books.map(book => (
                      <div className="col-12 col-md-3">
                        <a className='no-underline book' href={``} target="_blank">
                          <img
                            src={book.cover}
                            class="w-100 h-100"
                            alt="image"
                          />
                          <div className='rating'>
                            {/* http://w22g7.int3306.freeddns.org/book/book_id */}
                            <Rating name="half-rating" value={book.current_rating} precision={1} />
                          </div>
                        </a>
                        <h1 className='fs-4 fw-bold mt-4 text-center'>{book.title}</h1>
                      </div>
                    ))}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Chỉnh Sửa Thông Tin
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-floating mb-3">
                <input
                  type="file"
                  className="form-control"
                  id="floatingInputGrid"
                />
                <label htmlFor="floatingInputGrid">Avatar</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputGrid"
                  defaultValue={user.name}
                />
                <label htmlFor="floatingInputGrid">Họ Và Tên</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputGrid"
                  defaultValue={user.bio}
                />
                <label htmlFor="floatingInputGrid"> Giới thiệu</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputGrid"
                  defaultValue={user.username}
                />
                <label htmlFor="floatingInputGrid">Tên tài khoản</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputGrid"
                  defaultValue={user.email}
                />
                <label htmlFor="floatingInputGrid">Email</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputGrid"
                  defaultValue={user.phone}
                />
                <label htmlFor="floatingInputGrid">Số điện thoại </label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={updateAccount}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Account;