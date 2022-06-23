import Head from 'next/head';

const qs = require('qs');

import fetchData from '../utils/fetchData';

import homeStyles from '../styles/Home.module.css';
import Header from '../components/Header';
import Featured from '../components/Featured';
import AllPosts from '../components/AllPosts';
import Latest from '../components/Latest';
import About from '../components/About';
import BookScroller from '../components/BookScroller';

export default function Home({ width, data, dataAbout, dataFeatured, dataLatest, dataTBR }) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Marcereads</title>
        <meta name="description" content="Marcereads blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={homeStyles.home}>
        <Header />
        {width > 768 ? <AllPosts width={width} data={data} showViewMore /> : <Featured data={dataFeatured} />}

        <BookScroller data={dataTBR} />
        {width > 768 ? null : <Latest data={dataLatest} />}
        {width > 768 ? null : <About data={dataAbout} />}
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  try {

    // const featuredQuery = qs.stringify({
    //   populate: '*',
    //   filters: {
    //     isFeatured: {
    //       $eq: true
    //     }
    //   }
    // }, {
    //   encodeValuesOnly: true,
    // });

    // // Add limit of 6 items
    // const latestQuery = qs.stringify({
    //   populate: '*',
    //   sort: ['createdAt:desc']
    // },

    //   {
    //     encodeValuesOnly: true,
    //   });



    const { loading: loadingArticles, data: dataArticles, error: errorArticles } = await fetchData("articles")
    const { loading: loadingAbout, data: dataAbout, error: errorAbout } = await fetchData("about-section");
    const { loading: loadingFeatured, data: dataFeatured, error: errorFeatured } = await fetchData("articles", true);
    const { loading: loadingLatest, data: dataLatest, error: errorLatest } = await fetchData("articles");
    const { loading: loadingTBR, data: dataTBR, error: errorTBR } = await fetchData("tbrs");

    return {
      props: {
        data: await dataArticles,
        dataFeatured: await dataFeatured,
        dataLatest: await dataLatest,
        dataTBR: await dataTBR,
        dataAbout: await dataAbout,
      }
    }
  } catch (error) {
    console.error(error)
    return {
      props: {},
      revalidate: 1
    }
  }

}