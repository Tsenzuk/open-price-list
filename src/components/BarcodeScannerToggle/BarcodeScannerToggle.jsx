import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

import styles from './styles';

export const BarcodeScannerToggle = ({ classes, isEnabled, onClick }) => (
  <Button
    className={classes.root}
    variant="fab"
    color={isEnabled ? 'secondary' : 'primary'}
    onClick={onClick}
  >
    {isEnabled ? 'Stop' : 'Scan'}
  </Button>
);

BarcodeScannerToggle.propTypes = {
  classes: PropTypes.shape(),
  isEnabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

BarcodeScannerToggle.defaultProps = {
  classes: {},
  isEnabled: false,
};

export default withStyles(styles)(BarcodeScannerToggle);
