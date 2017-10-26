const initialState = {
  barcodeScanner: {
    toggle: false,
    code: false,
  },
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_BARCODE': {
      return state
        .setIn(['barcodeScanner', 'toggle'], action.toggle);
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
