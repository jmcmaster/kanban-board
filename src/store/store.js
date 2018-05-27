import { applyMiddleware, compose, createStore } from 'redux';
import reducers from '../reducers/reducers.js';
import initialState from './initialState';

const middleware = [];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware), ...enhancers),
);