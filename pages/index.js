import Head from 'next/head'

import PROJECTS_DATA from '../public/assets/projects';
import Header from '../components/sections/Header';
import About from '../components/sections/About';
import Featured from '../components/sections/Featured';
import Whyme from '../components/sections/Whyme';
import Contact from '../components/sections/Contact';


export async function getStaticProps() {
  return {
    props: {
      projects: PROJECTS_DATA
    }
  }
}

export default function Home({ projects }) {


  return (
    <div className="min-h-screen px-3 overflow-hidden">

      <Head>
        <title>Krishna Jhapate</title>
        <meta charSet="utf-8" />
        <meta name="description" content="I am a front-end creative developer based in Bhopal, India. I am a Computer Science undergraduate from Samrat Ashok Technological Institute." />
        <meta name="keywords" content="Developer, Next Developer, Krishna Jhapate, Full-stack Developer, Front-End Developer ,Backend Developer, React Developer, Django Developer" />
        <meta name="author" content="Krishna Jhapate" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:url" content="https://krishnajhapate.com/" key="ogurl" />
        <meta property="og:image" content="https://res.cloudinary.com/mukulrajpoot/image/upload/v1632318807/portfolio/4_m6or3t.png" key="ogimage" />
        <meta property="og:site_name" content="Krishna Jhapate" key="ogsitename" />
        <meta property="og:title" content="Krishna Jhapate - Full Stack Developer" key="title" />
        <meta property="og:description" content="I am a full stack developer based in Bhopal, India. I am a Computer Science undergraduate from Samrat Ashok Technological Institute and also did some coursework." key="description" />
      </Head>

      <Header />

      <About />

      <Featured projects={projects} />

      <Whyme />

      <Contact />
    </div>
  )
}
