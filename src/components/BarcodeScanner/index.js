import { connect } from 'react-redux';

import { barcodeChange, barcodeParseError } from 'actions/barcodeScanner';
import component from './BarcodeScanner';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  onDetected: barcodeChange,
  onError: barcodeParseError,
};

export default connect(mapStateToProps, mapDispatchToProps)(component);
