import { connect } from 'react-redux';

import { getAllProducts } from '../../actions/products';

import Component from './ProductsPage';

const mapStateToProps = function mapStateToProps({ products }) {
  return {
    products,
  };
};

const mapDispatchToProps = {
  getAllProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
