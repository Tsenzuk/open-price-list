import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Nav from 'components/nav';
import BarcodeScanner from 'components/barcodeScanner';

import * as reducers from './reducer';
import * as actions from './actions';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default function App() {
  return (
    <div>
      <Nav />
      <Provider store={store}>
        <BarcodeScanner toggle={store.barcodeScanner.toggle} />
      </Provider>
    </div>
  );
}
