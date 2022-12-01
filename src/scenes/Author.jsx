import '../styles/authorDetail.css'
import axios from "axios"
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom'

const Author = (props) => {
  const [user, setUser] = useState(null)

  const { auth_id } = useParams()


  useEffect(() => {
    axios.get(`http://w22g7.int3306.freeddns.org/authors/?author_id=${auth_id}`).then(res => {
      setUser(res.data)
    })

    return () => {

    }
  }, [])

  if (!user) {
    return <></> //loading
  }

  return (
    <div class="body mt-5">
      <div class="container-lg">
        <div class="row">
          <div class="col-12 col-md-3 text-white">
            <div class="p-3">
              <img
                src={user.author_pic ?? "https://i.pinimg.com/736x/6a/29/8d/6a298df72cb446bdf65891b846374079.jpg"}
                class="w-100"
              />
            </div>
            <div class="p-3">
              <div class="fw-bold text-center fs-3">Thông tin cá nhân</div>
              <div class="px-1 mt-3">
                <div class="fw-bold">Website</div>
                <div style={{ color: "#999" }}>{user.website ?? "Không có thông tin"}</div>
              </div>
              <div class="px-1 mt-3">
                <div class="fw-bold">Email</div>
                <div style={{ color: "#999" }}>{user.social_account ?? "Không có thông tin"} </div>
              </div>
              
            </div>
          </div>
          <div class="col-12 col-md-9 text-white">
            <div class="fs-1 fw-bold">{user.author_name}</div>
            <div class="fw-bold mt-4">Tiểu sử</div>
            <div style={{ color: "#999" }} class="mt-2">
              {user.bio  ?? "Không có thông tin"}
            </div>
            <div class="fw-bold mt-4">Quotes</div>
            <div style={{ color: "#999" }} class="mt-2">
              {user.quotes  ?? "Không có thông tin"}
            </div>
            <div class="fw-bold mt-4">Các tác phẩm</div>
            <div class="row mt-2">
              <div class="col-12 col-md-3">
                <a href="" className='no-underline'>
                  <img
                    src="https://taimienphi.vn/tmp/cf/aut/0jRR-odmp-K3i2-8y3Q-w1jw-aKXX-BfHP-hinh-nen-1.jpg"
                    class="w-100"
                    alt="image"
                  />
                  <div style={{ color: "#999" }} class="text-center mt-2">
                  <div className="ratings">
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star"></i>
                  </div>
                    Tác Phẩm 1
                  </div>
                </a>
              </div>
              <div class="col-12 col-md-3">
                <img
                  src="https://taimienphi.vn/tmp/cf/aut/0jRR-odmp-K3i2-8y3Q-w1jw-aKXX-BfHP-hinh-nen-1.jpg"
                  class="w-100"
                />
                <div style={{ color: "#999" }} class="text-center mt-2">
                  Tác Phẩm 2
                </div>
              </div>
              <div class="col-12 col-md-3">
                <img
                  src="https://taimienphi.vn/tmp/cf/aut/0jRR-odmp-K3i2-8y3Q-w1jw-aKXX-BfHP-hinh-nen-1.jpg"
                  class="w-100"
                />
                <div style={{ color: "#999" }} class="text-center mt-2">
                  Tác Phẩm 3
                </div>
              </div>
              <div class="col-12 col-md-3">
                <img
                  src="https://taimienphi.vn/tmp/cf/aut/0jRR-odmp-K3i2-8y3Q-w1jw-aKXX-BfHP-hinh-nen-1.jpg"
                  class="w-100"
                />
                <div style={{ color: "#999" }} class="text-center mt-2">
                  Tác Phẩm 4
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
