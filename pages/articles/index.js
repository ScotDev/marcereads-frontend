import Head from 'next/head';

import fetchData from "../../utils/fetchData.js";

import PostsNavigation from '../../components/PostsNavigation';
import PostsBrowse from '../../components/PostsBrowse';
import AllPosts from '../../components/AllPosts'
import About from '../../components/About'
import headerStyles from '../../styles/Header.module.css'

export default function browse({ data, dataAbout, width }) {

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
            <PostsBrowse width={width} data={data} />
            {/* <AllPosts width={width} data={data} metaData={metaData} /> */}
            <About data={dataAbout} />
        </>
    )
}

export const getStaticProps = async () => {
    try {

        const { data: dataAbout } = await fetchData("about-section")
        const { data: dataArticles } = await fetchData("articles")

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
                data: reorderedData,
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

