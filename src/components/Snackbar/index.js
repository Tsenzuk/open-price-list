import { connect } from 'react-redux';

import Component from './Snackbar';

const mapStateToProps = function mapStateToProps({ error }) {
  return {
    error,
  };
};

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
