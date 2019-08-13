import React from "react";
import "./../styles/contacted.css";
import logo2 from "./../img/logo-ALTA-v2.png";
import fb from "./../img/ic_fb.png";
import twitter from "./../img/ic-twitter.png";
import instagram from "./../img/ic-instagram.png";
import linkin from "./../img/ic-linkedin.png";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-4">
            <div className="footer-logo">
              <img src={logo2} width="109.54px" />
            </div>
          </div>
          <div
            className="col-md-3 col-4"
            style={{ borderRight: "1px solid #FFFFFF;" }}
          >
            <h6 style={{ fontSize: 14 }}>Social Media</h6>
            <a href="#">
              <img src={fb} />
            </a>
            <a href="#">
              <img src={twitter} />
            </a>
            <a href="#">
              <img src={instagram} />
            </a>
            <a href="#">
              <img src={linkin} />
            </a>
          </div>
          <div className="col-md-3 col-4">
            <div className="footer-copyright text-right">
              <h6 style={{ fontSize: 14 }}>Copyright © 2019 Alterra</h6>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
