import { connect } from 'react-redux';

import component from './ProductsList';

const mapStateToProps = ({ barcodeScanner: { products } }) => (
  {
    products,
  });

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(component);
