import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
// import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';

import TopPanelInput from 'components/TopPanelInput';
import SubmitProduct from 'components/SubmitProduct';

export const NewProduct = ({
  classes, error, code, closeSnackbar,
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
            <IconButton color="inherit" to="/" component={Link}>
              {'<'}
            </IconButton>
          </Grid>
          <Grid item>
            <Typography
              variant="title"
              color="inherit"
              noWrap
            >
              New Product
            </Typography>
          </Grid>
          <Grid item xs>
            <TopPanelInput value={code} onChange={() => {}} />
          </Grid>
        </Grid>


      </Toolbar>
    </AppBar>
    <main className={classes.root}>
      <SubmitProduct />
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

NewProduct.propTypes = {
  classes: PropTypes.shape(),
  error: PropTypes.string,
  code: PropTypes.string,
  closeSnackbar: PropTypes.func.isRequired,
};

NewProduct.defaultProps = {
  classes: {},
  error: null,
  code: '',
};

export default NewProduct;
