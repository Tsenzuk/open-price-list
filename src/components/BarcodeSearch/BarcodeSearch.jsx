import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';

import styles from './styles';

const BarcodeSearch = ({
  classes, code, products, onChange, onAddClick,
}) => (
  <Grid container spacing={16}>
    <Grid item xs>
      <Input
        value={code}
        onChange={onChange}

        className={classes.codeInput}
        type="search"
        placeholder="Barcode"
        variant="filled"
        fullWidth
        disableUnderline
      />
    </Grid>
    {products && code && (
      <IconButton color="inherit" onClick={onAddClick}>
        +
      </IconButton>
    )}
  </Grid>
);

BarcodeSearch.propTypes = {
  classes: PropTypes.shape(),
  code: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.shape()),
  onChange: PropTypes.func.isRequired,
  onAddClick: PropTypes.func.isRequired,
};

BarcodeSearch.defaultProps = {
  classes: {},
  code: '',
  products: null,
};

export default withStyles(styles)(BarcodeSearch);
