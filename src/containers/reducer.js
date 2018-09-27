import { combineReducers } from 'redux';

import barcodeScanner from 'containers/BarcodeScanner/reducer';

const reducer = combineReducers({ barcodeScanner });

export default reducer;
