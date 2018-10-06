import {
  compose,
  createStore,
} from 'redux';

import reducer from 'reducers/index';

const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  const { devToolsExtension } = window;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const store = compose(...enhancers)(createStore)(reducer);

export default store;
