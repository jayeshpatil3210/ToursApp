import React from "react";
import Button from "react-bootstrap/Button";
import world from "../img/world.png";
import hero1 from "../img/hero-img01.jpg";
import hero2 from "../img/hero-img02.jpg";
import hero4 from "../img/hero-video.mp4";

function Hero() {
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <div className="row">
            <div className="hero-left col-md-6 mt-5">
              <Button variant="warning" className="rounded-pill cursive-button">
                Know before you go
              </Button>
              <img
                src={world}
                width="45"
                height="43"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              <h1>
                Travelling opens the doors to creating{" "}
                <span className="span">memories</span>
              </h1>
              <p className="hero-para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                facilis rem amet magnam velit! Possimus labore aliquam magni
                voluptatum corporis reiciendis? Quia soluta ab inventore facilis
                adipisci? Eos delectus aperiam dolores. Nobis quibusdam quam
                molestias.
              </p>
            </div>
            <div className="hero-right col-md-6 mt-5 d-flex">
              <img
                src={hero1}
                width="160"
                height="343"
                className="d-inline-block align-top mr-3"
                alt="React Bootstrap logo"
              />
              <img
                src={hero2}
                width="160"
                height="343"
                className="d-inline-block align-top my-5"
                alt="React Bootstrap logo"
              />
              <video width="30%" height="85%" src={hero4} controls></video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
