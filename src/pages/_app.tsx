import type { AppProps } from 'next/app';
import Head from 'next/head';
import ProgressBar from '@badrap/bar-of-progress';
import { GlobalStyles } from '../styles/GlobalStyles';
import Router from 'next/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MySuccessMessageProvider } from '@/contexts/MySuccessMessageContext';

/*const progress = new ProgressBar({
  size: 2,
  color: '#F25D27',
  className: 'bar-of-progress',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);*/

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyles />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{ zIndex: 90000 }}
      />
      <MySuccessMessageProvider>
        <Component {...pageProps} />
      </MySuccessMessageProvider>
    </>
  );
}

export default MyApp;
