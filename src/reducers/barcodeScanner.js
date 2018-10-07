import {
  TOGGLE_BARCODE,
  BARCODE_DETECTED,
  BARCODE_CHANGE,
  BARCODE_FOUND,
  BARCODE_ERROR,
  BARCODE_ERROR_CLEAR,
} from 'constants/barcodeScanner';

const initialState = {
  isEnabled: false,
  code: '',
  products: null,
  error: null,
  isNewProductOpen: false,
};

const appReducer = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case TOGGLE_BARCODE: {
      return {
        ...state,
        isEnabled: !state.isEnabled,
      };
    }
    case BARCODE_CHANGE:
    case BARCODE_DETECTED: {
      return {
        ...state,
        code: payload,
        isEnabled: false,
      };
    }
    case BARCODE_FOUND: {
      return {
        ...state,
        products: payload,
        isEnabled: false,
      };
    }
    case BARCODE_ERROR: {
      return {
        ...state,
        isEnabled: false,
        error,
      };
    }
    case BARCODE_ERROR_CLEAR: {
      return {
        ...state,
        error: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
