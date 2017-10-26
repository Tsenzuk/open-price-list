
export default {};

export const toggleBarcode = toggle => ({
  type: 'TOGGLE_BARCODE',
  toggle,
});

export const barcodeFound = data => ({
  type: 'BARCODE_FOUND',
  data,
});
