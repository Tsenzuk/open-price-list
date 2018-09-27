const initialState = {
  toggle: false,
  code: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_BARCODE': {
      return {
        ...state,
        toggle: action.payload,
      };
    }
    case 'BARCODE_FOUND': {
      return {
        ...state,
        code: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
