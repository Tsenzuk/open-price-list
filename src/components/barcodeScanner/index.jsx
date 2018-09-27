import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Quagga from 'quagga';

class BarcodeScanner extends PureComponent {
  static propTypes = {
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
        readers: ['ean_reader'],
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
    Quagga.stop();
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
    const { onDetected } = this.props;
    onDetected(result);
  }

  render() {
    return (
      <div id="barcode-scanner" className="viewport" />
    );
  }
}

export default BarcodeScanner;
