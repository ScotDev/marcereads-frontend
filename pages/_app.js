import React, { useState, useEffect } from 'react';
import { GoogleAnalytics } from "nextjs-google-analytics";

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
      <GoogleAnalytics trackPageViews />
      <Component width={width} {...pageProps} />
    </Layout>
  )
}

export default MyApp
