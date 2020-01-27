import {
  GET_ALL_PRODUCTS,
} from '../actions/products';

const initialState = [];

export default function (state = initialState, { type, payload }) {
  switch (type) {
  case GET_ALL_PRODUCTS: return payload;
  default: return state;
  }
}
