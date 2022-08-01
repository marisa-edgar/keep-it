import React from 'react';
// import Head from 'next/head';
// import NextLink from 'next/link';
import { Typography, Container } from '@material-ui/core';
import useStyles from '../utilities/styles.js';
// import { Store } from '../utilities/Store'; 
// import Cookies from 'js-cookie';
import { CustomDrawer } from '../components/Drawer';

export default function Layout({ children }) {
  // const { state, dispatch } = useContext(Store);
  // const { darkMode } = state;
  // const theme = createMuiTheme({
  //   typography: {
  //     fontSize: '1.6rem',
  //     fontWeight: 400,
  //     margin: '1rem 0',
  //   },
  //   h2: {
  //     fontSize: '1.4rem',
  //     fontWeight: 400,
  //     margin : '1rem 0',
  //   },
  //   palette: {
  //     type: darkMode ? 'dark' : 'light',
  //     primary: {
  //       main: '#bfac5c',
  //     },
  //     secondary: {
  //       main: '#0d0019'
  //     }
  //   },
  // });
  const classes = useStyles();
  // const darkModeChangeHandler = () => {
  //   dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON'});
  //   const newDarkMode = !darkMode;
  //   Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  // };
  return (
    <div>
      {/* <Head>
        <title>{title ? `${title} - Keep it Classy` : 'Keep it Classy'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head> */}
      {/* <ThemeProvider theme={theme}>  */}
        {/* <CssBaseline /> */}
        {/* <AppBar position="static" className={classes.navbar}>
          <Toolbar> */}
            <CustomDrawer  />
            {/* <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>KEEP IT CLASSY</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
                ></Switch>
              <NextLink href="/cart" passHref>
                <Link>Cart</Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink> */}
            {/* </div> */}
          {/* </Toolbar>
        </AppBar> */}
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved. Keep it Classy llc.</Typography>
        </footer>
      {/* </ThemeProvider> */}
    </div>
  );
}
