import { connect } from 'react-redux';

import { barcodeChange, openNewProduct } from 'actions/barcodeScanner';
import component from './BarcodeSearch';

const mapStateToProps = ({ barcodeScanner: { code, products } }) => ({ code, products });

const mapDispatchToProps = {
  onChange: barcodeChange,
  onAddClick: openNewProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(component);
