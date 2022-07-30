import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  body: {
    backgroundColor: '#e8ddc3',
  },
  navbar: {
    backgroundColor: '#0d0019',
    '& a': {
      color: '#fafdf3',
      marginLeft: 10,
    },
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    textAlign: 'center',
  },
});
export default useStyles;
