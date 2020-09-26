import React, {Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { render } from 'react-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';


class App extends Component{

  render(){
    
    return(
      <div className="App">
        <Router>
            <Link to="" style={{marginLeft:20,fontSize:20}}>Home</Link>
            <Link to="/about"  style={{marginLeft:20,fontSize:20}}>About</Link>
            <Link to="/contact"  style={{marginLeft:20,fontSize:20}}>Contact</Link>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>

        
        </Router>
      </div>
    )
  }
}



export default App;
