import React from "react";
import logoalta from "./../img/logo-ALTA.png";
import "./../styles/contacted.css";
import { Search } from "./Search";
import { Link } from "react-router-dom";

export function Header(props) {
  return (
    <header>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-2 col-sm-6">
            <div className="header-logo">
              <img src={logoalta} width="133.52px" />
            </div>
          </div>
          <Search onChange={props.changeHandler} keyword={props.keyword} />
          <div className="col-md-5 col-sm-6 align-items-center">
            <div className="float-right">
              <div className="header-menu">
                <nav className="navbar navbar-expand navbar-light justify-content-between">
                  <ul>
                    <li>
                      <Link to="/home">Home</Link>
                    </li>
                    <li>
                      <Link to="/">Login</Link>
                    </li>
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        onClick={() => {
                          sessionStorage.removeItem("is_login");
                        }}
                      >
                        Logout
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/entertainment">Entertainment</Link>
                    </li>
                    <li>
                      <Link to="/category/health">Health</Link>
                    </li>
                    <li>
                      <Link to="/category/sports">Sports</Link>
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
