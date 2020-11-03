import React, { Component } from "react";
import Fire from "./config/Fire";

export default class Login extends Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
    this.handlechange = this.handlechange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  }

  login(e) {
    e.preventDefault();
    Fire.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  signup(e) {
    e.preventDefault();
    Fire.auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handlechange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <form>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="enter email address"
            onChange={this.handlechange}
            value={this.state.email}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="enter password"
            onChange={this.handlechange}
            value={this.state.password}
          />

          <button onClick={this.login}>Login</button>
          <button onClick={this.signup}>Signup</button>
        </form>
      </div>
    );
  }
}
