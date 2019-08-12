import React from "react";
import logoalta from "./assets/img/logo-ALTA-v2.png";

export function Contact() {
  return (
    <div className="m-0 p-0" id="contactbody">
      <div className="container-fluid">
        <div className="row" id="contactrow">
          <div className="col-md-5 col-sm-12 m-0 p-0">
            <div className="samping m-0 p-0" id="contactsamping">
              <div className="boxed m-0 p-0">
                <img src={logoalta} alt="logo-ALTA-v2" id="contactimg" />
              </div>
            </div>
          </div>
          <div className="col-md-7 col-sm-12 m-0 p-0">
            <div className="contact-form">
              <form action="./home.html">
                <p>Contact Us</p>
                <div className="form-group">
                  <label for="fullname">
                    Full Name<span class="color">*</span>
                  </label>

                  <input
                    type="text"
                    class="form-control"
                    id="fullname"
                    placeholder="Your Full Name..."
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">
                    Email Address<span class="color">*</span>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="example@domain.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="phone">
                    Phone Number<span class="color">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="phone"
                    placeholder="08543890****"
                    required
                  />
                </div>

                <div className="form-group">
                  <p>Nationality</p>
                  <select name="nat" id="nat" class="form-control">
                    <option>Selected...</option>
                    <option value="indo">Indonesia</option>
                    <option value="malay">Malaysia</option>
                    <option value="singa">Singaporean</option>
                    <option value="aus">Australian</option>
                  </select>
                </div>

                <div className="form-group">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea
                    className="form-control pesan"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  />
                </div>

                <div className="submit">
                  <button
                    id="contactbtn"
                    type="submit"
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
