import React from "react";

import createStore from "unistore";
import { Provider, connect } from "unistore/react";

let store = createStore({ count: 0, judul: "" });

let actions = store => ({
  increment(state) {
    return { count: state.count + 1 };
  }
});

let Counter = connect(
  "count",
  actions
)(({ count, increment }) => (
  <div>
    <div>Count : {count}</div>
    <button onClick={increment}>Test</button>
  </div>
));

export default () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);
