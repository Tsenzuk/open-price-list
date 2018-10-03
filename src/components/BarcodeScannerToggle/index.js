import { connect } from 'react-redux';

import { toggleBarcode } from 'actions/barcodeScanner';
import component from './BarcodeScannerToggle';

const mapStateToProps = ({ barcodeScanner: { isEnabled } }) => ({ isEnabled });

const mapDispatchToProps = {
  onClick: toggleBarcode,
};

export default connect(mapStateToProps, mapDispatchToProps)(component);
