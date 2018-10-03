import { connect } from 'react-redux';

import { barcodeFound } from 'actions/barcodeScanner';
import BarcodeScanner from './BarcodeScanner';

const mapStateToProps = state => (state);

const mapDispatchToProps = {
  onDetected: barcodeFound,
};

export default connect(mapStateToProps, mapDispatchToProps)(BarcodeScanner);
