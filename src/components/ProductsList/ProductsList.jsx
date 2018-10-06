import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

const ProductsList = ({ classes, products }) => {
  if (!products) {
    return null;
  }
  if (!products.length) {
    return (
      <Grid container justify="center" alignItems="center" className={classes.root}>
        <Grid item container justify="center">
          <Typography
            gutterBottom
            variant="headline"
            component="h2"
          >
            No products found
          </Typography>
        </Grid>
      </Grid>
    );
  }
  return products.map(item => (
    <Card>
      <CardContent>
        <Typography
          gutterBottom
          variant="headline"
          component="h2"
        >
          {item.name}
        </Typography>
      </CardContent>
    </Card>
  ));
};

ProductsList.propTypes = {
  classes: PropTypes.shape(),
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })),
};

ProductsList.defaultProps = {
  classes: {},
  products: null,
};

export default withStyles(styles)(ProductsList);
