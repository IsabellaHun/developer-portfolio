import Layout from '../components/Layout.js';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import Script from 'next/script';
import * as ga from '../lib/google-analytics'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
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
          
          gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
        `}
      </Script>
      <Component {...pageProps} />
    </Layout>
  )}

export default MyApp
