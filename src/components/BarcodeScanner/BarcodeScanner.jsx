import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Quagga from 'quagga';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

export class BarcodeScanner extends PureComponent {
  static propTypes = {
    classes: PropTypes.shape(),
    onDetected: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired,
  }

  static defaultProps = {
    classes: {},
  }

  state = {
    errors: [],
    codes: [],
  }

  componentDidMount() {
    const { onError } = this.props;
    Quagga.init({
      inputStream: {
        name: 'Live',
        type: 'LiveStream',
        target: '#barcode-scanner',
        constraints: {
          facingMode: 'environment',
        },
      },
      decoder: {
        readers: [
          'ean_reader',
        ],
        debug: {
          showCanvas: true,
          showPatches: true,
          showFoundPatches: true,
          showSkeleton: true,
          showLabels: true,
          showPatchLabels: true,
          showRemainingPatchLabels: true,
          boxFromPatches: {
            showTransformed: true,
            showTransformedBox: true,
            showBB: true,
          },
        },
      },

    }, (error) => {
      if (error) {
        const { errors } = this.state;
        this.setState({
          errors: errors.concat(error.name),
        });
        onError(error.name);
        console.error(error.name, error);
        return;
      }

      console.log('Initialization finished. Ready to start');
      Quagga.start();
    });

    Quagga.onDetected(this.onDetected);
    Quagga.onProcessed(this.onProcessed);
  }

  componentWillUnmount() {
    Quagga.offDetected(this.onDetected);
    Quagga.offDetected(this.onProcessed);
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
  onDetected = (result) => {
    const { onDetected } = this.props;
    const { codes } = this.state;
    this.setState({
      codes: codes.concat(result.codeResult.code),
    });
    console.log(result);
    onDetected(result);
  }

  onProcessed = (result) => {
    const drawingCtx = Quagga.canvas.ctx.overlay;
    const drawingCanvas = Quagga.canvas.dom.overlay;

    if (result) {
      if (result.boxes) {
        drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute('width'), 10), parseInt(drawingCanvas.getAttribute('height'), 10));
        result
          .boxes
          .filter(box => box !== result.box)
          .forEach(box => Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: 'green', lineWidth: 2 }));
      }

      if (result.box) {
        Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: '#00F', lineWidth: 2 });
      }

      if (result.codeResult && result.codeResult.code) {
        Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
      }
    }
  }

  render() {
    const { errors, codes } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div id="barcode-scanner" className="viewport" />
        <div>
          {JSON.stringify(errors)}
        </div>
        <div>
          {JSON.stringify(codes)}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(BarcodeScanner);
