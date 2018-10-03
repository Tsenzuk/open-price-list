import { combineReducers } from 'redux';

import barcodeScanner from 'reducers/barcodeScanner';

const reducer = combineReducers({ barcodeScanner });

export default reducer;
