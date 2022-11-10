import React from "react";
import { FaMedium,FaTwitter,FaFacebookF,FaYoutube ,FaTelegram} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-3 pt-2">
              
              <p>Trading on Binance Smart Chain</p>
            </div>
            <div className="col-lg-4 offset-lg-5 text-center">
              <ul className="list-unstyled d-flex justify-content-center">
                <li className="me-2">  <FaMedium size={30}/> </li>
                <li className="me-2"> <FaTwitter size={30}/> </li>
                <li className="me-2">  <FaFacebookF size={30}/> </li>
                <li className="me-2">  <FaYoutube size={30}/> </li>
                <li className="me-2">  <FaTelegram size={30}/> </li>
              </ul>
              
            </div>
            
           
          </div>
          <div className="row">
          <div className="col-lg-12">
              <hr className="footer-line" />
            </div>
          </div>
          <div className="row">
          <div className="col-lg-12">
             <p className="text-center">Copyright © 2022 </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
