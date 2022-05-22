import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps}>
    <Head>
      <meta name="propeller" content="a1d93045563729a7427e25e03b2ba12e"/>
      <title>Cutts</title>
      <link rel="icon" href="/favicon.png" />
    </Head>
  </Component>
}

export default MyApp
