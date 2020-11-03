import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";

// Action

const Increment = () => {
  return {
    type: "Increment",
  };
};
// Reducer

const Reducer = (state = 0, action) => {
  switch (action.type) {
    case "Increment":
      return state + 1;
    default:
      return state;
  }
};

// Store
const store = createStore(Reducer);

//Subscribe

store.subscribe(() => console.log(store.getState()));

// Dispatch

store.dispatch(Increment());
store.dispatch(Increment());
store.dispatch(Increment());
store.dispatch(Increment());
store.dispatch(Increment());
store.dispatch(Increment());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
