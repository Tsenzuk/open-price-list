import React, { Fragment } from 'react';
import {
  compose,
  createStore,
} from 'redux';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import MainPage from 'components/MainPage';
import reducer from 'reducers/index';

const theme = createMuiTheme();

const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  const { devToolsExtension } = window;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const store = compose(...enhancers)(createStore)(reducer);

const App = () => (
  <Fragment>
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <MainPage />
      </MuiThemeProvider>
    </Provider>
  </Fragment>
);

export default App;
