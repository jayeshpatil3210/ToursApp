import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "../Navbar";

function LogIn() {
  const initialData = {email: "",password: ""};
  const [data, setData] = useState(initialData);
  // const [password, setPassword] = useState();
  const [emailErr, setEmailErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);

  const handleChange = (e) => {
    
    const {name, value} = e.target
    const newData = {[name]: value}
    // setData[{...data,...newData}]
    setData(prevState => ({...prevState, [name]: value}))

  };

  const handleSubmit = (e) => {
    // debugger
    e.preventDefault();
    validation();
    console.log(data)
  };

  const validation = () => {
    let emailErr = "";
    let passwordErr = "";
    if (data.email.includes("@")) {
      emailErr = "email must be include @";
    }
    if (data.password.length < 8) {
      passwordErr = "password must contain atleast 8 characters";
    }
  };
  return (
    <>
      <Navbar />
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="left">
                <img src="/login.png"></img>
              </div>
            </div>
            <div className="col-md-6 right">
              <div className="login-logo">
                <img src="/user.png"></img>
              </div>
              <div className="login-content">
                <div className="input-field">
                  <h1>Login</h1>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="email"
                      placeholder="enter email"
                      className="form-control mt-3"
                      name="email"
                      onChange={handleChange}
                      value={data.email}
                    ></input>
                    <br />
                    <input
                      type="text"
                      placeholder="enter password"
                      className="form-control mt-3"
                      name="password"
                      onChange={handleChange}
                      value={data.password}
                    ></input>
                    <br />
                    <Button variant="dark" className="btn btm-primary mt-3" type="submit">
                      Login
                    </Button>
                  </form>
                  <p className="mt-3">
                    Don't have an account? <a href="#"> Register</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
