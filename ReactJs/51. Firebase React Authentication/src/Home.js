import React, { Component } from "react";
import Fire from "./config/Fire";
export default class Home extends Component {
  logout() {
    Fire.auth().signOut();
  }
  render() {
    return (
      <div>
        <p>You are Logged in !!!</p>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}
