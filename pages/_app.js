import 'tailwindcss/tailwind.css'
import '../style/global.css'

import Footer from '../components/Footer'
import LeftSidebar from '../components/LeftSidebar'
import Navbar from '../components/Navbar/Navbar'
import Head from 'next/head'



function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Krishna Jhapate - Full Stack Developer</title>
        <meta charSet="utf-8" />
        <meta name="description" content="I am a front-end creative developer based in Bhopal, India. I am a Computer Science undergraduate from Samrat Ashok Technological Institute." />

        <meta itemprop="name" content="Krishna Jhapate - Full Stack Developer" />
        <meta itemprop="description" content="I am a front-end creative developer based in Bhopal, India. I am a Computer Science undergraduate from Samrat Ashok Technological Institute." />
        <meta itemprop="image" content="http://res.cloudinary.com/mukulrajpoot/image/upload/v1632318807/portfolio/4_m6or3t.png" />

        <meta property="og:url" content="https://krishnajhapate.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Krishna Jhapate - Full Stack Developer" key="title" />
        <meta property="og:image" content="http://res.cloudinary.com/mukulrajpoot/image/upload/v1632318807/portfolio/4_m6or3t.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Krishna Jhapate - Full Stack Developer" />
        <meta name="twitter:description" content="I am a front-end creative developer based in Bhopal, India. I am a Computer Science undergraduate from Samrat Ashok Technological Institute." />
        <meta name="twitter:image" content="http://res.cloudinary.com/mukulrajpoot/image/upload/v1632318807/portfolio/4_m6or3t.png" />

      </Head>

      <Navbar />
      <LeftSidebar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
