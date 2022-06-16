import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Featured from '../components/Featured';
import AllPosts from '../components/AllPosts';
import Latest from '../components/Latest';
import About from '../components/About';
import BookScroller from '../components/BookScroller';

export default function Home({ width }) {


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
        {width > 768 ? <AllPosts width={width} showViewMore /> : <Featured />}

        <BookScroller />
        {width > 768 ? null : <Latest />}
        {width > 768 ? null : <About />}
      </main>
    </div>
  )
}
