import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import MainPage from 'components/MainPage';

const theme = createMuiTheme();

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <MainPage />
  </MuiThemeProvider>
);

export default App;
