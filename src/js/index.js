const Quagga = require('quagga');
const $ = require('jquery/dist/jquery.min.js');

window.jQuery = $;

require('bootstrap/dist/js/bootstrap.min.js');
require('bootstrap/dist/css/bootstrap.css');
require('../css/index.css');


if (!window.navigator || !window.navigator.getUserMedia) {
  throw new Error('Browser is not supported');
}

(() => {
  const { log, error } = console;
  const htmlConsole = document.querySelector('#scanner-console');
  const customLog = (...args) => {
    if (htmlConsole) {
      htmlConsole.innerHTML += `${args.join(' ')}\n`;
      const lines = htmlConsole.innerHTML.split('\n');
      if (lines.length > 100) {
        htmlConsole.innerHTML = lines.splice(-100).join('\n');
      }
    }
  };

  /* eslint-disable no-sequences, no-console */
  console.log = (...args) => (customLog.apply(console, args), log.apply(console, args));
  console.error = (...args) => (customLog.apply(console, ['!!!', ...args]), error.apply(console, args));
  /* eslint-enable */

  const buttonConsoleShow = document.querySelector('#scanner-console-show');
  if (buttonConsoleShow) {
    buttonConsoleShow.addEventListener('click', () => {
      if (htmlConsole) {
        $(htmlConsole).closest('.row').toggleClass('hidden');
      }
    });
  }
})();

let scannerIsRunning = false;

const barcodesStorage = {
  /**
   *
   * @param {string|number} code
   * @return {{code:string, name:string, prices: string[]}}
   */
  get(code) {
    const defaultValue = { code: '', name: '', prices: [] };
    if (!localStorage) {
      return defaultValue;
    }
    return JSON.parse(localStorage.getItem(code)) || defaultValue;
  },

  /**
   *
   * @param {*} product
   * @return {void}
   */
  set(product) {
    localStorage.setItem(product.code, JSON.stringify(product));
  },
};

class Product {
  constructor(product = {}) {
    this.code = product.code;
    this.name = product.name;
    this.prices = product.prices || [];
  }

  show() {
    document.querySelector('#scanner-table-code input').value = this.code;
    document.querySelector('#scanner-table-name input').value = this.name;
    document.querySelector('#scanner-table-price input').value = this.prices[this.prices.length - 1];
    $('#scanner-code').data('product', this);
  }

  save() {
    const currentPrice = document.querySelector('#scanner-table-price input').value;
    if (this.prices[this.prices.length - 1] !== currentPrice) {
      this.prices.push(currentPrice);
    }
    barcodesStorage.set({
      code: document.querySelector('#scanner-table-code input').value || this.code,
      name: document.querySelector('#scanner-table-name input').value || this.name,
      prices: this.prices,
    });
  }
}

const startScanner = () => {
  Quagga.init({
    inputStream: {
      name: 'Live',
      type: 'LiveStream',
      target: document.querySelector('#scanner-container'),
      constraints: {
        facingMode: 'environment',
      },
    },
    decoder: {
      readers: [
        // 'code_128_reader',
        'ean_reader',
        // 'ean_8_reader',
        // 'code_39_reader',
        // 'code_39_vin_reader',
        // 'codabar_reader',
        // 'upc_reader',
        // 'upc_e_reader',
        // 'i2of5_reader',
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
      console.error(error.name, error); // eslint-disable-line no-console
      return;
    }

    console.log('Initialization finished. Ready to start'); // eslint-disable-line no-console
    Quagga.start();

    // Set flag to is running
    scannerIsRunning = true;
  });

  Quagga.onProcessed((result) => {
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
  });


  Quagga.onDetected((result) => {
    console.log(`Barcode detected and processed : [${result.codeResult.code}]`, result); // eslint-disable-line no-console
    $(document).trigger('detected.barcode', [result.codeResult.code]);
  });
};

document
  .querySelector('#scanner-enable')
  .addEventListener('click', () => !scannerIsRunning && startScanner());

$(document).on('detected.barcode', (event, code) => {
  document.querySelector('#scanner-code').value = code;
  let product = barcodesStorage.get(code);
  product = new Product(product);
  if (product.name) {
    product.show();
  }
});

document.querySelector('#scanner-table-save').addEventListener('click', () => {
  const product = $('#scanner-code').data('product');
  if (product) {
    product.save();
  }
});

if (window.location.search) {
  const params = window.location.search
    .substring(1)
    .split('&')
    .map(param => param.split('='))
    .map(([key, value]) => ({ [key]: value }))
    .reduce((proto, obj) => Object.assign(proto, obj), {});

  if (params['scanner-code']) {
    const product = barcodesStorage.get(params['scanner-code']);
    new Product(product).show();
  }
}
