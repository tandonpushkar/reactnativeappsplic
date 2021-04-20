
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import { createLogger } from 'redux-logger';
const logger = createLogger();

let middleware = [];
middleware = [...middleware, thunk, logger];

const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middleware))
);
const getStore = () => {
    return store;
}

export { store, getStore };





