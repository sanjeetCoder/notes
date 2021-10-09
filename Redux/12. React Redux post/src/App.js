import React from 'react';
import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Forms from './components/forms';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/form' component={Forms} />
      </Router>
    </div>
  );
};

export default App;
