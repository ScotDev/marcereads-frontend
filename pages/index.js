import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Featured from '../components/Featured';
import Latest from '../components/Latest';
import About from '../components/About';
import BookScroller from '../components/BookScroller';

export default function Home() {

  // Window width detection should be moved up to high level 

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
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Marcereads</title>
        <meta name="description" content="Marcereads blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />

        <Featured />
        <BookScroller />
        {width > 768 ? null : <Latest />}
        {width > 768 ? null : <About />}
      </main>
    </div>
  )
}
