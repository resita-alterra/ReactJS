import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import * as serviceWorker from "./serviceWorker";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Article } from "./pages/Article";

// ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<About />, document.getElementById("root"));
// ReactDOM.render(<Home />, document.getElementById("root"));
ReactDOM.render(<Contact />, document.getElementById("root"));
// ReactDOM.render(<Article />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
