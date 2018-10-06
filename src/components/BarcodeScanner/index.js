import { connect } from 'react-redux';

import { barcodeFound, barcodeParseError } from 'actions/barcodeScanner';
import component from './BarcodeScanner';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  onDetected: barcodeFound,
  onError: barcodeParseError,
};

export default connect(mapStateToProps, mapDispatchToProps)(component);
