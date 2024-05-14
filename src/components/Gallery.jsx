import React from "react";
import Button from "react-bootstrap/Button";

function Gallery() {
  return (
    <>
      <div className="gallery">
        <div className="container">
          <Button
            variant="warning"
            className="rounded-pill cursive-button mb-3"
          >
            Gallery
          </Button>
          <h2>Visit our customers tour</h2>
          <div className="row">
            <div className="column">
              <img src="/gallery-01.jpg"></img>
              <img src="/gallery-05.jpg"></img>
            </div>
            <div className="column">
              <img src="/gallery-02.jpg"></img>
              <img src="/gallery-06.jpg"></img>
            </div>
            <div className="column">
              <img src="/gallery-03.jpg"></img>
              <img src="/gallery-07.jpg"></img>
            </div>
            <div className="column">
              <img src="/gallery-06.jpg"></img>
              <img src="/gallery-08.jpg"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
