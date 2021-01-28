import { createStore } from 'redux';
//import stateSelectReducer from '../reducers/stateSelectReducer';
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'
import rootReducer from '../reducers/index';

const stateStore = createStore(rootReducer,applyMiddleware(thunk));

export default stateStore;