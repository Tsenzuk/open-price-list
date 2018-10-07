import { connect } from 'react-redux';

import { barcodeErrorClear } from 'actions/barcodeScanner';
import component from './BarcodeScanner';

const mapStateToProps = ({ barcodeScanner: { isEnabled, products, error } }) => (
  {
    isEnabled,
    products,
    error,
  });

const mapDispatchToProps = {
  closeSnackbar: barcodeErrorClear,
};

export default connect(mapStateToProps, mapDispatchToProps)(component);
