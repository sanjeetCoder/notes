import React, { Component } from 'react';
import './App.css';
import User from './User'
import ErrorBound from './ErrorBound'

class App extends Component {

  render() {

    return (
      <div className="App">
        <h1>Error Boundary</h1>
        <p>Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, 
          and display a fallback UI instead of the component tree that crashed. 
          Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.</p>
       <ErrorBound >
       <User />

       </ErrorBound>
      </div>
    )
  }
}



export default App;
