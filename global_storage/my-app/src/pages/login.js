import React from "react";
import Header from "./../components/Header";
import axios from "axios";
import { Redirect, Route } from "react-router-dom";
import Article from "./Article";
import { connect } from "unistore/react";
import { actions } from "./../store";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    e.preventDefault();
    const self = this;
    axios
      .post("https://resitalogin.free.beeceptor.com/login")
      .then(function(response) {
        console.log(response);
        // sessionStorage.setItem("user_name", response.data.user_name);
        // sessionStorage.setItem("email", response.data.email);
        // sessionStorage.setItem("is_login", response.data.is_login);
        self.props.setUser(response.data.user_name);
        self.props.setEmail(response.data.email);
        self.props.login();
        console.log(self.props);
        self.props.history.push("/profile");
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <form>
          <label for="nama">nama :</label>
          <input type="text" id="nama" />
          <br />
          <label for="email">email:</label>
          <input type="text" id="email" />
          <button type="submit" onClick={this.clickHandler}>
            Submit
          </button>
        </form>
        <Route path="/home" component={Article} />
      </div>
    );
  }
}

export default connect(
  "is_login,user_name,email",
  actions
)(Login);
