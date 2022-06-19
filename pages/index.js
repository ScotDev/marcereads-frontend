import Head from 'next/head';

const qs = require('qs');

import homeStyles from '../styles/Home.module.css';
import Header from '../components/Header';
import Featured from '../components/Featured';
import AllPosts from '../components/AllPosts';
import Latest from '../components/Latest';
import About from '../components/About';
import BookScroller from '../components/BookScroller';

export default function Home({ width, data, dataAbout, dataFeatured, dataLatest }) {


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

        <BookScroller />
        {width > 768 ? null : <Latest data={dataLatest} />}
        {width > 768 ? null : <About data={dataAbout} />}
      </div>
    </>
  )
}

export const getServerSideProps = async () => {

  try {

    const featuredQuery = qs.stringify({
      populate: '*',
      filters: {
        isFeatured: {
          $eq: true
        }
      }
    }, {
      encodeValuesOnly: true,
    });

    // Add limit of 6 items
    const latestQuery = qs.stringify({
      populate: '*',
      sort: ['createdAt:desc']
    },

      {
        encodeValuesOnly: true,
      });


    const CMS_ENDPOINT = process.env.CMS_ENDPOINT;
    const res = await fetch(`${CMS_ENDPOINT}/articles?populate=*`)
    const resFeatured = await fetch(`${CMS_ENDPOINT}/articles?${featuredQuery}`)
    const resLatest = await fetch(`${CMS_ENDPOINT}/articles?${latestQuery}`)
    const resAbout = await fetch(`${CMS_ENDPOINT}/about-section?populate=*`)

    const parsedResLatest = await resLatest.json()

    return {
      props: {
        data: await res.json(),
        dataFeatured: await resFeatured.json(),
        dataAbout: await resAbout.json(),
        dataLatest: await parsedResLatest.data
      }
    }
  } catch (error) {
    return {
      props: {}
    }
  }

}