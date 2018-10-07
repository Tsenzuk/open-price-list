import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

import styles from './styles';

export const BarcodeScannerToggle = ({ classes, onClick }) => (
  <Button
    className={classes.root}
    variant="fab"
    color="primary"
    onClick={onClick}
  >
    +
  </Button>
);

BarcodeScannerToggle.propTypes = {
  classes: PropTypes.shape(),
  onClick: PropTypes.func.isRequired,
};

BarcodeScannerToggle.defaultProps = {
  classes: {},
};

export default withStyles(styles)(BarcodeScannerToggle);
