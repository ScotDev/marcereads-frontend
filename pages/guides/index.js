import Head from 'next/head';
import fetchData from "../../utils/fetchData.js";

import PostsNavigation from '../../components/PostsNavigation';
import AllPosts from '../../components/AllPosts'
import About from '../../components/About'
import headerStyles from '../../styles/Header.module.css'

export default function guides({ width, data, dataAbout }) {
    return (
        <>        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Guides</title>
            <meta name="description" content="Marcereads Blog - Guides" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
            <header className={headerStyles.header}>
                <h1 className={headerStyles.page_title}>Guides</h1>
            </header>
            <PostsNavigation />
            <AllPosts width={width} data={data} showPagination />
            <About data={dataAbout} />
        </>
    )
}

export const getStaticProps = async () => {
    try {

        const { loading: loadingAbout, data: dataAbout, error: errorAbout } = await fetchData("about-section")
        const { loading: loadingGuides, data: dataGuides, error: errorGuides } = await fetchData("articles", false, false, true)

        return {
            props: {
                data: await dataGuides,
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
