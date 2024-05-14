import React from "react";
import Button from "react-bootstrap/Button";

function Subscribe() {
  return (
    <>
      <div className="subscribe">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="mt-5">Subscribe now for usefull travelling information</h2>

              <div className="input-btn mt-4">
                <input
                  type="text"
                  placeholder="enter your email"
                  className="sub-field"
                ></input>
                <Button variant="warning">Subscribe</Button>
              </div>

              <p className="mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                repellat consectetur amet suscipit quibusdam voluptates,
                reiciendis soluta eos.
              </p>
            </div>
            <div className="col-md-6">
                <div className="tourist-img">
                    <img src="/male-tourist.png"></img>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
