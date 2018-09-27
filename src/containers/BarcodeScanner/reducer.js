const initialState = {
  toggle: false,
  code: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_BARCODE': {
      return {
        ...state,
        toggle: action.toggle,
      };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
