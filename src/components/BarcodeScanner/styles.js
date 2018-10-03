export default () => ({
  root: {
    '& > .viewport': {
      maxWidth: '100%',
      '& > video': {
        maxWidth: '100%',
      },
      '& > canvas': {
        left: 0,
        maxWidth: '100%',
        position: 'fixed',
      },
    },
  },
});
