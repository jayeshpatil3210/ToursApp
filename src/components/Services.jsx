import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun,faCodeCompare,faGears } from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <>
      <div className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5 className="serve">What we serve</h5>
              <h2>We offer best services</h2>
            </div>
            <div className="col-md-3 border-p">
              <div className="weather-icon">
                <FontAwesomeIcon
                  icon={faCloudSun}
                  size="2x"
                  color="white"
                  className="cloud"
                />
              </div>
              <div className="calculate">
                <h5>Calculate Weather</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore consequuntur voluptatem quis. Iste quam debitis
                  impedit praesentium voluptatum esse quaerat.
                </p>
              </div>
            </div>
            <div className="col-md-3 border-p">
            <div className="weather-icon">
                <FontAwesomeIcon
                  icon={faCodeCompare}
                  size="2x"
                  color="white"
                  className="cloud"
                />
              </div>
              <div className="calculate">
                <h5>Best tour guide</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore consequuntur voluptatem quis. Iste quam debitis
                  impedit praesentium voluptatum esse quaerat.
                </p>
              </div>
            </div>
            <div className="col-md-3 border-p">
            <div className="weather-icon">
                <FontAwesomeIcon
                  icon={faGears}
                  size="2x"
                  color="white"
                  className="cloud"
                />
              </div>
              <div className="calculate">
                <h5>Customization</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore consequuntur voluptatem quis. Iste quam debitis
                  impedit praesentium voluptatum esse quaerat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
