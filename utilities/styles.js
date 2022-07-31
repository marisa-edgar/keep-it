import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#e8ddc3',
    '& a': {
      color: '#0d0019',
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
    marginTop: 50,
    marginBottom: 30,
    textAlign: 'left',
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
});
export default useStyles;
