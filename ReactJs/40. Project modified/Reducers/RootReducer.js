import AmountReducer from './AmountReducer';

import {combineReducers} from 'redux';

const RootReducer= combineReducers({
    amount:AmountReducer
})

export default RootReducer;