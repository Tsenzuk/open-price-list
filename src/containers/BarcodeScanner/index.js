import { connect } from 'react-redux';

import BarcodeScanner from 'components/BarcodeScanner';
import { barcodeFound } from './actions';

const mapStateToProps = state => (state);

const mapDispatchToProps = {
  onDetected: barcodeFound,
};

export default connect(mapStateToProps, mapDispatchToProps)(BarcodeScanner);
