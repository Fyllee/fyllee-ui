import { AppProps } from 'next/app';
import { Fragment } from 'react';
import Header from '../components/Header';
import '../styles/globals.scss';
// import '../styles/vendors/highlight.js/one-dark.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
    </Fragment>
  )
}
