import {
  TOGGLE_BARCODE,
  BARCODE_FOUND,
} from 'constants/barcodeScanner';

const initialState = {
  isEnabled: false,
  code: '',
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BARCODE: {
      return {
        ...state,
        isEnabled: !state.isEnabled,
      };
    }
    case BARCODE_FOUND: {
      return {
        ...state,
        code: action.payload,
        isEnabled: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
