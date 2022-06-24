import Head from 'next/head';

import fetchData from "../../utils/fetchData.js";

import Featured from '../../components/Featured';
import PostsNavigation from '../../components/PostsNavigation';
import AllPosts from '../../components/AllPosts'
import About from '../../components/About'
import headerStyles from '../../styles/Header.module.css'

export default function browse({ data, dataFeatured, dataAbout, width }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Browse</title>
                <meta name="description" content="Marcereads blog" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={headerStyles.header}>
                <h1 className={headerStyles.page_title}>Posts</h1>
            </header>

            <PostsNavigation />
            {width > 768 ? null : <Featured data={dataFeatured} />}
            <AllPosts width={width} data={data} showPagination />
            <About data={dataAbout} />
        </>
    )
}

export const getStaticProps = async () => {
    try {

        const { loading: loadingAbout, data: dataAbout, error: errorAbout } = await fetchData("about-section")
        const { loading: loadingFeatured, data: dataFeatured, error: errorFeatured } = await fetchData("articles", true)
        const { loading: loadingArticles, data: dataArticles, error: errorArticles } = await fetchData("articles")

        return {
            props: {
                data: await dataArticles,
                dataFeatured: await dataFeatured,
                dataAbout: await dataAbout,
            },
            revalidate: 1
        }
    } catch (error) {
        return {
            props: {},
            revalidate: 1
        }
    }

}
