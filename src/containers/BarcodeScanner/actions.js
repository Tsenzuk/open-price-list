
export default {};

export const toggleBarcode = toggle => ({
  type: 'TOGGLE_BARCODE',
  payload: toggle,
});

export const barcodeFound = ({ codeResult: { code } }) => ({
  type: 'BARCODE_FOUND',
  payload: code,
});
