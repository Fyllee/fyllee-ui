import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import { AuthenticationProvider } from '@/app/contexts/auth';

// Styles
import '@/app/styles/globals.scss';
import '@/app/styles/components/scribble.scss';

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
