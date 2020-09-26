import React from 'react';
import './App.css';
import Container from './Components/Container';
import { Provider } from 'react-redux';
import store from './Store';
// import Intro from './Components/Intro';
// import Logo from './Components/Logo';
const App = () => {

return (
      <Provider store={store}>
      <div className="App">
        {/* <Intro />
        <Logo /> */}

        <Container />
      </div>

      </Provider>
  );
};


export default App;
