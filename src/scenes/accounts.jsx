  import "../styles/accounts.css";
import "../styles/authorDetail.css";
import axios from "axios"
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom'
const Account = (props) => {
  const [user, setUser] = useState(null)

  //const { auth_id } = useParams()


  useEffect(() => {
    axios.get(`http://w22g7.int3306.freeddns.org/my_account`).then(res => {
      setUser(res.data)
    })

    return () => {

    }
  }, [])

  if (!user) {
    return <></> //loading
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
              <div className="fw-bold text-center fs-4">
                Thông tin cá nhân
                <i
                  className="fa-solid fa-pen-to-square"
                  style={{ color: "#fbc634", cursor: "pointer" }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                ></i>
              </div>
              <div className="px-1 mt-3">
                <div className="fw-bold">Email</div>
                <div style={{ color: "#999" }}>{user.website ?? "Không có thông tin"}</div>
              </div>
              <div className="px-1 mt-3">
                <div className="fw-bold">Tên tài khoản</div>
                <div style={{ color: "#999" }}>{user.username ?? "Không có thông tin"}</div>
              </div>
              <div className="px-1 mt-3">
                <div className="fw-bold">Số điện thoại</div>
                <div style={{ color: "#999" }}>{user.phone ?? "Không có thông tin"}</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-9 text-white">
            <div class="fs-1 fw-bold">{user.name}</div>
            <div class="fw-bold mt-4">Giới thiệu</div>
            <div style={{ color: "#999" }} className="mt-2">
            {user.bio  ?? "Không có thông tin"}
            </div>
            <div className="fw-bold mt-4">Bộ sưu tập</div>
            <div className="row mt-2">
              <div className="col-12 col-md-3">
                <div className="position-relative image">
                  <img
                    src="https://taimienphi.vn/tmp/cf/aut/0jRR-odmp-K3i2-8y3Q-w1jw-aKXX-BfHP-hinh-nen-1.jpg"
                    className="w-100"
                  />
                  <span
                    className="position-absolute icon"
                    style={{ top: "10px", right: "15px", cursor: "pointer" }}
                    onClick={() => {
                      window.confirm("Xóa hay sách này ?");
                    }}
                  >
                    <i className="fa-solid fa-trash rating-color"></i>
                  </span>
                </div>
                <div style={{ color: "#999" }} className="text-center mt-2">
                  <div className="ratings">
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  Tác Phẩm 1
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="position-relative image">
                  <img
                    src="https://taimienphi.vn/tmp/cf/aut/0jRR-odmp-K3i2-8y3Q-w1jw-aKXX-BfHP-hinh-nen-1.jpg"
                    className="w-100"
                  />
                  <span
                    className="position-absolute icon"
                    style={{ top: "10px", right: "15px", cursor: "pointer" }}
                    onClick={() => {
                      window.confirm("Xóa hay sách này ?");
                    }}
                  >
                    <i className="fa-solid fa-trash rating-color"></i>
                  </span>
                </div>
                <div style={{ color: "#999" }} className="text-center mt-2">
                  <div className="ratings">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  Tác Phẩm 2
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="position-relative image">
                  <img
                    src="https://taimienphi.vn/tmp/cf/aut/0jRR-odmp-K3i2-8y3Q-w1jw-aKXX-BfHP-hinh-nen-1.jpg"
                    className="w-100"
                  />
                  <span
                    className="position-absolute icon"
                    style={{ top: "10px", right: "15px", cursor: "pointer" }}
                    onClick={() => {
                      window.confirm("Xóa hay sách này ?");
                    }}
                  >
                    <i className="fa-solid fa-trash rating-color"></i>
                  </span>
                </div>
                <div style={{ color: "#999" }} className="text-center mt-2">
                  <div className="ratings">
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  Tác Phẩm 3
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="position-relative image">
                  <img
                    src="https://taimienphi.vn/tmp/cf/aut/0jRR-odmp-K3i2-8y3Q-w1jw-aKXX-BfHP-hinh-nen-1.jpg"
                    className="w-100"
                  />
                  <span
                    className="position-absolute icon"
                    style={{ top: "10px", right: "15px", cursor: "pointer" }}
                    onClick={() => {
                      window.confirm("Xóa hay sách này ?");
                    }}
                  >
                    <i className="fa-solid fa-trash rating-color"></i>
                  </span>
                </div>
                <div style={{ color: "#999" }} className="text-center mt-2">
                  <div className="ratings">
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  Tác Phẩm 4
                </div>
              </div>
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
                  defaultValue="George R. R. Martin"
                />
                <label htmlFor="floatingInputGrid">Họ Và Tên</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputGrid"
                  defaultValue="introoo"
                />
                <label htmlFor="floatingInputGrid">Intro</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputGrid"
                  defaultValue="Biên Kịch "
                />
                <label htmlFor="floatingInputGrid">Nghề Nghiệp</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputGrid"
                  defaultValue="Hà Nội "
                />
                <label htmlFor="floatingInputGrid">Nơi Sinh</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="date"
                  className="form-control"
                  id="floatingInputGrid"
                  defaultValue="10/10/2000"
                />
                <label htmlFor="floatingInputGrid">Ngày Sinh</label>
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
              <button type="button" className="btn btn-primary">
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
