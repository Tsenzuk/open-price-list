import React from 'react';
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import BarcodeScanner from 'routes/BarcodeScanner';
import NewProduct from 'routes/NewProduct';

const theme = createMuiTheme();

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Route exact path="/" component={BarcodeScanner} />
    <Route exact path="/products/new" component={NewProduct} />
  </MuiThemeProvider>
);

export default App;
