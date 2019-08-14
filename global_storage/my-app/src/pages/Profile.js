import React from "react";
import { Redirect } from "react-router-dom";
import Header from "./../components/Header";
import { Footer } from "./../components/Footer";
import { actions } from "./../store";
import { connect } from "unistore/react";

const Profile = props => {
  // const is_login = JSON.parse(sessionStorage.getItem("is_login"));
  // const email = sessionStorage.getItem("email");
  // const user_name = sessionStorage.getItem("user_name");
  const is_login = props.is_login;
  const email = props.email;
  const user_name = props.user_name;

  if (is_login === false) {
    return <Redirect to={{ pathname: "/" }} />;
  } else {
    return (
      <div>
        <Header />
        <h2>Profile</h2>
        <p>
          <label>Email :</label> {email}{" "}
        </p>
        <p>
          <label>User name :</label> {user_name}{" "}
        </p>
        <Footer />
      </div>
    );
  }
};

export default connect(
  "is_login,user_name,email",
  actions
)(Profile);