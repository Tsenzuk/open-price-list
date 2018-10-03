import React from 'react';
import {
  compose,
  createStore,
} from 'redux';
import { Provider } from 'react-redux';

import MainPage from 'components/MainPage';
import reducer from 'reducers/index';

const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  const { devToolsExtension } = window;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const store = compose(...enhancers)(createStore)(reducer);

const App = () => (
  <Provider store={store}>
    <MainPage />
  </Provider>
);

export default App;
