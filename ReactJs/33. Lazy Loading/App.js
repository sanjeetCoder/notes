import React, { Suspense, lazy} from 'react';
import './App.css';
// import Home from './Home';
// import About from './About';

const Home =lazy(()=>import('./Home'))
const About =lazy(()=>import('./About'))

function App() {
  return (
    <div className="App">
      <h1>Lazy Loading</h1>
  <Suspense fallback={<div>Please wait, Home is loading ....</div>} >
         <Home />
      </Suspense>

      <Suspense fallback={<div>Please wait, About is loading ....</div>} >
         <About/>
      </Suspense>
    </div>
  );
}

export default App;
