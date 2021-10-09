import React from 'react';
import './App.css';
import Home from './components/home';
import Forms from './components/forms';
import EditForm from './components/editForm';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const App = () => {
  return (
    <div className='App mt-2'>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/form' component={Forms} />
        <Route exact path='/edit/:id' component={EditForm} />
      </Router>
    </div>
  );
};

export default App;
