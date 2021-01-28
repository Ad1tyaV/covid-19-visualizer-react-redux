import { combineReducers } from 'redux';
//import userDataReducer from './userDataReducer';
import stateSelectReducer from './stateSelectReducer';
import totalDataReducer from './totalDataReducer'

const rootReducer = combineReducers({stateSelectReducer,totalDataReducer});

export default rootReducer;