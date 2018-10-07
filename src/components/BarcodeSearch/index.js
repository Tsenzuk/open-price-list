import { connect } from 'react-redux';

import { barcodeChange } from 'actions/barcodeScanner';
import component from './BarcodeSearch';

const mapStateToProps = ({ barcodeScanner: { code, products } }) => ({ code, products });

const mapDispatchToProps = {
  onChange: barcodeChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(component);
