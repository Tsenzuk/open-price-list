import {
  TOGGLE_BARCODE,
  BARCODE_FOUND,
} from 'constants/barcodeScanner';

export const toggleBarcode = () => ({
  type: TOGGLE_BARCODE,
});

export const barcodeFound = ({ codeResult: { code } }) => ({
  type: BARCODE_FOUND,
  payload: code,
});
