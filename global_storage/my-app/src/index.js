import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "unistore/react";
import { Counter } from "./pages/Counter";
import { store } from "./store";

// ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<Counter />, document.getElementById("root"));
// ReactDOM.render(<About />, document.getElementById("root"));
// ReactDOM.render(<Home />, document.getElementById("root"));
// ReactDOM.render(<Contact />, document.getElementById("root"));
// ReactDOM.render(<Article />, document.getElementById("root"));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();