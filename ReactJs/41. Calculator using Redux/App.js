import React from 'react';
import './App.css';
import Container from './Components/Container';
import {Provider} from 'react-redux';
import Store from './Store/Store';

function App() {
  return (

    <Provider store={Store}>
      <div className="App">
          <Container/>
      </div>
    </Provider>
  );
}

export default App;
