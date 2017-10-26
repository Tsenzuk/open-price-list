import React, { Component, PropTypes } from 'react';
import Quagga from 'quagga';

class BarcodeScanner extends Component {
  static propTypes = {
    toggle: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    onDetected: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.state = {};
  }

  componentWillUnmount() {
    Quagga.offDetected(this.onDetected);
  }

  /**
   *
   *
   * @param {string} result
   * @memberof BarcodeScanner
   * @todo move to redux
   *
   */
  onDetected(result) {
    this.props.onDetected(result);
  }

  render() {
    const { toggle, dispatch } = this.props;

    return (
      <div id="barcode-scanner" className="viewport" />
    );
  }
}

export default BarcodeScanner;
