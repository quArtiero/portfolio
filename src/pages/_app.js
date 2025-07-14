import '../styles/globals.css';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
