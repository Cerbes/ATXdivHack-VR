import { combineReducers } from 'redux';
import fears from './fearReducer'

const rootReducer = combineReducers({
  fears
});

export default rootReducer;
