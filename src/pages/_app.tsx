import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { AuthenticationProvider } from '@/contexts/auth';

// Styles
import '@/styles/globals.scss';
import '@/styles/components/scribble.scss';

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => (
  <AuthenticationProvider user={pageProps.user}>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </AuthenticationProvider>
);

export default App;
