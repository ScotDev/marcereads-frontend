import React, { useState, useEffect } from 'react';
import TagManager from 'react-gtm-module';

import { Layout } from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  // G-G6CLWVDGE1


  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    TagManager.initialize({ gtmId: 'G-G6CLWVDGE1' });
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };



  return (
    <Layout>
      <Component width={width} {...pageProps} />
    </Layout>
  )
}

export default MyApp
