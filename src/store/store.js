import { applyMiddleware, compose, createStore } from 'redux';
import reducers from '../reducers/reducers.js';
// import initialState from './initialState';
import { loadState, saveState } from '../localStorage.js';
import throttle from 'lodash/throttle';

const persistedState = loadState();
const middleware = [];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(applyMiddleware(...middleware), ...enhancers),
);

store.subscribe(throttle(() => {
  saveState({
    boards: store.getState().boards
  });
}), 1000);

export default store;