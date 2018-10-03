import { connect } from 'react-redux';

import { barcodeFound } from 'actions/barcodeScanner';
import component from './BarcodeScanner';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  onDetected: barcodeFound,
};

export default connect(mapStateToProps, mapDispatchToProps)(component);
