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
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    marginTop: 10,
    textAlign: 'center',
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
});
export default useStyles;
