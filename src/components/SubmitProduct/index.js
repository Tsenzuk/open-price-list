import { connect } from 'react-redux';

import { productSubmit } from 'actions/barcodeScanner';
import component from './SubmitProduct';

const mapStateToProps = () => ({ });

const mapDispatchToProps = {
  onClick: productSubmit,
};

export default connect(mapStateToProps, mapDispatchToProps)(component);
