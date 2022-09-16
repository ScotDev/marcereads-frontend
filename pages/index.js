import Head from 'next/head';

import fetchData from '../utils/fetchData';

import homeStyles from '../styles/Home.module.css';

import Header from '../components/Header';
import Latest from '../components/Latest';
import About from '../components/About';
import BookScroller from '../components/BookScroller';
import PostsHomepage from '../components/PostsHome';
import Error from '../components/Error'

export default function Home({ width, dataPostsHomepage, dataAbout, dataLatest, dataTBR }) {

  if (!dataPostsHomepage || dataPostsHomepage === {}) {
    return <Error isRootPath />
  }
  return (
    <>
      <Head>
        <title>Marcereads - Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="HandheldFriendly" content="true" />
        <meta charSet="utf-8" />
        <meta property="og:type" content="website" />
        <meta name="og:description" content="Marcereads book reviews and bookstagram guides" />
        <meta property="og:url" content="https://www.marcereads.com" />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="/"></link>
      </Head>

      <div className={homeStyles.home}>
        <Header data={dataAbout} />
        <PostsHomepage width={width} data={dataPostsHomepage} />
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

    const { data: dataArticles } = await fetchData("articles")
    const { data: dataAbout } = await fetchData("about-section");
    const { data: dataTBR } = await fetchData("tbrs");

    const getDataPosts = async () => {
      let reorderedData = [...dataArticles];

      const hasFeaturedData = await dataArticles.some(item => {
        return item.attributes.isFeatured === true;
      })

      if (hasFeaturedData) {
        const featuredData = await dataArticles.filter(item => {
          return item.attributes.isFeatured;
        })
        const featuredDataIndex = await dataArticles.findIndex(item => {
          return item.attributes.isFeatured;
        })

        reorderedData.splice(featuredDataIndex, 1)
        reorderedData.unshift(featuredData[0])
      }

      return reorderedData;
    }

    const reorderedData = await getDataPosts()

    return {
      props: {
        dataPostsHomepage: reorderedData,
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