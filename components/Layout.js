import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import useStyles from '../utilities/styles.js';

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Keep it Classy</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Keep it Classy</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. Keep it Classy llc.</Typography>
      </footer>
    </div>
  );
}
