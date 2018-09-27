import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Quagga from 'quagga';

class BarcodeScanner extends PureComponent {
  static propTypes = {
    toggle: PropTypes.bool.isRequired,
    onDetected: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Quagga.init({
      inputStream: {
        type: 'LiveStream',
        target: '#barcode-scanner',
        constraints: {
          width: 640,
          height: 480,
          facing: 'environment', // or user
        },
      },
      locator: {
        patchSize: 'medium',
        halfSample: true,
      },
      numOfWorkers: 2,
      decoder: {
        readers: ['code_128_reader'],
      },
      locate: true,
    }, (err) => {
      if (err) {
        return console.log(err);
      }
      return Quagga.start();
    });
    Quagga.onDetected(this.onDetected);
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
    const { toggle } = this.props;

    return (
      <div id="barcode-scanner" className="viewport" />
    );
  }
}

export default BarcodeScanner;
