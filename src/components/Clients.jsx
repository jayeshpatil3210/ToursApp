import React from "react";
import Button from "react-bootstrap/Button";
import Slider from "react-slick";

function Clients() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="client">
        <div className="container">
          <Button
            variant="warning"
            className="rounded-pill cursive-button mb-3"
          >
            Clients Love
          </Button>
          <h2>What our clients say about us</h2>
          <div className="row">
            <div className="slider-container">
              <Slider {...settings}>
                <div className="row d-flex">
                  <div className="col-md-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cum deleniti inventore laudantium distinctio, sequi
                      quisquam voluptatibus expedita velit.
                    </p>
                    <div className="client-img">
                      <img src="/ava-1.jpg"></img>
                      <div className="client-name">
                        <h2>John Deo</h2>
                        <p>Customer</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cum deleniti inventore laudantium distinctio, sequi
                      quisquam voluptatibus expedita velit.
                    </p>
                    <div className="client-img">
                      <img src="/ava-2.jpg"></img>
                      <div className="client-name">
                        <h2>Cathrine Jo</h2>
                        <p>Customer</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cum deleniti inventore laudantium distinctio, sequi
                      quisquam voluptatibus expedita velit.
                    </p>
                    <div className="client-img">
                      <img src="/ava-3.jpg"></img>
                      <div className="client-name">
                        <h2>Mitchel</h2>
                        <p>Customer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row d-flex">
                  <div className="col-md-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cum deleniti inventore laudantium distinctio, sequi
                      quisquam voluptatibus expedita velit.
                    </p>
                    <div className="client-img">
                      <img src="/ava-1.jpg"></img>
                      <div className="client-name">
                        <h2>John Deo</h2>
                        <p>Customer</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cum deleniti inventore laudantium distinctio, sequi
                      quisquam voluptatibus expedita velit.
                    </p>
                    <div className="client-img">
                      <img src="/ava-3.jpg"></img>
                      <div className="client-name">
                        <h2>John Deo</h2>
                        <p>Customer</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cum deleniti inventore laudantium distinctio, sequi
                      quisquam voluptatibus expedita velit.
                    </p>
                    <div className="client-img">
                      <img src="/ava-2.jpg"></img>
                      <div className="client-name">
                        <h2>John Deo</h2>
                        <p>Customer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row d-flex">
                  <div className="col-md-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cum deleniti inventore laudantium distinctio, sequi
                      quisquam voluptatibus expedita velit.
                    </p>
                    <div className="client-img">
                      <img src="/ava-3.jpg"></img>
                      <div className="client-name">
                        <h2>John Deo</h2>
                        <p>Customer</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cum deleniti inventore laudantium distinctio, sequi
                      quisquam voluptatibus expedita velit.
                    </p>
                    <div className="client-img">
                      <img src="/ava-2.jpg"></img>
                      <div className="client-name">
                        <h2>John Deo</h2>
                        <p>Customer</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cum deleniti inventore laudantium distinctio, sequi
                      quisquam voluptatibus expedita velit.
                    </p>
                    <div className="client-img">
                      <img src="/ava-1.jpg"></img>
                      <div className="client-name">
                        <h2>John Deo</h2>
                        <p>Customer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clients;
