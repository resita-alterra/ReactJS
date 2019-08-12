import React from "react";
import logoalta from "./../img/logo-ALTA.png";
import "./../styles/contacted.css";

export function Header() {
  return (
    <header>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3 col-sm-6">
            <div className="header-logo">
              <img src={logoalta} width="133.52px" />
            </div>
          </div>
          <div className="col-md-5 align-items-center">
            <img
              src="https://cdn2.iconfinder.com/data/icons/material-line-thin/1024/search-512.png"
              style={{ height: 35, width: 35, display: "inline" }}
            />
            <form style={{ display: "inline" }}>
              <input />
            </form>
          </div>
          <div className="col-md-4 col-sm-6 align-items-center">
            <div className="float-right">
              <div className="header-menu">
                <nav class="navbar navbar-expand navbar-light justify-content-between">
                  <ul>
                    <li>
                      <a href="home.html">HOME</a>
                    </li>
                    <li>
                      <a href="#">ABOUT</a>
                    </li>
                    <li>
                      <a href="#">EXPERIENCE</a>
                    </li>
                    <li>
                      <a href="contact.html">CONTACT</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
