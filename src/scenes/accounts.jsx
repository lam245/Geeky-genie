import { Icon } from 'react-icons-kit'
import { trashO } from 'react-icons-kit/fa/trashO'
import {pencil} from 'react-icons-kit/icomoon/pencil'
import Modal from 'react-bootstrap/Modal';
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
import { Button } from 'bootstrap';

const Account = (props) => {
  let nav = useNavigate()
  const [user, setUser] = useState(null)
  const [collections, setCollections] = useState([])
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState(null);
  const { register, handleSubmit } = useForm()
  const [deletingBook, setDeletingBook] = useState(undefined)
  const [deletingCollection, setDeletingCollection] = useState(undefined)
  const [RenameCollection, setRenameCollection] = useState(undefined)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const items = {
    'state': (localStorage.getItem('state'))
  };
  const updateCollectionName = async (e) => {
    console.log(e.name);
    console.log(RenameCollection.collName)
    axios.patch(`http://w22g7.int3306.freeddns.org/my_collections/${RenameCollection.collName}?state=${localStorage.getItem('state')}&new_name=${e.name}`, {

      //  axios.post(`http://w22g7.int3306.freeddns.org/my_account?state=${localSlogtorage.getItem('state')}`, 
      // params: { 'new_coll_name': e.name },
    }, {})
      .then(function (response) {
        console.log(response);
        document.getElementById('closeadd1')?.click()
        fetchUser()
      })
      .catch(function (error) {
        
      });
  }
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
    axios.post(`http://w22g7.int3306.freeddns.org/my_account?state=${localStorage.getItem('state')}`, {

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
    //axios.put(`http://w22g7.int3306.freeddns.org/my_collections/${coolName}?book_id=${bookId}?state=${localStorage.getItem('state')}`)
    axios.put(`http://w22g7.int3306.freeddns.org/my_collections/${coolName}?book_id=${bookId}&state=${localStorage.getItem('state')}`,{
      
    })

    .then(function (response) {
      console.log(response.data);
      document.getElementById('form1-close')?.click()
      fetchUser()
      handleClose()
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  function deleteColBook(coolName) {
    console.log(coolName);
    //axios.put(`http://w22g7.int3306.freeddns.org/my_collections/${coolName}?book_id=${bookId}?state=${localStorage.getItem('state')}`)
    axios.delete(`http://w22g7.int3306.freeddns.org/my_collections/${coolName}?state=${localStorage.getItem('state')}`,{
      
    })

    .then(function (response) {
      console.log(response.data);
      document.getElementById('form1-close')?.click()
      fetchUser()
      handleClose1()
    })
    .catch(function (error) {
      console.log(error);
      
    });
  }

  function fetchUser() {
    axios.get("http://w22g7.int3306.freeddns.org/my_account", {
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
          console.log(res)
          setUser(res.data)
          setCollections(res.data.collections[0])
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
                Th??ng tin c?? nh??n 
                <i
                  className="fa-solid fa-pen-to-square fs-y"
                  style={{ color: "#FBC634", cursor: "pointer", marginLeft: "5px" }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                ></i>
              </div>
              <div className="px-1 mt-3">
                <div className="fs-6 fw-bold">Email</div>
                <div style={{ color: "#999" }}>{user.email ?? "Kh??ng c?? th??ng tin"}</div>
              </div>
              <div className="px-1 mt-3">
                <div className="fs-6 fw-bold">T??n t??i kho???n</div>
                <div style={{ color: "#999" }}>{user.username ?? "Kh??ng c?? th??ng tin"}</div>
              </div>
              <div className="px-1 mt-3">
                <div className="fs-6 fw-bold">S??? ??i???n tho???i</div>
                <div style={{ color: "#999" }}>{user.phone ?? "Kh??ng c?? th??ng tin"}</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-9 text-white">
            <div class="fs-1 fw-bold">{user.name}</div>
            <div class="fs-3 fw-bold mt-4">Gi???i thi???u</div>
            <div style={{ color: "#999" }} className="mt-2">
              {user.bio ?? "Kh??ng c?? th??ng tin"}
            </div>
            <div className="fs-3 fw-bold mt-4">B??? s??u t???p</div>
            <div className="row mt-2">
              {collections?.map((collection) => (
                <div key={collection.coll_name}>
                <div style={{display:"flex", gap: '10px'}}> 
                  <h1 className='fs-4 fw-bold mt-0 mb-0'>{collection.coll_name}</h1>
            
                  
                          <button className='delete'data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => {
                            // const isDelete = window.confirm('X??a s??ch ?');
                            // if (isDelete) {
                            //   deleteCollection(book.book_id, collection.coll_name)
                            // }
                            // console.log("?");
                            setDeletingCollection({
                              collName: collection.coll_name
                            })
                            handleShow1()
                          }}>
                            <Icon icon={trashO} />
                          </button>
                          <button className='delete'data-bs-toggle="modal" data-bs-target="#staticBack" onClick={() => {
                            // const isDelete = window.confirm('X??a s??ch ?');
                            // if (isDelete) {
                            //   deleteCollection(book.book_id, collection.coll_name)
                            // }
                            setRenameCollection({
                              collName: collection.coll_name
                            })
                            // console.log("?");
                            // setDeletingBook({
                            //   id: book.book_id,
                            //   collName: collection.coll_name
                            // })
                            // handleShow()
                          }}>
                            <Icon icon={pencil} />
                          </button>
                        </div>      
                  <div className="row mt-2">
                    {collection?.books.map(book => (
                      <div className="col-12 col-md-3" style={{ position: 'relative' }} key={book.book_id}>
                        <div style={{ position: 'absolute', zIndex: '100', right: '1rem', margin: '0.5rem 0.25rem' }}>
                          <button className='delete'data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => {
                            // const isDelete = window.confirm('X??a s??ch ?');
                            // if (isDelete) {
                            //   deleteCollection(book.book_id, collection.coll_name)
                            // }
                            console.log("?");
                            setDeletingBook({
                              id: book.book_id,
                              collName: collection.coll_name
                            })
                            handleShow()
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
                        <h1 className='fs-4 text-center'>{book.title}</h1>
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
                Ch???nh s???a th??ng tin
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
                <label htmlFor="floatingInputGrid">H??? V?? T??n</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputGrid"
                  defaultValue={user.bio}
                  {...register('bio')}
                />
                <label htmlFor="floatingInputGrid"> Gi???i thi???u</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputGrid"
                  defaultValue={user.username}
                  {...register('username')}
                />
                <label htmlFor="floatingInputGrid">T??n t??i kho???n</label>
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
                <label htmlFor="floatingInputGrid">S??? ??i???n tho???i </label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                id="form1-close"
                data-bs-dismiss="modal"
              >
                ????ng
              </button>
              <button type="submit" className="btn btn-primary">
                L??u
              </button>
            </div>
          </form>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ color: 'black' }}>
          <Modal.Title>S??ch n??y s??? b??? x??a?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <button variant="secondary" style={{ backgroundColor : "#6C757D" }} className="btn btn-primary" onClick={handleClose}>
            H???y
          </button>
          <button variant="primary" className="btn btn-primary" onClick={()=>deleteCollection(deletingBook.id, deletingBook.collName)}>
            ?????ng ??
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton style={{ color: 'black' }}>
          <Modal.Title>X??a b??? s??u t???p n??y?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <button variant="secondary" style={{ backgroundColor : "#6C757D" }} className="btn btn-primary" onClick={handleClose1}>
            H???y
          </button>
          <button variant="primary" className="btn btn-primary" onClick={()=>deleteColBook(deletingCollection.collName)}>
            ?????ng ??
          </button>
        </Modal.Footer>
      </Modal>
      <div class="modal fade" id="staticBack" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackLabel" aria-hidden="true">
        <form class="modal-dialog"onSubmit={handleSubmit(updateCollectionName)}>
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackLabel" style={{ color: 'black' }}>?????i t??n</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div >
                <div class="mb-3">
                <label for="coll-name1" class="form-label" style={{ color: 'black' }} >T??n b??? s??u t???p     </label>
                <input type="text" {...register('name')} id="coll-name" aria-describedby="emailHelp"/>

                </div>
               
                
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" id="closeadd1" data-bs-dismiss="modal">????ng</button>
              <button type="submit" class="btn btn-primary">X??c nh???n</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Account;