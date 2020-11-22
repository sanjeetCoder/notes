import React from "react";
import Contacts from "./components/elements/contacts/Contacts";
import Navbar from "./components/elements/Navbar";
import Home from "./Home";
import ClippedDrawer from "./Material";
import "./styles/App.scss";
import { Provider } from "react-redux";
import Store from "./Store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from "./components/elements/contacts/AddContact";
import EditContact from "./components/elements/contacts/EditContact";

const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/material" component={ClippedDrawer} />

                <Route exact path="/contacts/add" component={AddContact} />
                <Route
                  exact
                  path="/contacts/edit/:id"
                  component={EditContact}
                />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
