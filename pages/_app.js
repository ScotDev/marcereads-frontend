import React, { useState, useEffect } from 'react';

import { Layout } from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {


  const [width, setWindowWidth] = useState(0);

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
