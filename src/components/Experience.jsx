import React from "react";
import Button from "react-bootstrap/Button";

function Experience() {
  return (
    <>
      <div className="experience">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Button
                variant="warning"
                className="rounded-pill cursive-button mb-3"
              >
                Experience
              </Button>
              <h2>
                With our all experience <br />
                we will serve you
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                tenetur porro iste temporibus nobis ducimus voluptate
                dignissimos.
              </p>
              <div className="all-boxes">
                <div className="all2-boxes">
                  <div className="three-box">
                    <span>12k+</span>
                  </div>
                  <h5>
                    Successfull Trips
                  </h5>
                </div>
                <div className="all2-boxes">
                  <div className="three-box">
                    <span>12k+</span>
                  </div>
                  <h5>
                    Regular clients
                  </h5>
                </div>
                <div className="all2-boxes">
                  <div className="three-box">
                    <span>12k+</span>
                  </div>
                  <h5>
                    Years experience
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6">
                <div className="exp-img">
                    <img src="/experience.png"></img>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
