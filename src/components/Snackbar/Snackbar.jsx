import { withSnackbar } from 'notistack';

export function Snackbar({ error, enqueueSnackbar }) {
  if (error) {
    enqueueSnackbar(error.toString(), 'error');
  }
  return null;
}

export default withSnackbar(Snackbar);
