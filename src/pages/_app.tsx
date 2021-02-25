import { AppProps } from 'next/app';
import Head from 'next/head';
import { AuthenticationProvider } from '@/app/contexts/auth';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

// Styles
import '@/app/styles/globals.scss';
import '@/app/styles/components/scribble.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthenticationProvider user={pageProps.user}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AuthenticationProvider>
  )
}
