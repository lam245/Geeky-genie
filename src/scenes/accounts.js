import '../styles/accounts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Accounts() {
  return (
        
    <div>
                  
      <title>Account</title>
      {/* CSS only */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
                 
                  
      {/* <div class="fw-bold">Header</div> */}
      <div className="container">
        <div className="account bg vh-100 mx-auto" style={{ maxWidth: '40vw' }}>
          <div className="pt-5 pb-2">
            <div className="text-white fs-3 text-center">
              Customer Name
              <button data-bs-toggle="modal" data-bs-target="#edit" style={{ backgroundColor: 'transparent' }}>
                <i className="fa-solid fa-pen-to-square text-white icon-edit" />
              </button>
            </div>
            <br />
            <div className="text-white py-2 fs-5">
              Ngày gia nhập : <span className="fw-bold">10/10/2022</span>
            </div>
            <div className="text-white py-2 fs-5">
              Ngày sinh : <span className="fw-bold">10/10/2022</span>
            </div>
            <div className="text-white py-2 fs-5">
              Giới tính : <span className="fw-bold">Nam</span>
            </div>
            <div className="text-white py-2 fs-5">
              Số Điện Thoại : <span className="fw-bold">01234567890</span>
            </div>
            <div className="text-white py-2 fs-5">
              Email : <span className="fw-bold">abc@gmail.com</span>
            </div>
          </div>
          <div className="text-center mt-2 pb-3">
            <button type="button" className="btn-sub px-3 py-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Kích hoạt VIP mode
            </button>
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="edit" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Sửa Thông Tin
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Họ Và Tên:
                </span>
                <input type="text" className="form-control" placeholder="Họ Và Tên" aria-label="Username" aria-describedby="basic-addon1" defaultValue="Customer Name" />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Số Điện Thoại:
                </span>
                <input type="number" className="form-control" placeholder="Số Điện Thoại: " aria-label aria-describedby="basic-addon1" defaultValue="0123456789" />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Email: </span>
                <input type="email" className="form-control" placeholder="Email: " aria-label aria-describedby="basic-addon1" defaultValue="abc@gmail.com" />
              </div>
              <div className="mb-3 d-flex">
                <span className="input-group-text" id="basic-addon1">Giới Tính:
                </span>
                <div className="d-flex align-items-center ms-3">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" id="male" />
                    <label className="form-check-label" htmlFor="male">
                      Nam
                    </label>
                  </div>
                  <div className="form-check  ms-3">
                    <input className="form-check-input" type="radio" name="gender" id="female" defaultChecked />
                    <label className="form-check-label" htmlFor="female">
                      Nữ
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Đóng
              </button>
              <button type="button" className="btn btn-primary">Lưu</button>
            </div>
          </div>
        </div>
      </div>
                  
      {/* JavaScript Bundle with Popper */}
    </div>
             
  );
    }


export default Accounts