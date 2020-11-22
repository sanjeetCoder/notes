import React, { Component } from "react";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/users/add" component={AddUser}></Route>
            <Route exact path="/users/edit/:id" component={EditUser}></Route>
            <Route exact path="/users/:id" component={User}></Route>

            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
