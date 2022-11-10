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
                <Link to="/" className="nav-link ">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link ">
                  Litepaper
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
