import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faLocationPin,
  faUsers,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

function Location() {
  return (
    <>
      <div className="travel">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="location">
                <div className="loc-icon d-flex">
                  <FontAwesomeIcon icon={faLocationDot} color="#e53131" />
                  <h5 className="loc-title">Location</h5>
                </div>
                <p>Where are you going ?</p>
              </div>
            </div>
            <div className="border-line"></div>
            <div className="col-md-3">
              <div className="distance">
                <div className="dis-icon d-flex">
                  <FontAwesomeIcon icon={faLocationPin} color="#e53131" />
                  <h5 className="loc-title">Distance</h5>
                </div>
                <p>Distance k/m</p>
              </div>
            </div>
            <div className="border-line2"></div>
            <div className="col-md-3">
              <div className="distance">
                <div className="dis-icon d-flex">
                  <FontAwesomeIcon icon={faUsers} color="#e53131" />
                  <h5 className="loc-title">Max People</h5>
                </div>
                <p>0</p>
              </div>
            </div>
            <div className="col-md-1">
              <div className="search-btn">
                <Button variant="" size="lg" active color="#ffc107">
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Location;
