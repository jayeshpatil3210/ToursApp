import React from 'react';
import Button from "react-bootstrap/Button";
import Navbar from "../Navbar";

function Register() {
  return (
    <>
    <Navbar/>
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="left">
              <img src="/register.png"></img>
            </div>
          </div>
          <div className="col-md-6 right">
            <div className="login-logo">
              <img src="/user.png"></img>
            </div>
            <div className="login-content">
            
            <div className="input-field">
            <h1>Register</h1>
            <input type="text" placeholder="enter username" className="username mt-3"></input><br/>
              <input type="text" placeholder="enter email" className="email mt-3"></input><br/>
              <input type="text" placeholder="enter password" className="password mt-3"></input><br/>
              <Button variant="dark" className="btn btm-primary mt-3">
              Create Account
            </Button>
              <p className="mt-3">Already have an account? <a href="#"> Login</a></p>

            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Register