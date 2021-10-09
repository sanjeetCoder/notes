import RootReducer from './reducer/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { createStore } from 'redux';

const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default Store;
