import React from "react";
import "./styles.scss";
import { Carousel } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";

Home.propTypes = {};

function Home(props) {
  return (
    <>
      <div className="header-info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="header-item">
                <img
                  src={process.env.PUBLIC_URL + "img/icons/delivery.png"}
                  alt=""
                />
                <p>Miễn phí vận chuyển nội thành</p>
              </div>
            </div>
            <div className="col-md-4 text-left text-lg-center">
              <div className="header-item">
                <img
                  src={`${process.env.PUBLIC_URL}/img/icons/voucher.png`}
                  alt=""
                />
                <p>Khuyến mãi 20% cho sinh viên</p>
              </div>
            </div>
            <div className="col-md-4 text-left text-xl-right">
              <div className="header-item">
                <img
                  src={`${process.env.PUBLIC_URL}/img/icons/sales.png`}
                  alt=""
                />
                <p>Khuyến mãi 30% ngày cuối năm. Sử dụng code: 30OFF</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Slider  */}
      <Carousel autoplay>
        <div>
          <div
            className="single-slider-item"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/img/slider/slider3.webp)`,
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h1>2022</h1>
                  <h2>Collection</h2>
                  <a href="http://localhost:3002/home" className="primary-btn">
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="single-slider-item "
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/img/slider/slider2.webp)`,
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h1>2022</h1>
                  <h2>Collection</h2>
                  <a href="http://localhost:3002/home" className="primary-btn">
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="single-slider-item"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/img/slider/slider1.jpeg)`,
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h1>2022</h1>
                  <h2>Collection</h2>
                  <a href="http://localhost:3002/home" className="primary-btn">
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      {/* Hero Slider End */}

      {/* Features Section Begin */}

      <div class="features-ads">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="single-features-ads first">
                <img src="img/icons/f-delivery.png" alt="" />
                <h4>Miễn phí vận chuyển</h4>
                <p>
                  Fusce urna quam, euismod sit amet mollis quis, vestibulum quis
                  velit. Vesti bulum mal esuada aliquet libero viverra cursus.
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="single-features-ads second">
                <img src="img/icons/coin.png" alt="" />
                <h4>100% Money back</h4>
                <p>
                  Urna quam, euismod sit amet mollis quis, vestibulum quis
                  velit. Vesti bulum mal esuada aliquet libero viverra cursus.
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="single-features-ads">
                <img src="img/icons/chat.png" alt="" />
                <h4>Online support 24/7</h4>
                <p>
                  Urna quam, euismod sit amet mollis quis, vestibulum quis
                  velit. Vesti bulum mal esuada aliquet libero viverra cursus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features Box */}
    </>
  );
}

export default Home;
