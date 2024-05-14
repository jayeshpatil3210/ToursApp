import React from "react";
import logo from "../img/logo.png";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-logo">
                <img
                  src={logo}
                  width="150"
                  height="50"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
                <p className="mt-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit
                  libero!
                </p>
                <div className="social-logos mt-3">
                  <FontAwesomeIcon icon={faUser} />
                  <img src="/github.svg"></img>
                  <img src="/linkedin-in.svg"></img>
                  <img src="/instagram.svg"></img>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-links">
                <h5>Discover</h5>
                <ul>
                  <li>Home</li>
                </ul>
                <ul>
                  <li>About</li>
                </ul>
                <ul>
                  <li>Tours</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-links">
                <h5>Quick Links</h5>
                <ul>
                  <li>Gallery</li>
                </ul>
                <ul>
                  <li>Login</li>
                </ul>
                <ul>
                  <li>Register</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-links">
                <h5>Contact</h5>
                <div     className="footer-add">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <h6>Address:</h6>
                  <p>An-13 Nepanagar, M.P.</p>
                </div>
                <div className="footer-email">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <h6>Email:</h6>
                  <p>jayeshitp@gmail.com</p>
                </div>

                <div className="footer-phone">
                  <FontAwesomeIcon icon={faPhone} />
                  <h6>Phone:</h6>
                  <p>+91-8109925324</p>
                </div>
              </div>
            </div>
            <p className="copyright mt-3">Copyright 2024 Design and develop by Jayesh patil. All right reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
