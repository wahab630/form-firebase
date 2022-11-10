import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            hello world
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/login" className="nav-link ">
                  Login page
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link ">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link ">
                  Platform
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link ">
                  Roadmap
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  FAQs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  Audit Report
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
