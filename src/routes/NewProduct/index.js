import { connect } from 'react-redux';

import { barcodeErrorClear } from 'actions/barcodeScanner';
import component from './NewProduct';

const mapStateToProps = ({ barcodeScanner: { code } }) => ({ code });

const mapDispatchToProps = {
  closeSnackbar: barcodeErrorClear,
};

export default connect(mapStateToProps, mapDispatchToProps)(component);
