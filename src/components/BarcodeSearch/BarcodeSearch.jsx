import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

import TopPanelInput from 'components/TopPanelInput';

class BarcodeSearch extends PureComponent {
  handleChange = ({ target: { value } }) => {
    const { onChange } = this.props;
    onChange(value);
  }

  render() {
    const {
      code, products, onChange,
    } = this.props;
    return (
      <Grid container spacing={16}>
        <Grid item xs>
          <TopPanelInput value={code} onChange={onChange} />
      </Grid>
        {products && code && (
          <IconButton color="inherit" to="/products/new" component={Link}>
            +
      </IconButton>
        )}
      </Grid>
    )
  }
}

BarcodeSearch.propTypes = {
  code: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.shape()),
  onChange: PropTypes.func.isRequired,
};

BarcodeSearch.defaultProps = {
  code: '',
  products: null,
};

export default BarcodeSearch;
