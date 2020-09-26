import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import NavBarMenu from './components/NavBarMenu'
import Home from './components/Home';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantUpdate from './components/RestaurantUpdate';
import RestaurantsList from './components/RestaurantsList';
import Login from './components/Login';
import Logout from './components/Logout';
import Protected from './components/Protected'

class App extends React.Component {

  render() {

    return (
      <div className="App">

        <Router>
          {/* <Route path='/list'><RestaurantsList /></Route>
          <Route path='/create'><RestaurantCreate /></Route>
          <Route path='/search'><RestaurantSearch /></Route>
          <Route path='/update/:id' render ={props=> (<RestaurantUpdate{...props}/>)}></Route>
          <Route path='/details'><RestaurantDetail /></Route> */}
          <Route path='/login' render ={props=> (<Login{...props}/>)}></Route>
          <Route path='/logout'><Logout /></Route>

          {/* <Route exact path='/'><Home /></Route> */}
          <Protected exact path="/list" component={RestaurantsList}/>
          <Protected exact path="/create" component={RestaurantCreate}/>
          <Protected exact path="/search" component={RestaurantSearch}/>
          <Protected exact path="/update/:id" component={RestaurantUpdate}/>
          <Protected exact path="/details" component={RestaurantDetail}/>

          <Protected exact path="/" component={Home}/>


        </Router>

      </div>
    );
  }
}
export default App;
