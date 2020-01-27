import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ProductsPage extends PureComponent {
  componentDidMount() {
    const { getAllProducts } = this.props;

    getAllProducts();
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        {products.length}
      </div>
    );
  }
}

ProductsPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  getAllProducts: PropTypes.func.isRequired,
};
