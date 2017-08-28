require('bootstrap/dist/css/bootstrap.css');
const Quagga = require('quagga');

if (!window.navigator || !window.navigator.getUserMedia) {
  throw new Error('Browser is not supported')
}

(() => {
  const { log, error } = console;
  const customLog = (...arguments) => {
    const htmlConsole = document.querySelector('#scanner-console');
    if (htmlConsole) {
      htmlConsole.innerHTML += `${arguments.join(' ')}\n`;
      const lines = htmlConsole.innerHTML.split('\n');
      if (lines.length > 100 ) {
        htmlConsole.innerHTML = lines.splice(-100).join('\n');
      }
    }
  }
  console.log = (...arguments) => (customLog.apply(console, arguments),log.apply(console, arguments));
  console.error = (...arguments) => (customLog.apply(console, ['!!!', ...arguments]),error.apply(console, arguments));
})()

let _scannerIsRunning = false;

const startScanner = () => {
  Quagga.init({
    inputStream: {
      name: "Live",
      type: "LiveStream",
      target: document.querySelector('#scanner-container'),
      constraints: {
        width: 480,
        height: 320,
        facingMode: "environment"
      },
    },
    decoder: {
      readers: [
        "code_128_reader",
        "ean_reader",
        "ean_8_reader",
        "code_39_reader",
        "code_39_vin_reader",
        "codabar_reader",
        "upc_reader",
        "upc_e_reader",
        "i2of5_reader"
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
          showBB: true
        }
      }
    },

  }, (error) => {
    if (error) {
      console.log(error.name, error);
      return;
    }

    console.log('Initialization finished. Ready to start');
    Quagga.start();

    // Set flag to is running
    _scannerIsRunning = true;
  });

  Quagga.onProcessed((result) => {
    const drawingCtx = Quagga.canvas.ctx.overlay,
      drawingCanvas = Quagga.canvas.dom.overlay;

    if (result) {
      if (result.boxes) {
        drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
        result
          .boxes
          .filter(box => box !== result.box)
          .forEach(box => Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: "green", lineWidth: 2 }));
      }

      if (result.box) {
        Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: "#00F", lineWidth: 2 });
      }

      if (result.codeResult && result.codeResult.code) {
        Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
      }
    }
  });


  Quagga.onDetected((result) => {
    console.log(`Barcode detected and processed : [${result.codeResult.code}]`, result);
  });

}

document.querySelector('#scanner-enable').addEventListener('click', () => !_scannerIsRunning && startScanner())
