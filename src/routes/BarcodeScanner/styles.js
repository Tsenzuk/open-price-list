export default theme => ({
  root: {
    paddingTop: 7 * theme.spacing.unit,
    height: '100vh',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 8 * theme.spacing.unit,
    },
  },
});
