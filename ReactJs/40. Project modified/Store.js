import { createStore} from 'redux';
import RootReducer from './Reducers/AmountReducer';

const store=createStore(RootReducer);

export default store;