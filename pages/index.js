import About from '../components/UI/About';
import Contact from '../components/UI/Contact';
import Hero from '../components/UI/Hero';
import Portfolio from '../components/UI/Portfolio';
import Services from '../components/UI/Services';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>TechieEmma Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}
