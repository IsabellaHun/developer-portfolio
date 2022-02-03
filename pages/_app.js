import Layout from '../components/Layout.js';
import '../styles/globals.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Script
      strategy='lazyOnload'
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}/>
      <Script id='google-analytics-script' strategy='lazyOnload'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-ZRY8T4ZBRW');
        `}
      </Script>
      <Component {...pageProps} />
    </Layout>
  )}

export default MyApp
