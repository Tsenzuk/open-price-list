import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Input from '@material-ui/core/Input';

import styles from './styles';

const BarcodeSearch = ({
  classes, value, placeholder, onChange,
}) => (
  <Input
    value={value}
    onChange={onChange}

    className={classes.codeInput}
    type="search"
    placeholder={placeholder}
    variant="filled"
    fullWidth
    disableUnderline
  />
);

BarcodeSearch.propTypes = {
  classes: PropTypes.shape(),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

BarcodeSearch.defaultProps = {
  classes: {},
  value: '',
  placeholder: 'Barcode',
};

export default withStyles(styles)(BarcodeSearch);
