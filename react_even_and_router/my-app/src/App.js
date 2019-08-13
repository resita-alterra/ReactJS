import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Article } from "./pages/Article";
import { Login } from "./pages/login";
import { Category } from "./pages/Category";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        {/* <Route path="/profile" component={Profi} /> */}
        <Route path="/home" component={Article} />
        <Route path="/category/:category" component={Category} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
