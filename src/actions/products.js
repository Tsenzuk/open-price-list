import { getAllProducts as getAllProductsFromDB } from '../store/indexedDb';

const INIT_INDEXED_DB_FAILED = 'INIT_INDEXED_DB_FAILED';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';

export const getAllProducts = () => (dispatch) => getAllProductsFromDB()
  .then((products) => {
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: products,
    });
  })
  .catch((error) => {
    dispatch({
      type: INIT_INDEXED_DB_FAILED,
      error,
    });
  });
