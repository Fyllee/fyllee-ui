import { AppProps } from 'next/app';
import { Fragment } from 'react';
import Header from '../components/Header';

// Styles
import '../styles/globals.scss';
import '../styles/components/scribble.scss';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </Fragment>
  )
}
