import React from "react";
// import * from '../public/assets/img'
import logoalta from "./../img/logo-ALTA.png";
import matthew from "./../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import "./../styles/home.css";
import { Header } from "./../components/Header";

export function Home() {
  return (
    <div id="homebody">
      <div>
        <Header />
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="profpic">
                <div>
                  <img src={matthew} alt="profpic" />
                </div>
              </div>
            </div>
            <div className="col-md-8 col-sm-12">
              <div className="bio">
                <h3>Hi, my name is</h3>
                <h1>Anne Sullivan</h1>
                <h2>I build things for the web</h2>
                <a href="./contact.html">
                  <button type="button" class="btn btn-warning">
                    Get In Touch
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
