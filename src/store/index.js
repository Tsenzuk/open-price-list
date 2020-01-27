import {
  compose,
  createStore as createReduxStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunkMiddleware from 'redux-thunk';

import products from './products';
import error from './error';

const middleware = [thunkMiddleware];
const enhancers = [];
const rootReducer = combineReducers({
  products,
  error,
});

if (process.env.NODE_ENV === 'development') {
  const { __REDUX_DEVTOOLS_EXTENSION__ } = window;
  if (typeof __REDUX_DEVTOOLS_EXTENSION__ === 'function') {
    enhancers.push(__REDUX_DEVTOOLS_EXTENSION__({ trace: true }));
  }
}

const composeStore = compose(
  applyMiddleware(
    ...middleware,
  ),
  ...enhancers,
)(createReduxStore);

export default function createStore(initialState) {
  return composeStore(rootReducer, initialState);
}
