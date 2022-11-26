import '../styles/authorDetail.css'

const Author = () => {
  return (
    <div class="body mt-5">
      <div class="container-lg">
        <div class="row">
          <div class="col-12 col-md-3 text-white">
            <div class="p-3">
              <img
                src="https://i.pinimg.com/736x/6a/29/8d/6a298df72cb446bdf65891b846374079.jpg"
                class="w-100"
              />
            </div>
            <div class="p-3">
              <div class="fw-bold text-center fs-3">Thông tin cá nhân</div>
              <div class="px-1 mt-3">
                <div class="fw-bold">Nghề Nghiệp</div>
                <div style={{ color: "#999" }}>Biên Kịch</div>
              </div>
              <div class="px-1 mt-3">
                <div class="fw-bold">Giới Tính</div>
                <div style={{ color: "#999" }}>Nam</div>
              </div>
              <div class="px-1 mt-3">
                <div class="fw-bold">Ngày Sinh</div>
                <div style={{ color: "#999" }}>10/10/2000</div>
              </div>
              <div class="px-1 mt-3">
                <div class="fw-bold">Nơi Sinh</div>
                <div style={{ color: "#999" }}>Đoán xem</div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-9 text-white">
            <div class="fs-1 fw-bold">George R. R. Martin</div>
            <div class="fw-bold mt-4">Tiểu sử</div>
            <div style={{ color: "#999" }} class="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              similique deserunt sapiente, quos a delectus veritatis pariatur,
              dolorem alias non dolores repudiandae, eaque eum praesentium
              provident velit? Quibusdam, magnam recusandae? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Ullam similique deserunt
              sapiente, quos a delectus veritatis pariatur, dolorem alias non
              dolores repudiandae, eaque eum praesentium provident velit?
              Quibusdam, magnam recusandae? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ullam similique deserunt sapiente,
              quos a delectus veritatis pariatur, dolorem alias non dolores
              repudiandae, eaque eum praesentium provident velit? Quibusdam,
              magnam recusandae?
            </div>
            <div class="fw-bold mt-4">Các tác phẩm</div>
            <div class="row mt-2">
              <div class="col-12 col-md-3">
                <img
                  src="https://taimienphi.vn/tmp/cf/aut/0jRR-odmp-K3i2-8y3Q-w1jw-aKXX-BfHP-hinh-nen-1.jpg"
                  class="w-100"
                  alt="image"
                />
                <div style={{ color: "#999" }} class="text-center mt-2">
                  Tác Phẩm 1
                </div>
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
            <div class="fw-bold mt-4">Hình Ảnh</div>
            <div class="row mt-2">
              <div class="col-12 col-md-3">
                <img
                  src="https://i.pinimg.com/736x/6a/29/8d/6a298df72cb446bdf65891b846374079.jpg"
                  class="w-100"
                />
              </div>
              <div class="col-12 col-md-3">
                <img
                  src="https://i.pinimg.com/736x/6a/29/8d/6a298df72cb446bdf65891b846374079.jpg"
                  class="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
