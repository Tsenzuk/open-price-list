import React from 'react';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';

import createStore from '../store';

import ProductsPage from './ProductsPage';
import Snackbar from './Snackbar';

function App() {
  return (
    <Provider store={createStore()}>
      <SnackbarProvider maxSnack={3}>
        <Snackbar />
        <ProductsPage />
      </SnackbarProvider>
    </Provider>
  );
}

export default App;
