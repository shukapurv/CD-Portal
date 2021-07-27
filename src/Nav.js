import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "../node_modules/react-router-dom";
import "./nav.css";
import google from "./images/search.png";

const Nav = () => {
  return (
    <Router className="container-fluid">
      <nav className="navbar navbar-custom navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            CA Ecell
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/perks"
                >
                  Perks
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/contact"
                >
                  Contact us
                </Link>
              </li>
              <li style={{position: 'absolute',right: '100px',bottom: '20px'}}>
                <button type="button" className="btn btn-light" style={{ display:'flex'}}>
                  <img src={google} alt="" style={{ height: "20px"}}/>
                  <div class = "vertical"><p style={{paddingLeft:'5px'}}>Sign in</p></div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Router>
  );
};

export default Nav;
