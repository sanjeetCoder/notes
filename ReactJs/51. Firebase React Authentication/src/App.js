import React, { Component } from "react";
import "./App.css";
import Fire from "./config/Fire";
import Home from "./Home";
import Login from "./Login";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Firbase Authenticaion</h1>
        {this.state.user ? <Home /> : <Login />}
      </div>
    );
  }
}
