import RootReducer from './reducer/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore } from 'redux';

const Store = createStore(RootReducer, composeWithDevTools());

export default Store;
