import { useEffect } from 'react';
import '../styles/globals.css';
import { StoreProvider } from '../utilities/Store';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;