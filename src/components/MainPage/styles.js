import { fade } from '@material-ui/core/styles/colorManipulator';

export default theme => ({
  root: {
    paddingTop: 7 * theme.spacing.unit,
    [theme.breakpoints.up('sm')]: {
      paddingTop: 8 * theme.spacing.unit,
    },
  },
  codeInput: {
    color: 'inherit',
    padding: 0.5 * theme.spacing.unit,
    borderRadius: theme.spacing.unit,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
});
