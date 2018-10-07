import {
  TOGGLE_BARCODE,
  BARCODE_DETECTED,
  BARCODE_CHANGE,
  BARCODE_FOUND,
  BARCODE_ERROR,
  BARCODE_ERROR_CLEAR,
  PRODUCT_SUBMIT,
} from 'constants/barcodeScanner';
import store from '../store';

const mockLocalStorage = { getItem: () => { }, setItem: () => { }, removeItem: () => { } };

export const toggleBarcode = () => ({
  type: TOGGLE_BARCODE,
});

export const barcodeFound = ({ codeResult: { code } }) => ({
  type: BARCODE_DETECTED,
  payload: code,
});

const barcodeChangeActionCreator = value => ({
  type: BARCODE_CHANGE,
  payload: value,
});

const barcodeSearchActionCreator = (value) => {
  const storage = window.localStorage || mockLocalStorage;

  const itemsRaw = storage.getItem(value);
  const items = itemsRaw ? JSON.parse(itemsRaw) : [];

  return {
    type: BARCODE_FOUND,
    payload: items,
  };
};

export const barcodeChange = ({ target: { value } }) => {
  store.dispatch(barcodeSearchActionCreator(value));
  return barcodeChangeActionCreator(value);
};

export const barcodeParseError = error => ({
  type: BARCODE_ERROR,
  error,
});

export const barcodeErrorClear = () => ({
  type: BARCODE_ERROR_CLEAR,
});

export const productSubmit = () => ({
  type: PRODUCT_SUBMIT,
});
