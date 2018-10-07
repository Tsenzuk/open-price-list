import { connect } from 'react-redux';

import component from './TopPanelInput';

const mapStateToProps = (_, { value, placeholder, onChange }) => ({
  value, placeholder, onChange,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(component);
