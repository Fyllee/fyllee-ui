import { AppProps } from 'next/app';
import { Fragment } from 'react';
import Header from '../components/Header';

// Styles
import '../styles/globals.scss';
import '../styles/components/scribble.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
    </Fragment>
  )
}
