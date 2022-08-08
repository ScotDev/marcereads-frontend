import Head from 'next/head';

import fetchData from '../utils/fetchData';

import homeStyles from '../styles/Home.module.css';

import Header from '../components/Header';
import AllPosts from '../components/AllPosts';
import Latest from '../components/Latest';
import About from '../components/About';
import BookScroller from '../components/BookScroller';

export default function Home({ width, data, metaData, dataAbout, dataLatest, dataTBR }) {


  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Marcereads</title>
        <meta name="description" content="Marcereads blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={homeStyles.home}>
        <Header data={dataAbout} />
        <AllPosts width={width} data={data} metaData={metaData} showViewMore />

        <BookScroller data={dataTBR} />
        {width > 768 ? null : <Latest data={dataLatest} />}
        {width > 768 ? null : <About data={dataAbout} />}
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  try {

    // refactor this block, error and loading states do nothing

    const { data: dataArticles, metaData } = await fetchData("articles")
    const { data: dataAbout, error: errorAbout } = await fetchData("about-section");
    const { data: dataTBR, error: errorTBR } = await fetchData("tbrs");
    // const aboutRes = await fetchData("about-section");

    return {
      props: {
        data: await dataArticles,
        // totalArticlesCount: itemCount,
        metaData: metaData,
        dataLatest: await dataArticles,
        dataTBR: await dataTBR,
        dataAbout: await dataAbout,
      },
      revalidate: 1
    }
  } catch (error) {
    console.error(error)
    return {
      props: {},
      revalidate: 1
    }
  }

}