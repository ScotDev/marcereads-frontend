import Head from 'next/head';
import fetchData from "../../utils/fetchData.js";

import PostsNavigation from '../../components/PostsNavigation';
import AllPosts from '../../components/AllPosts'
import About from '../../components/About'
import headerStyles from '../../styles/Header.module.css'

export default function reviews({ width, data, dataAbout }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Reviews</title>
                <meta name="description" content="Marcereads Blog - Reviews" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={headerStyles.header}>
                <h1 className={headerStyles.page_title}>Reviews</h1>
            </header>
            <PostsNavigation />
            <AllPosts width={width} data={data} showPagination />
            <About data={dataAbout} />
        </>
    )
}
export const getStaticProps = async ({ params }) => {
    try {

        const { loading: loadingAbout, data: dataAbout, error: errorAbout } = await fetchData("about-section")
        const { loading: loadingReviews, data: dataReviews, error: errorReviews } = await fetchData("articles", false, true)

        return {
            props: {
                data: await dataReviews,
                dataAbout: await dataAbout
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
