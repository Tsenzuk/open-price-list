import { connect } from 'react-redux';

import component from './MainPage';

const mapStateToProps = ({ barcodeScanner: { code, isEnabled } }) => ({ code, isEnabled });

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(component);
