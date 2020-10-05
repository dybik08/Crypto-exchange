import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import AppReducer from './index';

const store = createStore(AppReducer, applyMiddleware(thunk));

export default store;