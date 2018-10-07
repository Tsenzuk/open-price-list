import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';

import BarcodeSearch from 'components/BarcodeSearch';
import BarcodeScanner from 'components/BarcodeScanner';
import BarcodeScannerToggle from 'components/BarcodeScannerToggle';
import ProductsList from 'components/ProductsList';

import styles from './styles';

export const MainPage = ({
  classes, isEnabled, error, closeSnackbar,
}) => (
  <Fragment>
    <AppBar>
      <Toolbar>
        <Grid
          alignItems="center"
          container
          spacing={8}
        >
          <Grid item>
            <Typography
              variant="title"
              color="inherit"
              noWrap
            >
              Scanner
            </Typography>
          </Grid>
          <Grid item xs>
            <BarcodeSearch />
          </Grid>
        </Grid>


      </Toolbar>
    </AppBar>
    <main className={classes.root}>
      <BarcodeScannerToggle />
      {isEnabled
        ? (
          <BarcodeScanner />
        )
        : (
          <ProductsList />
        )
      }
    </main>
    <Snackbar
      open={!!error}
      message={<span>{error}</span>}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      onClose={closeSnackbar}
    />
  </Fragment>
);

MainPage.propTypes = {
  classes: PropTypes.shape(),
  isEnabled: PropTypes.bool,
  error: PropTypes.string,
  closeSnackbar: PropTypes.func.isRequired,
};

MainPage.defaultProps = {
  classes: {},
  isEnabled: false,
  error: null,
};

export default withStyles(styles)(MainPage);
