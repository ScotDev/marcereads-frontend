import Head from 'next/head';

import fetchData from "../../utils/fetchData.js";

import PostsNavigation from '../../components/PostsNavigation';
import AllPosts from '../../components/AllPosts'
import About from '../../components/About'
import headerStyles from '../../styles/Header.module.css'

export default function browse({ data, totalArticlesCount, currentPage, dataAbout, width }) {

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
            <AllPosts width={width} data={data} totalArticlesCount={totalArticlesCount} currentPage={currentPage} showPagination />
            <About data={dataAbout} />
        </>
    )
}

export const getStaticProps = async () => {
    try {

        const { data: dataAbout, error: errorAbout } = await fetchData("about-section")
        const { itemCount, currentPage, data: dataArticles, error: errorArticles } = await fetchData("articles")

        return {
            props: {
                data: await dataArticles,
                totalArticlesCount: itemCount,
                currentPage: currentPage,
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
