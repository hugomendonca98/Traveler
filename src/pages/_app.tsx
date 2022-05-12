import type { AppProps } from 'next/app';
import Head from 'next/head';
import ProgressBar from '@badrap/bar-of-progress';
import { GlobalStyles } from '../styles/GlobalStyles';
import Router from 'next/router';

const progress = new ProgressBar({
  size: 2,
  color: '#F25D27',
  className: 'bar-of-progress',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
