// reducers/index.js
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import interchangeAlphbet from './interchangeAlphbet';

const rootReducer = combineReducers({
  counter: counterReducer,
  alphabet: interchangeAlphbet
  // Add more reducers here if needed
});

export default rootReducer;