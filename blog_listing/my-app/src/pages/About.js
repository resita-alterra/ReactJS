import React from "react";
import matthew from "./../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import dot from "./../img/img-dot.png";
import { Header } from "./../components/Header";
import { Footer } from "./../components/Footer";
import "./../styles/main.css";

export function About() {
  return (
    <div id="aboutbody">
      <Header />
      <div className="container-fluid about-me">
        <div className="container">
          <div>ABOUT ME.</div>
        </div>
      </div>
      <div className="container aku">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="hello-me">
                <p>
                  Hello! I’m Anne Sullivan, a full-stack engineer based in
                  Malang, IDN who enjoys building things that live on the
                  internet. I develop exceptional websites and web apps that
                  provide intuitive, pixel-perfect user interfaces with
                  efficient and modern backends.
                </p>
                <p>
                  Shortly after graduating from Alterra Academy, I joined the
                  engineering team at Alterra where I work on a wide variety of
                  interesting and meaningful projects on a daily basis.
                </p>
                <p>Here’s few technologies I’ve been working with recently :</p>
              </div>
            </div>
            <div className="row">
              <div className="table-skill">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>HTML & CSS</td>
                      <td>Serverless</td>
                      <td>Scrum</td>
                    </tr>
                    <tr>
                      <td>Programming</td>
                      <td>Restful API</td>
                      <td>Test-Driven Dev</td>
                    </tr>
                    <tr>
                      <td>Database</td>
                      <td>Javascript</td>
                      <td>Software Testing</td>
                    </tr>
                    <tr>
                      <td>Git & Github</td>
                      <td>Single Page App</td>
                      <td>UX/UI Designer</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              <div className="gambar">
                <img
                  src={matthew}
                  width="249"
                  height="248"
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div className="dot-dot">
                <img src={dot} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
      />
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"
      />
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"
      />
    </div>
  );
}
