import { AppProps } from 'next/app';
import { Fragment } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Styles
import '../styles/globals.scss';
import '../styles/components/scribble.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  )
}
