import React from "react";
import Navbar from "../navbar/Navbar";
import "./Signin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const image = require("../images/signup img.png");
  const [emailid, setEmailid] = useState("");
  const [passwordid, setPasswordid] = useState("");
  const [notification, setNotification] = useState("");
  
  const navigate = useNavigate();
  const homepage = () => {
    navigate("/");
  };
  const login = () => {
    if (emailid === "" && passwordid === "") {
      setNotification("please enter the email and password");
    } else if (
      localStorage.getItem("email") === emailid &&
      localStorage.getItem ("password")=== passwordid
    ) {
      
      homepage();
      setNotification("login successfully");
    } else {
      setNotification("please enter the correct email and password");
    }
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={image} alt="" height="400px" width="350px" />
          </div>
          <div className="col-md-6">
            <div className="form">
              <div className="register">
                <h3>Signin Here!!</h3>
              </div>

              <div className="detailformail">
                <label htmlFor="" className="col-md-6">
                  Email:-
                </label>
                <input
                  type="email"
                  className="col-md-6"
                  onChange={(e) => {
                    setEmailid(e.target.value);
                  }}
                />
              </div>
              <div className="detail">
                <label htmlFor="" className="col-md-6">
                  Password:-
                </label>
                <input
                  type="password"
                  className="col-md-6"
                  onChange={(e) => {
                    setPasswordid(e.target.value);
                  }}
                />
              </div>
              <div className="error">{notification}</div>
              <div className="btm">
                <button className="signin" onClick={() => login()}>
                  Signin
                </button>
              </div>
              <div className="logipage">
                Didn't have registred ? <a href="/signup">signup</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signin;
