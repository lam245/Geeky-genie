import { Icon } from 'react-icons-kit'
import { trashO } from 'react-icons-kit/fa/trashO'

import "../styles/accounts.css";
import "../styles/authorDetail.css";
import axios from "axios"
import { useEffect, useState } from 'react';
import { redirect, useParams, useSearchParams } from 'react-router-dom'

import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";
import { useCookies } from 'react-cookie'
import { useNavigate } from "react-router-dom";
import Rating from '@mui/material/Rating';
import { useForm } from "react-hook-form";

const Account = (props) => {
  let nav = useNavigate()
  const [user, setUser] = useState(null)
  const [collections, setCollections] = useState([])
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState(null);
  const { register, handleSubmit } = useForm()

  const items = {
    'state': (localStorage.getItem('state'))
  };
  const uploadFile = async () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    const snapshot = await uploadBytes(imageRef, imageUpload);
    const url = await getDownloadURL(snapshot.ref)
    console.log('url', url);
    return url
  };
  const updateAccount = async (e) => {
    console.log(e);
    e.profile_pic = await uploadFile()
    axios.post(`http://127.0.0.1:5000/my_account?state=${localStorage.getItem('state')}`, {

      //  axios.post(`http://w22g7.int3306.freeddns.org/my_account?state=${localSlogtorage.getItem('state')}`, {
      "username": user.username,
      "name": e.name,
      "phone": e.phone,
      "theme": 0,
      "profile_pic": e.profile_pic,
      "receive_email": 1,
      "bio": e.bio
    }, {

    })
      .then(function (response) {
        console.log(response.data);
        document.getElementById('form1-close')?.click()
        fetchUser()
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function deleteCollection(bookId, coolName) {
    console.log(coolName);
    console.log(bookId);
    //axios.put(`http://127.0.0.1:5000/my_collections/${coolName}?book_id=${bookId}?state=${localStorage.getItem('state')}`)
    axios.put(`http://127.0.0.1:5000/my_collections/${coolName}?bookId=${bookId}?state=${localStorage.getItem('state')}`)
  }

  function fetchUser() {
    axios.get("http://127.0.0.1:5000/my_account", {
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
  }

  useEffect(() => {
    console.log(items)
    fetchUser()
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
              <div className="fw-bold text-center fs-3" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                Thông tin cá nhân
                <i
                  className="fa-solid fa-pen-to-square fs-y"
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
                <div key={collection.coll_name}>
                  <h1 className='fs-4 fw-bold mt-4'>{collection.coll_name}</h1>
                  <div className="row mt-2">
                    {collection?.books.map(book => (
                      <div className="col-12 col-md-3" style={{ position: 'relative' }} key={book.book_id}>
                        <div style={{ position: 'absolute', zIndex: '100', right: '1rem', margin: '0.5rem 0.25rem' }}>
                          <button className='delete' onClick={() => {
                            const isDelete = window.confirm('Xóa sách ?');
                            if (isDelete) {
                              deleteCollection(book.book_id, collection.coll_name)
                            }
                          }}>
                            <Icon icon={trashO} />
                          </button>
                        </div>
                        <a className='no-underline book' href={``} target="_blank">
                          <img
                            src={book.cover}
                            class="w-100 h-100"
                            alt="image"
                          >
                          </img>
                          <div className='rating'>
                            {/* http://w22g7.int3306.freeddns.org/book/book_id */}
                            <Rating name="half-rating" value={book.current_rating} precision={1} />
                          </div>
                          <div className='rating'>
                            {/* http://w22g7.int3306.freeddns.org/book/book_id */}
                            <Rating name="half-rating" value={book.current_rating} precision={1} />
                          </div>
                        </a>
                        <h1 className='fs-4 fw-bold mt-4 text-center'>{book.title}</h1>
                      </div>
                    ))}
                  </div>
                </div>
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
          <form className="modal-content" onSubmit={handleSubmit(updateAccount)}>
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
                  onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                  }}
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
                  {...register('name')}
                />
                <label htmlFor="floatingInputGrid">Họ Và Tên</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputGrid"
                  defaultValue={user.bio}
                  {...register('bio')}
                />
                <label htmlFor="floatingInputGrid"> Giới thiệu</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputGrid"
                  defaultValue={user.username}
                  {...register('username')}
                />
                <label htmlFor="floatingInputGrid">Tên tài khoản</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputGrid"
                  defaultValue={user.email}
                  {...register('email')}
                />
                <label htmlFor="floatingInputGrid">Email</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputGrid"
                  defaultValue={user.phone}
                  {...register('phone')}
                />
                <label htmlFor="floatingInputGrid">Số điện thoại </label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                id="form1-close"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>

      <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <form className="modal-content" >
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel" style={{ color: 'black' }}>
                Xác nhận xóa
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ color: 'black' }}>
              <p>Bạn có muốn xóa sách này không?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                id="form1-close"
                onChange={() => {
                  // setBookId('')
                  // setCoolName('')
                }}
                data-bs-dismiss="modal"
              >
                Không
              </button>
              <button type="submit" onClick={(e) => deleteCollection(e)} className="btn btn-primary">
                Có
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Account;