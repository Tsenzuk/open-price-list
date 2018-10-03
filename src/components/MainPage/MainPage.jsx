import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';

import BarcodeScanner from 'components/BarcodeScanner';
import BarcodeScannerToggle from 'components/BarcodeScannerToggle';

import styles from './styles';

export const MainPage = ({ classes, code, isEnabled }) => (
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
            <Input
              value={code}
              className={classes.codeInput}
              type="search"
              placeholder="Barcode"
              variant="filled"
              fullWidth
              disableUnderline
            />
          </Grid>
        </Grid>


      </Toolbar>
    </AppBar>
    <main className={classes.root}>
      <BarcodeScannerToggle />
      {isEnabled && (<BarcodeScanner />)}
    </main>
  </Fragment>
);

MainPage.propTypes = {
  classes: PropTypes.shape(),
  code: PropTypes.string,
  isEnabled: PropTypes.bool,
};

MainPage.defaultProps = {
  classes: {},
  code: '',
  isEnabled: false,
};

export default withStyles(styles)(MainPage);
